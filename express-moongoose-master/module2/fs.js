// 1. Syncronous
// 1.1 file read/write -> I/O intensive task  -> single thread -> task completed (didn't go thread pool)

const fs = require("fs");

const text = "Learning file system"
fs.writeFileSync("./hello.txt", text)

const data = fs.readFileSync("./hello.txt", { encoding: "utf-8"});



// 2. Asyncronous
// 2.1 file read/write  -> single thread -> event loop -> thread pool -> task completed
