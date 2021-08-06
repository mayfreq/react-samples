import "./App.css";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <main>
        <div className="container">
          <div className="title">
            <h2>Todo App</h2>
          </div>
          <TodoAdd />
          <TodoList />
        </div>
    </main>
  );
}

export default App;
