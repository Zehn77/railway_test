const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!\n");
  })
  .listen(process.env.PORT, () => {
    console.log("Server is running on port:", process.env.PORT);
  });
