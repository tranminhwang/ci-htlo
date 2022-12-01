const TodoForm = (props) => {
  const { addTodo } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    const todoText = e.target.todoInput.value;
    addTodo(todoText);
    e.target.todoInput.value = "";
  };

  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Enter your task"
        name="todoInput"
      />
      <button className="todo-add-button">Add todo</button>
    </form>
  );
};

export default TodoForm;
