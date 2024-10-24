const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoModel = require("./schema/schema");

const app = express();
app.use(cors({
  origin: 'https://mern-todo-app-7ar7.onrender.com', // Your frontend URL
  credentials: true
}));
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://ashaysah:ashay2059@cluster0.83ilt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

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

// // Load SSL certificate and key
// const options = {
//   key: fs.readFileSync("path/to/your/private.key"),
//   cert: fs.readFileSync("path/to/your/certificate.crt"),
// };

// // Create an HTTPS server
// https.createServer(options, app).listen(port, () => {
//   console.log(`HTTPS Server running on port ${port}`);
// });

//create a server
app.listen(port, (req, res) => {
  console.log("Server has started");
});
