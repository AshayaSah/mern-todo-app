import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import radioChecked from "../assets/radioChecked.svg";
import radioUnchecked from "../assets/radioUnchecked.svg";
import deleteBtn from "../assets/delete-btn.svg";
import "./Home.css";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const url = "https://mern-todo-app-backend-116a.onrender.com";

  useEffect(() => {
    axios
      .get(url + "/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put(url + "/update/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .put(url + "/delete/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>To-Do App</h1>
      <Create></Create>
      {todos.length == 0 ? (
        <div className="no-records">No Records!</div>
      ) : (
        todos.map((todo) => {
          return (
            <div className="todo-container">
              <div
                className="todo-items"
                key={todo.id}
                onClick={() => handleEdit(todo._id)}
              >
                {todo.done ? (
                  <img
                    src={radioUnchecked}
                    alt="Unchecked radio button"
                    style={{ width: "25px", height: "25px" }}
                    className="radio-icon"
                  />
                ) : (
                  <img
                    src={radioChecked}
                    alt="Unchecked radio button"
                    style={{ width: "20px", height: "20px" }}
                    className="radio-icon"
                  />
                )}

                <p
                  className={todo.done ? "line-through text-todo" : "text-todo"}
                >
                  {todo.task}
                </p>
              </div>
              <div
                className="delete-btn"
                onClick={() => handleDelete(todo._id)}
              >
                <img
                  src={deleteBtn}
                  alt="Unchecked radio button"
                  style={{ width: "20px", height: "20px" }}
                />
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Home;
