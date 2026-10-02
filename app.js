const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });

  res.end(`
    <html>
      <body>
        <h1>Hello from Node.js on Amazon EKS 🚀</h1>
        <p>Application is running successfully  </p>
        <p>Environment: ${process.env.ENVIRONMENT || "EKS"}</p>
      </body>
    </html>
  `);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Node.js application running on port ${PORT}`);
});