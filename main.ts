// News-image entry for 18 November 2026 (Node 22, standard library only).
// The image is the entry.png beside this file, rendered at build time from
// render.html; the program copies it to the output directory.
// The gate takes a whole PNG of at most 1 MiB and 1024 by 1024 pixels, and
// the judge sees exactly the bytes copied, so this copy is byte-identical
// on every run. The copy is a plain file copy: no decoding, no re-encoding,
// no timestamps embedded, so the two grading runs must agree byte for byte.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL("./entry.png", import.meta.url),
  join(outDir, "entry.png")
);
