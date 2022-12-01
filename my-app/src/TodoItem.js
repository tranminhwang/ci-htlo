const TodoItem = (props) => {
  const { title, taskId, isDone, removeTodo, toggleDoneTask } = props;
  console.log(taskId);
  return (
    <div className="todo-item">
      <span
        className={isDone ? "done" : ""}
        onDoubleClick={() => toggleDoneTask(taskId)}
      >
        {title}
      </span>
      <button onClick={() => removeTodo(taskId)}>X</button>
    </div>
  );
};

export default TodoItem;
