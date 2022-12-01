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
      isDone: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (todoIdRemove) => {
    const newTodoList = todoList.filter((todo) => todo.id !== todoIdRemove);
    setTodoList([...newTodoList]);
  };

  const toggleDoneTask = (todoId) => {
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id === todoId) {
        todoList[i].isDone = true;
      }
    }
    setTodoList([...todoList]);
  };

  return (
    <div className="todo-app-wrapper">
      <h1 className="todo-app-title">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoListContainer
        taks={todoList}
        removeTodo={removeTodo}
        toggleDoneTask={toggleDoneTask}
      />
      <div className="clear-all-items">
        <p>You have {todoList.length} pending task</p>
        <button onClick={() => setTodoList([])}>Clear all</button>
      </div>
    </div>
  );
};

export default TodoApp;
