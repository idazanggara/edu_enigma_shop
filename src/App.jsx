import React from "react";
import Sidebar from "@shared/Sidebar/Sidebar";
import Header from "@shared/Header/Header";
// import Dashboard from "./pages/Dashboard/Dashboard";
import Todo from "./pages/Todo/Todo";

class App extends React.Component {
  state = {
    page: <Todo />,
  };

  navigateTo = (component) => {
    this.setState({ page: component });
  };

  render() {
    return (
      <>
        <div className="d-flex">
          <Sidebar navigateTo={this.navigateTo} />
          <main className="w-100 flex-grow-1">
            <Header />
            {this.state.page}
          </main>
        </div>
      </>
    );
  }
}

export default App;
