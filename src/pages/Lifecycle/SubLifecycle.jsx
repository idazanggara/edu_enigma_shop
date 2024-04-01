import { Component } from "react";

export default class SubLifecycle extends Component {
  // componentWillUnmount dipanggil pada saat component hilang dari dom
  componentWillUnmount() {
    this.props.changeValue("Ngoding");
  }

  render() {
    return <div>Ini dari Child Component</div>;
  }
}
