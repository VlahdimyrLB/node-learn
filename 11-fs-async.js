// import FS module - for ASYNC
const { log } = require("console");
const { readFile, writeFile } = require("fs");

console.log("start");

// for async to work we need to provide callback - (err, result) => {}
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with task");
      }
    );
  });
});

console.log("starting next task");

//ABOVE IS A CALLBACK HELL - where a Callback is called inside another Callback

// EXECUTES AS FOLLOWS - this will keep on serving
// start
// starting next task
// done with task
