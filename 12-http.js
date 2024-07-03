const http = require("http");

// to create a server call the function createServer
// it needs a call back function
// it has two parameters a request and a response
// req and res is a giant object
const server = http.createServer((req, res) => {
  //we use the url property from req to retrieve address
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }

  //if user access some address that doesnt exist
  res.end(`<h1>Oops! Page not found</h1>
  <a href="/"> Go back </a>`);
});

server.listen(5000);
