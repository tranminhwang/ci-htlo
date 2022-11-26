import TodoForm from "./TodoForm";
import TodoListContainer from "./TodoListContainer";
import "./todo-app.css";

const TodoApp = () => {
  return (
    <div className="todo-app-wrapper">
      <h1 className="todo-app-title">Todo App</h1>
      <TodoForm />
      <TodoListContainer />
      <div className="clear-all-items">
        <p>You have 4 pending task</p>
        <button>Clear all</button>
      </div>
    </div>
  );
};

export default TodoApp;
