// 1. Syncronous
// 1.1 file read/write -> I/O intensive task  -> single thread -> task completed (didn't go thread pool)

// const fs = require("fs");
import fs from "fs"
// const text = "Learning file system"
// fs.writeFileSync("./hello.txt", text)

// const data = fs.readFileSync("./hellos.txt", { encoding: "utf-8"});



// 2. Asyncronous
// 2.1 file read/write  -> single thread -> event loop -> thread pool -> task completed
let txt = "hi"
console.log("task 1")


const text = "Hi Saidul"
fs.writeFile("./hello.txt", text,  (err) => {
    if (err) {
        console.log(`Somthing is wrong: ${err}`);
        return;
    }

    console.log("data added")
})

fs.readFile("./hello.txt", { encoding: "utf-8"}, (err, data) => {
    if (err) {
        console.log(`Somthing is wrong: ${err}`);
        return;
    }
    txt  = data;

    console.log(txt, "inside callback")
})


console.log(`task 2: ${txt}`)

console.log("task 3")