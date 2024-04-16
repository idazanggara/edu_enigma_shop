import { IconEdit, IconTrash } from "@tabler/icons-react";
import { useMemo } from "react";
import { useState } from "react";
import TodoService from "../../../services/todoService";
import { useEffect } from "react";
function TodoList() {
  const [todos, setTodos] = useState([]);

  const todoService = useMemo(() => {
    return TodoService();
  }, []);

  const handleDelete = (id) => {
    if (!confirm("Apakah todo ini ingin dihapus?")) return;
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await todoService.getAll();
      setTodos(data);
    };
    fetchTodos();
  }, [todoService]);

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
                        // onClick={() => this.props.selectedTodo(todo)}
                        className="btn btn-primary"
                      >
                        <IconEdit size={22} />
                      </button>
                      <button
                        onClick={() => handleDelete(todo.id)}
                        className="btn btn-danger text-white"
                      >
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
