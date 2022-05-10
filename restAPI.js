require("dotenv").config();
const express = require("express");
const dynRouters = require("./routers/index");

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use(async (req, res, next) => {
  next();
});

if (typeof dynRouters === "function") {
  dynRouters(server);
}

server.listen(2364);
