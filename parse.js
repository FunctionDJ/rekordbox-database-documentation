import { Parser } from "@dbml/core";
import fs from "node:fs/promises";
import path from "path";

const dbmlPath = path.resolve("./project.dbml");
const contents = await fs.readFile(dbmlPath, "utf-8");

try {
  Parser.parse(contents, "dbml");
  console.log("👍");
} catch (error) {
  const isDBMLError = ["ElementError", "peg$SyntaxError"].includes(
    error.__proto__.constructor.name
  );

  if (isDBMLError) {
    console.error(
      `❌ Error in ${dbmlPath}:${error.location.start.line}:${error.location.start.column} :\n${error.message}`
    );
    process.exit(1);
  } else {
    throw error;
  }
}
