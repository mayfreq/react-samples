import React from "react";
import "./TodoItem.css";

const TodoItem = ({text}) => {
  return (
    <li>
      <input type="checkbox" />
      <span>{text}</span>
      <span className="delete">X</span>
    </li>
  );
};

export default TodoItem;
