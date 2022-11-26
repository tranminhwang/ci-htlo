import TodoItem from "./TodoItem";

const TodoListContainer = (props) => {
  const { taks } = props;

  return (
    <div className="todo-container">
      {taks.map((task) => (
        <TodoItem title={task.title} taskId={task.id} />
      ))}
    </div>
  );
};

export default TodoListContainer;
