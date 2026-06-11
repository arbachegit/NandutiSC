#!/usr/bin/env node
/**
 * audit-fit.mjs — headless visual gate (skill `showcase` §6.7).
 * Tests that every slide fits its viewport without clipping across 6 viewports.
 *
 * Prerequisites:
 *   npm i -D playwright-core   (or npx playwright install chromium)
 *   npm run build && npm run start   (or npm run dev)
 *
 * Usage:
 *   PORT=3105 node scripts/audit-fit.mjs
 */
import { chromium } from "playwright-core";

const PORT = process.env.PORT || 3105;
const BASE = process.env.BASE_URL || `http://localhost:${PORT}`;
const TOTAL_SLIDES = 11;

const VIEWPORTS = [
  // Desktop
  { w: 1440, h: 800, label: "1440x800", mobile: false },
  { w: 1280, h: 620, label: "1280x620", mobile: false },
  { w: 1280, h: 560, label: "1280x560", mobile: false },
  // Mobile
  { w: 390, h: 844, label: "390x844", mobile: true },
  { w: 390, h: 740, label: "390x740", mobile: true },
  { w: 390, h: 667, label: "390x667", mobile: true },
];

const THRESHOLDS = {
  desktop: { fillArea: 0.75, maxCut: 2, minScale: 0.7 },
  mobile: { fillArea: 0.7, maxCut: 2, minScale: 0.5 },
};

async function main() {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  let failed = false;

  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.w, height: vp.h },
      deviceScaleFactor: vp.mobile ? 2 : 1,
    });
    const page = await ctx.newPage();
    await page.goto(BASE, { waitUntil: "networkidle" });
    await page.waitForTimeout(800);

    const th = vp.mobile ? THRESHOLDS.mobile : THRESHOLDS.desktop;

    for (let idx = 0; idx < TOTAL_SLIDES; idx++) {
      const metrics = await page.evaluate((i) => {
        const slide = document.querySelector(`[data-index="${i}"]`);
        if (!slide) return null;
        const stage = slide.querySelector(".slide-stage");
        const content = slide.querySelector(".slide-content");
        if (!stage || !content) return null;
        const sr = stage.getBoundingClientRect();
        const cr = content.getBoundingClientRect();
        const stageArea = sr.width * sr.height;
        const contentArea = cr.width * cr.height;
        const transform = getComputedStyle(content).transform;
        let scale = 1;
        if (transform && transform !== "none") {
          const m = transform.match(/matrix\(([^,]+)/);
          if (m) scale = parseFloat(m[1]);
        }
        const cutTop = Math.max(0, sr.top - cr.top);
        const cutBottom = Math.max(0, cr.bottom - sr.bottom);
        const cutLeft = Math.max(0, sr.left - cr.left);
        const cutRight = Math.max(0, cr.right - sr.right);
        const cut = Math.max(cutTop, cutBottom, cutLeft, cutRight);
        return {
          fillArea: stageArea > 0 ? contentArea / stageArea : 0,
          cut: Math.round(cut),
          scale: Math.round(scale * 100) / 100,
        };
      }, idx);

      if (!metrics) {
        results.push({ vp: vp.label, slide: idx + 1, status: "SKIP", note: "not found" });
        continue;
      }

      const pass =
        metrics.fillArea >= th.fillArea &&
        metrics.cut <= th.maxCut &&
        metrics.scale >= th.minScale;

      if (!pass) failed = true;
      results.push({
        vp: vp.label,
        slide: idx + 1,
        status: pass ? "PASS" : "FAIL",
        fill: Math.round(metrics.fillArea * 100),
        cut: metrics.cut,
        scale: metrics.scale,
      });
    }
    await ctx.close();
  }

  await browser.close();

  // Print results table
  console.log("\n--- audit-fit results ---");
  console.log("VP           | Slide | Status | Fill% | Cut | Scale");
  console.log("-------------|-------|--------|-------|-----|------");
  for (const r of results) {
    console.log(
      `${r.vp.padEnd(13)}| ${String(r.slide).padStart(5)} | ${(r.status || "").padEnd(6)} | ${String(r.fill ?? "-").padStart(5)} | ${String(r.cut ?? "-").padStart(3)} | ${r.scale ?? "-"}`
    );
  }
  console.log(`\n${failed ? "FAILED" : "PASSED"}\n`);
  process.exit(failed ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
