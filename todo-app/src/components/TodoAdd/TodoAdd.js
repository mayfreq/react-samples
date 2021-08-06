import React from "react";
import "./TodoAdd.css";

const TodoAdd = ({ add,valuChange,userValue }) => {
  return (
    <div className="add">
      <input type="text" placeholder="Add Todo" onChange={valuChange} value={userValue}/>
      <button onClick={add}>Add</button>
    </div>
  );
};

export default TodoAdd;
