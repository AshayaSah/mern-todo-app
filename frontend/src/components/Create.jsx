import React, { useState } from "react";
import axios from "axios";
import "./Create.css";

const Create = () => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Task"
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <button className="add-btn" onClick={handleAdd}>
          Add
        </button>
      </div>
    </>
  );
};

export default Create;
