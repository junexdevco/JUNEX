import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3001", { waitUntil: "networkidle" });
await page.screenshot({ path: "reference/screenshots/junex-preview.png", fullPage: true });
await browser.close();
console.log("saved");
