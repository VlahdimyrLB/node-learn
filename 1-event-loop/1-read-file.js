const { readFile, writeFile } = require("fs");
const { result } = require("lodash");

console.log("started a first task");

// CHECK FILE PATH!!!!
// readfile() is async so it gets offloaded
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});

console.log("starting next task");

// Result
// started a first task
// starting next task
// Hello this is first text file
// completed first task

// Note: test this in app.js
