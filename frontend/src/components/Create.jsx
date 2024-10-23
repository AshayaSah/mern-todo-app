import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    axios.post(
      "http://localhost:3001/add",
      { task: task }
        .then((result) => console.log(result))
        .catch((err) => console.log(ERR))
    );
  };

  return (
    <>
      <div>
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
