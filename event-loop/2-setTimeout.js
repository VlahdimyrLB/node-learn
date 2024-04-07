// started operating system process
console.log("first");

// readfile() is async so it gets offloaded
setTimeout(() => {
  console.log("second");
}, 0);

console.log("third");
// completed and exited operating system process

// Result
// first
// third
// second

// Note: test this in app.js
