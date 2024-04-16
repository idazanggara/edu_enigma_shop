import { IconDeviceFloppy } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconEdit } from "@tabler/icons-react";
import { IconRefresh } from "@tabler/icons-react";
import { useState } from "react";

function Todo() {
  const [form, setForm] = useState({
    id: "",
    task: "",
    description: "",
    status: false,
  });
  const [errors, setErrors] = useState({
    task: "",
    description: "",
  });
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleChangeStatus = (event) => {
    setForm((prev) => {
      return {
        ...prev,
        status: event.target.checked,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};

    if (form.task === "") {
      errors.task = "Tugas wajib di isi";
    }
    if (form.description === "") {
      errors.description = "Deskripsi wajib di isi";
    }

    setErrors(errors);

    if (Object.keys(errors).length > 0) return;

    if (form.id) {
      const updatedTodo = todos.map((todo) => {
        if (todo.id === form.id) {
          return {
            ...form,
          };
        }
        return todo;
      });
      setTodos(updatedTodo);
    } else {
      const todo = {
        ...form,
        id: new Date().getMilliseconds().toString(),
      };
      setTodos([...todos, todo]);
    }
    clearForm();
  };

  const clearForm = () => {
    setForm(() => {
      const initial = {
        id: "",
        task: "",
        description: "",
        status: false,
      };
      // this.props.selectedTodo(null);
      return initial;
    });
  };

  const handleDelete = (id) => {
    if (!confirm("Apakah todo ini ingin dihapus?")) return;
    this.props.remove(id);
  };

  const handleSelectedTodo = (todo) => {
    setForm({ ...todo });
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="shadow-sm p-4 rounded-2"
      >
        <h3>Form Todo</h3>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Tugas
          </label>
          <input
            onChange={handleChange}
            type="text"
            className={`form-control ${errors.task && "is-invalid"}`}
            id="task"
            name="task"
            value={form.task}
          />
          <div className="invalid-feedback">{errors.task}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Deskripsi
          </label>
          <textarea
            onChange={handleChange}
            className={`form-control ${errors.description && "is-invalid"}`}
            id="description"
            name="description"
            rows="3"
            value={form.description}
          ></textarea>
          <div className="invalid-feedback">{errors.description}</div>
        </div>
        <div className="form-check">
          <input
            onChange={handleChangeStatus}
            className="form-check-input"
            type="checkbox"
            id="status"
            checked={form.status}
          />
          <label className="form-check-label" htmlFor="status">
            Selesai
          </label>
        </div>
        <div className="d-flex gap-2 mt-4">
          <button
            type="submit"
            className="btn btn-primary me-2 d-flex align-items-center gap-2"
          >
            <i>
              <IconDeviceFloppy />
            </i>
            Submit
          </button>
          <button
            onClick={clearForm}
            type="reset"
            className="btn btn-secondary me-2 d-flex align-items-center gap-2"
          >
            <i>
              <IconRefresh />
            </i>
            Reset
          </button>
        </div>
      </form>

      {/* LIST */}

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
                          onClick={() => handleSelectedTodo(todo)}
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
    </>
  );
}
export default Todo;
