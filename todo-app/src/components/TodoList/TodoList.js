import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = () => {
  return (
    <div className="list">
      <ul>
        <TodoItem text="todo" />
      </ul>
      <div class="option">
        <span class="op1">22 items left</span>
        <span class="op2">All</span>
        <span class="op3">Active</span>
        <span class="op4">Complated</span>
      </div>
    </div>
  );
};

export default TodoList;
