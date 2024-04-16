import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loading from "@shared/components/Loading/Loading";
import { getTodosAction, selectedTodo } from "../../../slices/todoSlice";
function TodoList() {
  // mirip dengan mapStateToProps
  const { todos, isLoading } = useSelector((state) => state.todo);

  // mirip dengan mapDispatchToProps
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosAction());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="shadow-sm p-4 rounded-2 mt-4">
      <h3>List Todo</h3>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Task</th>
              <th>Deskripsi</th>
              <th>Selesai</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, idx) => {
              return (
                <tr key={idx}>
                  <td>{++idx}</td>
                  <td>{todo.task}</td>
                  <td>{todo.description}</td>
                  <td>
                    <span
                      className={`badge text-white ${
                        todo.status ? "text-bg-success" : "text-bg-danger"
                      }`}
                    >
                      {todo.status ? "Selesai" : "Belum Selesai"}
                    </span>
                  </td>
                  <td>
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-primary"
                        onClick={() => dispatch(selectedTodo(todo))}
                      >
                        <IconEdit size={22} />
                      </button>
                      <button className="btn btn-danger text-white">
                        <IconTrash size={22} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoList;
