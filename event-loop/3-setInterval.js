// setInterval() is async so it gets offloaded
setInterval(() => {
  console.log("hello world");
}, 2000);
console.log(`I will run first`);
// process stays alive unless
// Kill Process CONTROL + C

// Result
// I will run first
// hello world
// hello world
// hello world
// hello world
// hello world
