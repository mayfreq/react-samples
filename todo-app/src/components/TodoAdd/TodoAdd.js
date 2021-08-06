import React from "react";
import "./TodoAdd.css";

const TodoAdd = () => {
  return (
    <div className="add">
      <input type="text" placeholder="Add Todo" />
      <button>Add</button>
    </div>
  );
};

export default TodoAdd;
