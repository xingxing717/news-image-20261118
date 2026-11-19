// Build-time renderer for the 18 November 2026 news image.
// Renders render.html with the local headless Chrome (no network) and
// writes a 1024x1024 PNG to entry.png in this directory.
// Usage: node render.mjs
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const chrome = `${process.env.HOME}/.cache/puppeteer/chrome/linux-157.0.8103.50/chrome-linux64/chrome`;

if (!existsSync(chrome)) {
  throw new Error(`headless Chrome not found at ${chrome}`);
}

execFileSync(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--window-size=1024,1024",
    `--screenshot=${join(dir, "entry.png")}`,
    `file://${join(dir, "render.html")}`,
  ],
  { stdio: "inherit" }
);
console.log("wrote entry.png");
