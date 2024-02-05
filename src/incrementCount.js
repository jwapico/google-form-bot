import fs from "fs";

function incrementCount() {
  let currentValue = 0;
  const filename = "src/count.txt";

  try {
    currentValue = parseInt(fs.readFileSync(filename, "utf-8")) || 0;
  } catch (err) {
    console.error("Error reading the file:", err);
  }

  const newValue = currentValue + 1;

  try {
    fs.writeFileSync(filename, newValue.toString(), "utf-8");
  } catch (err) {
    console.error("Error writing to the file:", err);
  }
}

export { incrementCount };
