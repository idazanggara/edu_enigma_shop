import { Component } from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import PropTypes from "prop-types";

export default class TodoList extends Component {
  render() {
    const { todos, handleDelete, handleSelectedTodo } = this.props;
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
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array,
  handleDelete: PropTypes.func,
  handleSelectedTodo: PropTypes.func,
};
