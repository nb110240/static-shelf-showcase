import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const documentationFiles = ["README.md", "CONTRIBUTING.md", "CLAUDE.md"];
const errors = [];

for (const relativePath of documentationFiles) {
  const absolutePath = resolve(root, relativePath);

  if (!existsSync(absolutePath)) {
    errors.push(`${relativePath}: file is missing`);
    continue;
  }

  const content = readFileSync(absolutePath, "utf8");
  const prose = content.replace(/```[\s\S]*?```/g, "");
  const headings = [...prose.matchAll(/^(#{1,6})\s+(.+)$/gm)];
  const topLevelHeadings = headings.filter((match) => match[1].length === 1);

  if (topLevelHeadings.length !== 1) {
    errors.push(`${relativePath}: expected exactly one level-one heading`);
  }

  if (!content.endsWith("\n")) {
    errors.push(`${relativePath}: file must end with a newline`);
  }

  for (let index = 1; index < headings.length; index += 1) {
    const previousLevel = headings[index - 1][1].length;
    const currentLevel = headings[index][1].length;
    if (currentLevel > previousLevel + 1) {
      errors.push(`${relativePath}: heading level jumps near “${headings[index][2]}”`);
    }
  }

  for (const match of prose.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    const target = match[1].trim().replace(/^<|>$/g, "");
    if (/^(?:https?:|mailto:|tel:|#)/.test(target)) continue;

    const fileTarget = decodeURIComponent(target.split("#")[0]);
    if (fileTarget && !existsSync(resolve(dirname(absolutePath), fileTarget))) {
      errors.push(`${relativePath}: local link target does not exist: ${fileTarget}`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Documentation check failed:\n- ${errors.join("\n- ")}`);
  process.exit(1);
}

console.log(`Documentation check passed: ${documentationFiles.length} files.`);
