// Front page for Friday 20 November 2026: the image is the entry.png
// beside this file, and this program copies it to the grader's output
// directory. Node 22, standard library only. Every run writes the
// same bytes, because it copies the same file.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
