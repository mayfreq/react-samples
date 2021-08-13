import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = ({ todos, deleteTodo, changeState }) => {
  const [filterName, setFilterName] = useState('all');
  const filteredTodos =
    filterName === 'all' ? todos : todos.filter(t => t.state === filterName);
  return (
    <div className="list">
      <div className="option">
        <span className="op">
          {todos.filter(t => t.state === 'active').length} items left
        </span>
        <span
          className={`op ${filterName === 'all' ? 'active' : ''}`}
          onClick={() => setFilterName('all')}
        >
          All
        </span>
        <span
          className={`op ${filterName === 'active' ? 'active' : ''}`}
          onClick={() => setFilterName('active')}
        >
          Active
        </span>
        <span
          className={`op ${filterName === 'completed' ? 'active' : ''}`}
          onClick={() => setFilterName('completed')}
        >
          Completed
        </span>
      </div>
      <ul>
        {filteredTodos.map(val => (
          <TodoItem
            key={val.id}
            id={val.id}
            text={val.text}
            state={val.state}
            deleteTodo={deleteTodo}
            changeState={changeState}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
