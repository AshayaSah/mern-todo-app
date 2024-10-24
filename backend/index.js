const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoModel = require("./schema/schema");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://ashaysah:ashay2059@cluster0.83ilt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
const port = process.env.PORT || 3001;

app.get("/get", (req, res) => {
  todoModel
    .find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  console.log(task);
  todoModel
    .create({
      task: task,
    })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  todoModel
    .findByIdAndUpdate({ _id: id }, { done: true })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put("/delete/:id", (req, res) => {
  const { id } = req.params;
  todoModel
    .findByIdAndDelete({ _id: id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

//create a server
app.listen(port, (req, res) => {
  console.log("Server has started");
});
