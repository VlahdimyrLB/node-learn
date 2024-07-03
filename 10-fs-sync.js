// import FS module - for SYNC
const { readFileSync, writeFileSync } = require("fs");

console.log("start");
// provide two params path and file name then encode type
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// two params path and the content we want to write
// if file exist it will overwrite the values in it
// if file DOES NOT exist, it will create the file instead
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" } // node will append this or it creates a new value
);

console.log("Done with the task");
console.log("Starting a new task");

// EXECUTES AS FOLLOWS - tthis needs to finish task line by line or one after another
// start
// Hello this is first text file Hello this is second text file
// Done with the task
// Starting a new task
