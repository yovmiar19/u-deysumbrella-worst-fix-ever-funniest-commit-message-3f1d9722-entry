import { mkdirSync, writeFileSync } from "node:fs";

// The commit message, built from its two halves so the joke reads
// as one line: the fix, then the quiet confession that it backfired.
const parts = [
  "Removed the console.log",
  "that was secretly holding the whole thing together.",
];
const entry = parts.join(" ");

// The gate only accepts 1 to 100 UTF-8 characters; refuse to write
// anything outside it rather than submit an invalid entry.
if (entry.length < 1 || entry.length > 100) {
  throw new Error(`entry is ${entry.length} chars, outside the 1-100 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
