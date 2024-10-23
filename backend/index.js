const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//create a server
app.listen(3001, (req, res) => {
  console.log("Server has started");
});
