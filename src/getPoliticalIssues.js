import fs from "fs";
import readline from "readline";

async function getPoliticalIssues() {
  const file = readline.createInterface({
    input: fs.createReadStream("src/politicalIssues.txt"),
    output: process.stdout,
    terminal: false,
  });

  let politicalIssues = [];

  return new Promise((resolve, reject) => {
    file.on("line", (line) => {
      const cleanLine = line.slice(1, -2);
      politicalIssues.push(cleanLine);
    });

    file.on("close", () => {
      resolve(politicalIssues);
    });

    file.on("error", (err) => {
      reject(err);
    });
  });
}

export { getPoliticalIssues };
