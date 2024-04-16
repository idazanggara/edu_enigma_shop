import { IconDeviceFloppy, IconRefresh } from "@tabler/icons-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTodoAction, putTodoAction } from "../../../slices/todoSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function TodoForm() {
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

  const { todo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

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
    if (!form.task) {
      errors.task = "Tugas wajib di isi";
    }
    if (!form.description) {
      errors.description = "Deskripsi wajib di isi";
    }

    setErrors(errors);

    if (Object.keys(errors).length > 0) return;

    if (form.id) {
      const todo = { ...form };
      dispatch(putTodoAction(todo));
    } else {
      const todo = {
        ...form,
        id: new Date().getMilliseconds().toString(),
      };
      dispatch(postTodoAction(todo));
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
      return initial;
    });
  };

  useEffect(() => {
    if (todo) {
      setForm({
        id: todo.id,
        task: todo.task,
        description: todo.description,
        status: todo.status,
      });
    }
  }, [todo]);

  return (
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
  );
}

export default TodoForm;
