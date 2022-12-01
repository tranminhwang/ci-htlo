import TodoItem from "./TodoItem";

const TodoListContainer = (props) => {
  const { taks, removeTodo, toggleDoneTask } = props;

  return (
    <div className="todo-container">
      {taks.map((task) => (
        <TodoItem
          key={task.id}
          title={task.title}
          isDone={task.isDone}
          taskId={task.id}
          removeTodo={removeTodo}
          toggleDoneTask={toggleDoneTask}
        />
      ))}
    </div>
  );
};

export default TodoListContainer;
