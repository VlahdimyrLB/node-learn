const EventEmitter = require("events");

// instantiate the class
const customEmitter = new EventEmitter();

// on - to listen/subscribe
// emit - to executeW

// ON takes two params - eventName and callback
customEmitter.on("response", () => {
  console.log("Data Received");
});
// 1. we can make as many callback in the same event and just call it once
customEmitter.on("response", () => {
  console.log("some other logics");
});
// 2. Order Matters - We first listen for the even before we emit
// should be the same eventName
customEmitter.emit("response");

// 3. We can pass arguments when we are emitting the event
customEmitter.on("users", (id, name) => {
  console.log(`Hello user ${id}: ${name} `);
});

customEmitter.emit("users", 1, "Vlahd"); // Hello user 1: Vlahd
