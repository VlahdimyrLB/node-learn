//  a readable stream that emits events that you can listen
// we can read chucks of data using this ReadStream
const { createReadStream } = require("fs");

// invoke the function
const stream = createReadStream("./content/big.txt");

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

// add the event on
// data is the event we want to listen
// then a callback function which in this case to output the result
stream.on("data", (result) => {
  console.log(result);
});

//we can also catch error
stream.on("error", (err) => {
  console.log(err);
});
