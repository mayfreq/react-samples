import React from 'react';
import './TodoItem.css';

const TodoItem = ({ id, text, state, deleteTodo, changeState }) => {
  return (
    <li>
      {state === 'complated' ? (
        <input
          type="checkbox"
          checked
          onClick={() => {
            changeState(id);
          }}
        />
      ) : (
        <input
          type="checkbox"
          onClick={() => {
            changeState(id);
          }}
        />
      )}
      <span>{text}</span>
      <span
        className="delete"
        onClick={() => {
          deleteTodo(id);
        }}
      >
        X
      </span>
    </li>
  );
};

export default TodoItem;
