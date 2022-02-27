import fs from "fs";

export function readJsonFile(path: string) {
  if (typeof path !== "string") {
    return;
  }

  if (!path.endsWith(".json")) {
    return;
  }

  try {
    return JSON.parse(fs.readFileSync(path, "utf-8")) as Record<string, unknown>;
  } catch {
    return;
  }
}
