import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One Line, One Laugh — the entry text. Written from the competition brief:
// one funny line, at most 200 characters, judged pairwise by an AI judge.
// Concrete details (412 laps, a 3-metre hallway), three beats
// (laps → unionized → dues), and the punchline lands on the last words.
const ENTRY =
  "My Roomba did 412 laps of the same 3-metre hallway, unionized, and now the dust bunnies pay its dues.";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void inputDir;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
