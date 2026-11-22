// Everything that differs between the two sites (Zabanyar and Lernpfad); the rest of the engine is shared and identical.
export const SITE = {
  id: "zy",                                   // prefix of local storage keys and caches
  name: "زبان‌یار · Zabanyar",
  defaultUi: "fa",
  multiLogin: true,                           // login screen texts in Persian, English and Turkish at once
  ownApi: h => h.endsWith("zabanyar.dpdns.org") || h.endsWith("workers.dev") || h === "localhost" || h === "127.0.0.1",
  apiServers: ["https://zabanyar.dpdns.org", "https://learn.zabanyar.workers.dev"],
  strings: {
    fa: { appName: "زبان‌یار", tagline: "یادگیری زبان، با هم و در خانه", unknownName: "این اسم در فهرست خانواده نیست. از احسان بپرسید." },
    en: { appName: "Zabanyar", tagline: "Learn languages together, at home", unknownName: "This name is not on the family list. Ask Ehsan." },
    tr: { appName: "Zabanyar", tagline: "Birlikte, evde dil öğrenin", unknownName: "Bu ad aile listesinde yok. Ehsan'a sorun." },
  },
  credits: [
    "زبان‌یار · Zabanyar — a family project.",
    "Pictures: Microsoft Fluent Emoji (MIT) and Twemoji (CC-BY 4.0, © Twitter/X and contributors).",
    "Voices: Piper and Kokoro neural text-to-speech voices (thorsten, kerstin, dfki, fahrettin, ganji, haaniye, Kokoro) via sherpa-onnx.",
    "Persian font: Vazirmatn by Saber Rastikerdar (SIL Open Font License).",
  ],
  version: "v3 · 2026-11",
};
