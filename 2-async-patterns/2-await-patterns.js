const { readFile, writeFile } = require("fs").promises;
const util = require("util");

// promisify them because they dont return promises by default
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
// instead of promisify we can use .promises in fs = const { readFile, writeFile } = require("fs").promises;

// Best Solution for more concise way: Use Async/Await
// this means wait till promise is settled, then decide what you want to do

// FIX THE CALLBACK HELL in 11-fs-async using ASYNC/AWAIT
//add ASYNC term before the function
const fix = async () => {
  try {
    // add an AWAIT term - this means this waits for this function to finish before executing the next one
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/mind-grenade.txt",
      `AWESOME! : ${first}, ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

fix(); // function call

// BELOW IS FOR REFERENCE

// although readFile is async
// using callbacks suffers from callback hell - when you have multiple nested callbacks

// readFile("./content/first.txt", "utf8", (err, data) => {
//   if (err) {
//     return;
//   } else {
//     console.log(data); // Hello this is first text file
//   }
// });

// the problem above comes when we need multiple actions ex. need to read multiple files
// Better Solution: use Promises

// Manual Promise Wrapping function
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   // traditional way of promises use .then and .catch
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));
