# زبان‌یار · Zabanyar

A family language-learning website: **English** (explained in Persian), **German** (explained in English) and **Turkish** (explained in Persian), each with all levels **A1 · A2 · B1 · B2 · C1**, plus **Persian** for total beginners (explained in Turkish, A1). Pictures, natural voices, and interactive exercises (vocabulary, listening, reading, writing, grammar, word order, matching), progress synced per family member, and works offline.

## Addresses
- Main: https://zabanyar.dpdns.org
- Backup (Cloudflare): https://learn.zabanyar.workers.dev
- Backup (GitHub Pages): https://zabanyar.github.io — the progress sync still goes through Cloudflare; if it is unreachable, progress is kept on the device and synced later.

## Add or remove a family member
The name list is kept out of this public repository. It is the Worker secret **USERS** in Cloudflare:
dash.cloudflare.com → Workers & Pages → **learn** → Settings → Variables and secrets → USERS → edit. Value (JSON):
```json
[{ "id": "maryam", "name": "Maryam", "aliases": ["مریم"] }, …]
```
`id` is what they type to log in (not case-sensitive); `aliases` are other spellings that also work. Saving deploys immediately.
For local testing, put a `USERS=[…]` line in `.dev.vars` (ignored by git).

## How it is built
- `content/<course>/<level>/uNN.json` — lesson content (see `content/SCHEMA.md`, `content/CURRICULUM.md`, `content/CURRICULUM_DE_B2_C1.md`, `content/CURRICULUM_FA_TR.md`, `content/CURRICULUM_EN_A2_B1_TR_B1_B2.md`, `content/CURRICULUM_NEW_LEVELS.md`; review briefs and reports in `review/`). Validate with `python3 tools/validate.py content/*/*/*.json`.
- `tools/build.py` — turns content into `docs/data/…` (adds audio and picture paths, offline file lists, course index).
- `tools/tts.py` — generates the MP3 voices (sherpa-onnx: Kokoro for English, Piper/Mimic3 voices for the other languages).
- `docs/` — the website (plain HTML/CSS/JS, no build step; service worker for offline use).
- `src/worker.js` — Cloudflare Worker: name login + progress sync (Workers KV `zabanyar-progress`), serves `docs/` as static assets.
- `wrangler.jsonc` — Cloudflare config (worker `learn`, custom domain `zabanyar.dpdns.org`).

## Yearly reminder
The free name **zabanyar.dpdns.org** (DigitalPlat, account `etohidi`) expires **19 Oct 2027** — renew it for free at dashboard.digitalplat.org between June and October 2027.

## Credits
Pictures: Microsoft Fluent Emoji (MIT), Twemoji (CC-BY 4.0). Voices: Kokoro (Apache-2.0), Piper (thorsten, kerstin, dfki, fahrettin, ganji), Mimic3 (haaniye). Font: Vazirmatn (OFL).
