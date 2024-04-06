import { Component } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import PropTypes from "prop-types";

class Todo extends Component {
  render() {
    return (
      <div className="container-fluid pt-4 mx-4">
        <h2>Todo</h2>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

Todo.propTypes = {
  isLoading: PropTypes.bool,
  showLoading: PropTypes.func,
  hideLoading: PropTypes.func,
  showToast: PropTypes.func,
};

// tujuannya untuk menghilangkan warning dari eslint
// const TodoComponent = withUIState(Todo);

export default Todo;
