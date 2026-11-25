import { mkdirSync, writeFileSync } from "node:fs";

// One line, at most 200 characters, that lands entirely on its own.
const entry =
  "At 6:47 this morning my neighbour knocked and handed me my own Amazon parcel, opened, resealed, with a Post-it that said 'you'll like this one'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
