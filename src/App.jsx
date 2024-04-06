import React from "react";
import Sidebar from "@shared/components/Sidebar/Sidebar";
import Header from "@shared/components/Header/Header";
import Login from "@pages/Authentication/Login";
import Todo from "@pages/Todo/Todo";
import withUIState from "@shared/hoc/withUIState";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    page: <Todo />,
    isAuthenticated: true,
  };

  navigateTo = (component) => {
    this.setState({
      page: component,
    });
  };

  handleAuthentication = (status) => {
    this.setState({
      isAuthenticated: status,
    });

    if (status) {
      this.props.showToast("Sukses login.");
    } else {
      this.props.showToast("Sukses logout.");
    }
  };

  render() {
    const { page, isAuthenticated } = this.state;

    return (
      <>
        {isAuthenticated ? (
          <div className="d-flex">
            <Sidebar
              navigateTo={this.navigateTo}
              handleAuthentication={this.handleAuthentication}
            />
            <main className="w-100 flex-grow-1">
              <Header handleAuthentication={this.handleAuthentication} />
              {page}
            </main>
          </div>
        ) : (
          <Login handleAuthentication={this.handleAuthentication} />
        )}
      </>
    );
  }
}

App.propTypes = {
  showToast: PropTypes.func,
};

const AppComponent = withUIState(App);

export default AppComponent;
