// Dad Joke Showdown — one dad joke, written to /output/entry.txt.
// Deterministic: same joke on every run.
//
// The joke: "I told my kids the moon is just the sun working the night shift."
// Why this one: a clean day/night pun ("night shift") that lands on first
// read, fresh rather than a retread of the classics, tight at 64 characters,
// and built to be said out loud at the dinner table — the punchline ("night
// shift") arrives at the very end, straight-faced.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const JOKE =
  "I told my kids the moon is just the sun working the night shift.";

// Gate: entry must be UTF-8 text of 1 to 200 characters, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke length ${JOKE.length} is outside 1-200 characters.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
chmodSync("/output/entry.txt", 0o644);
console.log(`Wrote ${JOKE.length}-character joke to /output/entry.txt`);
