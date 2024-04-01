import { Component } from "react";
import {
  IconDeviceFloppy,
  IconRefresh,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";

export default class Todo extends Component {
  state = {
    form: {
      id: "",
      task: "",
      description: "",
      status: false,
    },
    todos: [
      {
        id: "1",
        task: "Makan",
        description: "Makan Lele",
        status: true,
      },
    ],
    errors: {
      task: "",
      description: "",
    },
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  };

  handleChangeStatus = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        status: event.target.checked,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};

    if (this.state.form.task === "") {
      errors.task = "Tugas wajib di isi";
    }
    if (this.state.form.description === "") {
      errors.description = "Deskripsi wajib di isi";
    }

    this.setState({
      errors: errors,
    });

    if (Object.keys(errors).length > 0) return;

    const todos = this.state.todos;

    if (this.state.form.id) {
      const index = todos.findIndex((todo) => todo.id === this.state.form.id);
      const todo = { ...this.state.form };
      todos.splice(index, 1, todo);
      this.setState({ todos: todos });
    } else {
      const todo = {
        ...this.state.form,
        id: new Date().getMilliseconds().toString(),
      };

      todos.push(todo);
      this.setState({ todos: todos });
    }

    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      form: {
        id: "",
        task: "",
        description: "",
        status: false,
      },
    });
  };

  handleDelete = (id) => {
    if (!confirm("Apakah yakin ingin menghapus todo ini?")) return;
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: todos });
  };

  //1. ketika tombol edit di click form di isi dengan data existing
  //2. onsubmit jika ada id di state.form maka update, jika tidak ada maka save

  render() {
    return (
      <div className="container-fluid pt-4 px-4">
        <h2>Todo</h2>
        <form
          autoComplete="off"
          onSubmit={this.handleSubmit}
          className="shadow-sm p-4 rounded-2"
        >
          <h3>Form Todo</h3>
          <div className="mb-3">
            <label htmlFor="task" className="form-label">
              Tugas
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              className={`form-control ${
                this.state.errors.task && "is-invalid"
              }`}
              id="task"
              name="task"
              value={this.state.form.task}
            />
            <div
              id="validationServerUsernameFeedback"
              className="invalid-feedback"
            >
              {this.state.errors.task}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Deskripsi
            </label>
            <textarea
              onChange={this.handleChange}
              className={`form-control ${
                this.state.errors.description && "is-invalid"
              }`}
              id="description"
              name="description"
              rows="3"
              value={this.state.form.description}
            ></textarea>
            <div
              id="validationServerUsernameFeedback"
              className="invalid-feedback"
            >
              {this.state.errors.description}
            </div>
          </div>
          <div className="form-check">
            <input
              onChange={this.handleChangeStatus}
              className="form-check-input"
              type="checkbox"
              id="status"
              checked={this.state.form.status}
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
              onClick={this.clearForm}
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
                {this.state.todos.map((todo, idx) => {
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
                            onClick={() => this.setState({ form: todo })}
                            className="btn btn-primary"
                          >
                            <IconEdit size={22} />
                          </button>
                          <button
                            onClick={() => this.handleDelete(todo.id)}
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
      </div>
    );
  }
}
