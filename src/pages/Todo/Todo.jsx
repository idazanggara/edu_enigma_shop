import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function Todo() {
  return (
    <>
      <div className="p-4">
        <TodoForm />
      </div>
      <div className="p-4">
        <TodoList />
      </div>
    </>
  );
}
export default Todo;
