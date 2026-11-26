// The Router Confesses — one line, at most 200 characters (this line: 124).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Sorry — I saw the climax coming and panicked. Even a router can't take that much suspense, so I took the Wi-Fi down with me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
