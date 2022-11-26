import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoListContainer from "./TodoListContainer";
import "./todo-app.css";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todoValue) => {
    const newTodo = {
      title: todoValue,
      id: Math.random(),
    };
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div className="todo-app-wrapper">
      <h1 className="todo-app-title">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoListContainer taks={todoList} />
      <div className="clear-all-items">
        <p>You have 4 pending task</p>
        <button>Clear all</button>
      </div>
    </div>
  );
};

export default TodoApp;
