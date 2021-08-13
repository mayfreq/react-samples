import React from 'react';
import './TodoAdd.css';

const TodoAdd = ({ add, valueChange, userValue }) => {
  return (
    <div className="add">
      <input
        type="text"
        placeholder="Add Todo"
        onKeyPress={e => {
          if (e.key === 'Enter') add();
        }}
        onChange={valueChange}
        value={userValue}
      />
      <button onClick={add}>Add</button>
    </div>
  );
};

export default TodoAdd;
