import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({
  todos,
  deleteTodo,
  changeState,
  listAll,
  listActive,
  listComplated,
}) => {
  return (
    <div className="list">
      <ul>
        {todos.map((val) => {
          return (
            <TodoItem
              key={val.id}
              id={val.id}
              text={val.text}
              state={val.state}
              deleteTodo={deleteTodo}
              changeState={changeState}
            />
          );
        })}
      </ul>
      <div className="option">
        <span className="op1">22 items left</span>
        <span className="op2" onClick={listAll}>
          All
        </span>
        <span className="op3" onClick={listActive}>
          Active
        </span>
        <span className="op4" onClick={listComplated}>
          Complated
        </span>
      </div>
    </div>
  );
};

export default TodoList;
