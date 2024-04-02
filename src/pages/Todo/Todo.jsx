import { Component } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Loading from "@shared/components/Loading/Loading";
import withLoading from "@shared/hoc/withLoading";
import PropTypes from "prop-types";

class Todo extends Component {
  state = {
    form: {
      id: "",
      task: "",
      description: "",
      status: false,
    },
    todos: [],
    errors: {
      task: "",
      description: "",
    },
  };

  componentDidMount() {
    this.props.showLoading();
    setTimeout(() => {
      this.setState({
        todos: [
          {
            id: "1",
            task: "Makan",
            description: "Makan Lele",
            status: true,
          },
        ],
      });
      this.props.hideLoading();
    }, 2000);
  }

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

    this.props.showLoading();

    const todos = this.state.todos;

    setTimeout(() => {
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
      this.props.hideLoading();
      this.clearForm();
    }, 2000);
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
    this.props.showLoading();
    setTimeout(() => {
      const todos = this.state.todos.filter((todo) => todo.id !== id);
      this.setState({ todos: todos });
      this.props.hideLoading();
    }, 1000);
  };

  handleSelectedTodo = (todo) => {
    this.setState({ form: todo });
  };

  render() {
    return (
      <div className="container-fluid pt-4 mx-4">
        <h2>Todo</h2>
        <TodoForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleChangeStatus={this.handleChangeStatus}
          clearForm={this.clearForm}
          form={this.state.form}
          errors={this.state.errors}
        />

        {this.props.isLoading ? (
          <Loading />
        ) : (
          <TodoList
            todos={this.state.todos}
            handleDelete={this.handleDelete}
            handleSelectedTodo={this.handleSelectedTodo}
          />
        )}
      </div>
    );
  }
}

Todo.propTypes = {
  isLoading: PropTypes.bool,
  showLoading: PropTypes.func,
  hideLoading: PropTypes.func,
};

// tujuannya untuk menghilangkan warning dari eslint
const TodoComponent = withLoading(Todo);

export default TodoComponent;
