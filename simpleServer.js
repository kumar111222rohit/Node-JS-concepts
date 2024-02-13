#!/usr/bin/env node
const http = require("http");

var server = http.createServer((req, res) => {
  res.write("hello world");
  res.end();
});
server.listen(3000);
