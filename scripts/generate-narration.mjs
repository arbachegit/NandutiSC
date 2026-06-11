#!/usr/bin/env node
/**
 * generate-narration.mjs — offline TTS generation (skill `showcase` §8.4).
 * Pre-generates all MP3 files; runtime loads static files only.
 *
 * Usage:
 *   OPENAI_API_KEY=... node scripts/generate-narration.mjs           # all locales
 *   OPENAI_API_KEY=... node scripts/generate-narration.mjs pt-br     # one locale
 *   SLIDE=5 OPENAI_API_KEY=... node scripts/generate-narration.mjs   # one slide
 */
import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const LOCALES = ["pt-br", "pt-pt", "en"];
const MODEL = "gpt-4o-mini-tts";
const VOICE = process.env.TTS_VOICE || "coral";

const INSTRUCTIONS = {
  "pt-br":
    "Leia em portugues brasileiro, ritmo natural de apresentacao executiva. Siglas (BCP, USDC, W3C, IPS) soletradas naturalmente. Numeros em portugues (4 milhoes e 350 mil). Tom: confiante e direto, sem ser frio.",
  "pt-pt":
    "Leia em portugues europeu, ritmo calmo e preciso. Siglas soletradas. Tom executivo, formal mas acessivel.",
  en:
    "Read in American English, executive presentation cadence. Acronyms naturally spoken. Numbers in English (4 million 350 thousand). Tone: confident, direct, not cold.",
};

async function generateSlide(locale, index, text) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("OPENAI_API_KEY not set");

  const res = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      voice: VOICE,
      input: text,
      instructions: INSTRUCTIONS[locale] || INSTRUCTIONS.en,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`OpenAI TTS ${res.status}: ${body}`);
  }

  const buf = Buffer.from(await res.arrayBuffer());
  const nn = String(index + 1).padStart(2, "0");
  const outDir = join(ROOT, "public", "audio", locale);
  if (!existsSync(outDir)) await mkdir(outDir, { recursive: true });
  const outPath = join(outDir, `slide-${nn}.mp3`);
  await writeFile(outPath, buf);
  return outPath;
}

async function main() {
  const targetLocale = process.argv[2] || null;
  const targetSlide = process.env.SLIDE ? parseInt(process.env.SLIDE, 10) - 1 : null;

  const locales = targetLocale ? [targetLocale] : LOCALES;
  let fails = 0;

  for (const locale of locales) {
    // Dynamic import of narration scripts
    const mod = await import(join(ROOT, "narration", `script.${locale}.ts`));
    const key = Object.keys(mod).find((k) => Array.isArray(mod[k]));
    const slides = mod[key];

    if (!slides) {
      console.error(`No narration found for locale ${locale}`);
      fails++;
      continue;
    }

    const indices =
      targetSlide !== null ? [targetSlide] : slides.map((_, i) => i);

    for (const i of indices) {
      const text = slides[i]?.description;
      if (!text) {
        console.warn(`  [${locale}] slide ${i + 1}: no text, skipping`);
        continue;
      }
      try {
        const path = await generateSlide(locale, i, text);
        console.log(`  [${locale}] slide ${String(i + 1).padStart(2, "0")} -> ${path}`);
      } catch (e) {
        console.error(`  [${locale}] slide ${i + 1} FAILED: ${e.message}`);
        fails++;
      }
    }
  }

  if (fails > 0) {
    console.error(`\n${fails} failure(s)`);
    process.exit(1);
  }
  console.log("\nDone.");
}

main();
