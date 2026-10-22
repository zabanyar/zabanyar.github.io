#!/usr/bin/env python3
"""Generate MP3 audio for tools/tts_jobs.json (or a jobs file given as argv[1]) with neural voices via sherpa-onnx.
Skips files that already exist. Usage: tts.py [jobs.json] [out_root] [max_seconds]"""
import json, os, sys, subprocess, tempfile, time, glob
import sherpa_onnx, soundfile as sf

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TTS = os.environ.get("ZY_TTS_MODELS", "/home/claude/tts")
# voice id -> (model directory, speaker id). "kokoro-…" directories use the Kokoro model type.
VOICES = {
    "en_f": ("kokoro-en-v0_19", 3),            # Kokoro "Sarah" (American, female)
    "en_m": ("kokoro-en-v0_19", 6),            # Kokoro "Michael" (American, male)
    "de_f": ("vits-piper-de_DE-kerstin-low", 0),
    "de_m": ("vits-piper-de_DE-thorsten-high", 0),
    "tr_f": ("vits-piper-tr_TR-dfki-medium", 0),
    "tr_m": ("vits-piper-tr_TR-fahrettin-medium", 0),
    "fa_f": ("vits-mimic3-fa-haaniye_low", 0),   # female
    "fa_m": ("vits-piper-fa_IR-ganji-medium", 0),  # male, clearest Persian voice tested
}
engines = {}

def engine(v):
    d, _ = VOICES[v]
    if d not in engines:
        p = f"{TTS}/{d}"
        if d.startswith("kokoro"):
            m = sherpa_onnx.OfflineTtsModelConfig(kokoro=sherpa_onnx.OfflineTtsKokoroModelConfig(
                model=f"{p}/model.onnx", voices=f"{p}/voices.bin", tokens=f"{p}/tokens.txt", data_dir=f"{p}/espeak-ng-data"), num_threads=4)
        else:
            onnx = glob.glob(f"{p}/*.onnx")[0]
            m = sherpa_onnx.OfflineTtsModelConfig(vits=sherpa_onnx.OfflineTtsVitsModelConfig(
                model=onnx, tokens=f"{p}/tokens.txt", data_dir=f"{p}/espeak-ng-data"), num_threads=4)
        engines[d] = sherpa_onnx.OfflineTts(sherpa_onnx.OfflineTtsConfig(model=m))
    return engines[d]

def main():
    jobs_file = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, "tools", "tts_jobs.json")
    out_root = sys.argv[2] if len(sys.argv) > 2 else os.path.join(ROOT, "docs")
    budget = float(sys.argv[3]) if len(sys.argv) > 3 else 1e9
    jobs = json.load(open(jobs_file, encoding="utf-8"))
    todo = [(f, j) for f, j in jobs.items() if not os.path.exists(os.path.join(out_root, f))]
    print("todo", len(todo), flush=True)
    tmp = tempfile.mkdtemp(); t0 = time.time()
    for i, (f, j) in enumerate(sorted(todo, key=lambda x: x[1]["voice"])):
        if time.time() - t0 > budget:
            print("paused", i, flush=True); break
        text = j["text"]
        speed = j.get("speed") or (0.8 if len(text.split()) <= 2 else 0.9)
        a = engine(j["voice"]).generate(text, sid=VOICES[j["voice"]][1], speed=speed)
        wav = os.path.join(tmp, "x.wav")
        sf.write(wav, a.samples, a.sample_rate)
        out = os.path.join(out_root, f)
        os.makedirs(os.path.dirname(out), exist_ok=True)
        part = out + ".part.mp3"
        subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", wav, "-af",
                        "silenceremove=start_periods=1:start_threshold=-50dB,areverse,silenceremove=start_periods=1:start_threshold=-50dB,areverse,adelay=80,apad=pad_dur=0.15",
                        "-ac", "1", "-ar", "24000", "-b:a", "48k", part], check=True)
        os.replace(part, out)   # atomic: no half-written files if interrupted
        if i % 200 == 0:
            print(i, f, text[:40], flush=True)
    else:
        print("done", flush=True)

if __name__ == "__main__":
    main()
