import React, { useState } from "react";
import Create from "./Create";

const Home = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>To-Do App</h1>
      <Create></Create>
      {todos.length == 0 ? (
        <div>No Records!</div>
      ) : (
        todos.map((todo) => {
          <div className="todo-items">
            <p>{todo}</p>
          </div>;
        })
      )}
    </>
  );
};

export default Home;
