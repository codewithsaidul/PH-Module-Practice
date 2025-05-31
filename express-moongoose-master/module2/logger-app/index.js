const path = require("path");
const fs = require("fs");

const inputArg = process.argv.slice(2);

const message = inputArg.join(" ");
const timestamps = new Date().toISOString()

const txt = `${message} - ${timestamps} \n`

if (!txt) {
  console.log("please provide a message to logger");
  console.log("Example: node index.js yourname");
  process.exit(1);
}

const filePath = path.join(__dirname + "/log.txt");
fs.appendFile(filePath, txt, { encoding: "utf-8" }, () => {
  console.log("Log Added Successfully");
});
