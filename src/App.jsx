import Sidebar from "@shared/components/Sidebar/Sidebar";
import Header from "@shared/components/Header/Header";
import Login from "@pages/Authentication/Login";
import Todo from "@pages/Todo/Todo";
import withUIState from "@shared/hoc/withUIState";
import PropTypes from "prop-types";
import { useState } from "react";
import Counter from "./pages/Counter/Counter";

function App({ showToast }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [count, setCount] = useState(5);

  const [page, setPage] = useState(<Todo />);

  // number
  const navigateTo = (page) => {
    setPage(page);
  };

  const handleAuthentication = (status) => {
    setIsAuthenticated(status);
    if (status) {
      showToast("Sukses login.");
    } else {
      showToast("Sukses logout.");
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="d-flex">
          <Sidebar
            navigateTo={navigateTo}
            handleAuthentication={handleAuthentication}
          />
          <main className="w-100 flex-grow-1">
            <Header handleAuthentication={handleAuthentication} />
            {page}
          </main>
        </div>
      ) : (
        <Login handleAuthentication={handleAuthentication} />
      )}
    </>
  );
}

App.propTypes = {
  showToast: PropTypes.func,
};

const AppComponent = withUIState(App);

export default AppComponent;
