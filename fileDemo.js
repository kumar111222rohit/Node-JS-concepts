const fs = require("fs/promises");

async function readAndParseJsonFile() {
  try {
    const data = await fs.readFile("test.json", "utf-8");
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  } catch (err) {
    console.error("Error reading the file:", err);
  }
}

readAndParseJsonFile();

async function writeFile() {
  await fs.writeFile("test.json", "kumar");
}
// writeFile();
