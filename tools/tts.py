#!/usr/bin/env python3
"""Generate MP3 audio for tools/tts_jobs.json with Piper voices (sherpa-onnx). Skips existing files."""
import json, os, sys, subprocess, tempfile
import sherpa_onnx, soundfile as sf

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TTS = "/home/claude/tts"
VOICES = {
    "en_f": "en_US-lessac-high", "en_m": "en_US-ryan-high",
    "de_f": "de_DE-kerstin-low", "de_m": "de_DE-thorsten-high",
    "tr_f": "tr_TR-dfki-medium", "tr_m": "tr_TR-fahrettin-medium",
    "fa_f": "fa_IR-amir-medium", "fa_m": "fa_IR-gyro-medium",
}
engines = {}

def engine(v):
    if v not in engines:
        name = VOICES[v]; d = f"{TTS}/vits-piper-{name}"
        cfg = sherpa_onnx.OfflineTtsConfig(model=sherpa_onnx.OfflineTtsModelConfig(
            vits=sherpa_onnx.OfflineTtsVitsModelConfig(model=f"{d}/{name}.onnx", tokens=f"{d}/tokens.txt", data_dir=f"{d}/espeak-ng-data"),
            num_threads=4))
        engines[v] = sherpa_onnx.OfflineTts(cfg)
    return engines[v]

def main():
    jobs = json.load(open(os.path.join(ROOT, "tools", "tts_jobs.json"), encoding="utf-8"))
    todo = [(f, j) for f, j in jobs.items() if not os.path.exists(os.path.join(ROOT, "docs", f))]
    print("todo", len(todo), flush=True)
    tmp = tempfile.mkdtemp()
    for i, (f, j) in enumerate(sorted(todo, key=lambda x: x[1]["voice"])):
        text = j["text"]
        speed = j.get("speed") or (0.8 if len(text.split()) <= 2 else 0.9)
        a = engine(j["voice"]).generate(text, sid=0, speed=speed)
        wav = os.path.join(tmp, "x.wav")
        sf.write(wav, a.samples, a.sample_rate)
        out = os.path.join(ROOT, "docs", f)
        os.makedirs(os.path.dirname(out), exist_ok=True)
        # trim leading/trailing silence a bit, add tiny pad, mono 32 kbps mp3
        subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", wav, "-af",
                        "silenceremove=start_periods=1:start_threshold=-50dB,areverse,silenceremove=start_periods=1:start_threshold=-50dB,areverse,adelay=60,apad=pad_dur=0.15",
                        "-ac", "1", "-ar", "22050", "-b:a", "40k", out], check=True)
        if i % 200 == 0:
            print(i, f, text[:40], flush=True)
    print("done", flush=True)

if __name__ == "__main__":
    main()
