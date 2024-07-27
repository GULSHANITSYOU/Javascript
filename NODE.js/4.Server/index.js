const { log } = require("console");
const http = require("http");
const fs = require("fs");
const path = require('path');

const server = http.createServer((req, res) => {
  // Get IP address from request
  const ip =
    req.connection.remoteAddress ||
    req.headers["x-forwarded-for"] ||
    req.connection.socket.remoteAddress;

  // Set the response header for text responses
  res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url !== "/favicon.ico") {
    fs.appendFile(
      "./4.Server/log.txt",
      ` Time :- ${Date.now()}  || IP :- ${ip}  || Path :- ${req.url} \n`,
      (err) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
          return;
        }

        switch (req.url) {
          case "/":
            // Serve the HTML file
            const filePath = path.join('./Server', 'index.html');
            fs.readFile(filePath, 'utf8', (err, data) => {
              if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
              }
              res.end(data);
            });
            break;
          case "/About":
            res.end("<h1> About </h1>");
            break;
          case "/Radha":
            res.end("<h1> Shree Radha ! 🙏🏼 </h1>");
            break;
          default:
            res.end("<h1>Bhai kya kr rha hai esa kuch nhi hai yha </h1>");
        }
      }
    );
  }
});

server.listen(3000, () => {
  log("Server listening at: ", `http://localhost:3000`);
});
