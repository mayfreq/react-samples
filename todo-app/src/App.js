import React, { useState, useEffect } from 'react';
import './App.css';
import TodoAdd from './components/TodoAdd/TodoAdd';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [userValue, setUserValue] = useState('');

  const id = () => {
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };

  const add = () => {
    if (userValue.trim().length === 0) return;
    setTodos(val => [
      ...val,
      {
        id: id(),
        text: userValue,
        state: 'active'
      }
    ]);
    setUserValue('');
  };

  const deleteTodo = id => {
    setTodos(todos.filter(item => item.id !== id));
  };

  const changeState = id => {
    const index = todos.findIndex(item => item.id === id);
    const arr = [...todos];
    arr[index].state =
      arr[index].state === 'completed' ? 'active' : 'completed';
    setTodos(arr);
  };

  const valueChange = e => {
    setUserValue(e.target.value);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>Todo App</h2>
        </div>
        <TodoAdd add={add} valueChange={valueChange} userValue={userValue} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          changeState={changeState}
        />
      </div>
    </main>
  );
}

export default App;
