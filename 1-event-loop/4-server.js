const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello World");
});

// listen() is async
// it stays alive
// after setting up event loop will just wait for the request to come in
server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
