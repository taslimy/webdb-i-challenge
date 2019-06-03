const express = require("express");

const server = express();

// your code here

// Init Middleware
server.use(express.json());
server.use(logger);

// server.get("/", (req, res) => {
//   res.send(`<h3>Testing if server is working!</h3>`);
// });

// Define Routes
server.use("/api/accounts", require("./api/routes/accounts"));

// Logger
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
  next();
}

module.exports = server;
