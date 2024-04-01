import { Component } from "react";
import SubLifecycle from "./SubLifecycle";

export default class Lifecycle extends Component {
  state = {
    todo: "Makan",
    isLoading: false,
    isShow: false,
  };

  // lebih cocok pada saat pemanggilan API
  componentDidMount() {
    this.setState({ isLoading: true });
    this.getTodo().then((todo) => {
      this.setState({ todo: todo, isLoading: false });
    });
  }

  // Contoh API
  getTodo = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Minum");
      }, 3000);
    });
  };

  changeValue = (todo) => {
    this.setState({ todo: todo });
  };

  render() {
    return (
      <>
        <h1>{this.state.isLoading ? "Loading..." : this.state.todo}</h1>
        <button onClick={() => this.setState({ isShow: !this.state.isShow })}>
          Show Child Component
        </button>
        {/* 
            && Short circuit yang digunakan untuk mempersingkat kondisi
            || Short circuit digunakan untuk memberikan default value
        */}
        {this.state.isShow && <SubLifecycle changeValue={this.changeValue} />}
        {"Ini ada sebelah kiri" || "Ini ada sebelah kanan"}
      </>
    );
  }
}
