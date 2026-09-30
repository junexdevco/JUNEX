// Extrae referencias de diseño (NO el contenido/código) de una landing page
// usando Playwright: capturas de pantalla + tokens de diseño (colores, fuentes,
// espaciados, estructura de secciones). Esto es solo para INSPIRACIÓN visual,
// no para copiar textos, imágenes ni marcas de terceros.
import { chromium } from "playwright";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const TARGET_URL = process.env.REF_URL || "https://www.koyeb.com/";
const OUT_DIR = path.resolve("reference");
const SHOTS_DIR = path.join(OUT_DIR, "screenshots");

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

async function extractDesignTokens(page) {
  return page.evaluate(() => {
    const colorCount = new Map();
    const fontFamilies = new Set();
    const fontSizes = new Set();
    const radii = new Set();
    const shadows = new Set();

    const all = document.querySelectorAll("body, body *");
    all.forEach((el) => {
      const cs = getComputedStyle(el);
      [cs.color, cs.backgroundColor].forEach((c) => {
        if (c && c !== "rgba(0, 0, 0, 0)" && c !== "transparent") {
          colorCount.set(c, (colorCount.get(c) || 0) + 1);
        }
      });
      if (cs.fontFamily) fontFamilies.add(cs.fontFamily);
      if (cs.fontSize) fontSizes.add(cs.fontSize);
      if (cs.borderRadius && cs.borderRadius !== "0px") radii.add(cs.borderRadius);
      if (cs.boxShadow && cs.boxShadow !== "none") shadows.add(cs.boxShadow);
    });

    const topColors = [...colorCount.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15)
      .map(([color, count]) => ({ color, count }));

    // Estructura de secciones de alto nivel (tags semánticos + headings)
    const sections = [...document.querySelectorAll("section, main > div, header, footer")]
      .slice(0, 40)
      .map((el) => {
        const heading = el.querySelector("h1, h2, h3");
        return {
          tag: el.tagName.toLowerCase(),
          id: el.id || null,
          className: (el.className || "").toString().slice(0, 120),
          headingText: heading ? heading.textContent.trim().slice(0, 80) : null,
        };
      });

    return {
      topColors,
      fontFamilies: [...fontFamilies],
      fontSizes: [...fontSizes].sort(),
      borderRadii: [...radii],
      boxShadows: [...shadows].slice(0, 10),
      sections,
    };
  });
}

async function run() {
  await mkdir(SHOTS_DIR, { recursive: true });
  const browser = await chromium.launch();

  try {
    let tokens = null;

    for (const vp of VIEWPORTS) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
      });
      const page = await context.newPage();
      await page.goto(TARGET_URL, { waitUntil: "networkidle", timeout: 60000 });
      await page.waitForTimeout(1000);

      const shotPath = path.join(SHOTS_DIR, `${vp.name}-full.png`);
      await page.screenshot({ path: shotPath, fullPage: true });
      console.log(`Captura guardada: ${shotPath}`);

      if (vp.name === "desktop") {
        tokens = await extractDesignTokens(page);
      }

      await context.close();
    }

    await writeFile(
      path.join(OUT_DIR, "design-tokens.json"),
      JSON.stringify({ source: TARGET_URL, extractedAt: new Date().toISOString(), ...tokens }, null, 2),
      "utf-8"
    );
    console.log(`Tokens de diseño guardados en: ${path.join(OUT_DIR, "design-tokens.json")}`);
  } finally {
    await browser.close();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
