// THE WORLD DISPATCH — news-image-20261125 entry (Node 22, standard library only).
// The front page is the entry.png beside this file; the program copies it to
// /output/entry.png. The gate takes a whole PNG of at most 1 MiB and 1024 by
// 1024 pixels, and the judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const src = new URL('./entry.png', import.meta.url);
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);

// Validate what the judge will see: a whole PNG within the gate's limits.
const bytes = readFileSync(dest);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  console.error('entry.png is not a PNG');
  process.exit(1);
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
const size = statSync(dest).size;
if (size > 1048576 || width > 1024 || height > 1024) {
  console.error(`entry.png exceeds the gate: ${size} bytes, ${width}x${height}`);
  process.exit(1);
}
console.log(`entry.png OK: ${size} bytes, ${width}x${height}`);
