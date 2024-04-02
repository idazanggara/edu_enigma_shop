import { Component } from "react";
import {
  IconAccessible,
  IconApps,
  IconAsset,
  IconChevronDown,
  IconDoorExit,
  IconHome2,
  IconListDetails,
  IconReceipt,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";
import PropTypes from "prop-types";

import Dashboard from "@pages/Dashboard/Dashboard";
import Todo from "@pages/Todo/Todo";

export default class Sidebar extends Component {
  render() {
    const { navigateTo } = this.props;

    return (
      <div
        className={"bg-primary text-white p-4 shadow"}
        style={{ width: 300, minHeight: "100dvh" }}
      >
        <div className="font-logo text-center mb-5">
          <h2 className="fs-2">
            <i>
              <b>Enigma</b> Shop
            </i>
          </h2>
          <h2 className="fs-6 my-4 font-primary fw-bold">Backoffice V1.0.0</h2>
        </div>
        <nav>
          <ul className="d-flex flex-column gap-3 nav-list list-unstyled">
            <p className="fw-bold">Dashboard</p>
            <li
              className="cursor-pointer text-white"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="true"
            >
              <i className="me-3">
                <IconApps />
              </i>
              <span>Master</span>
              <i className="ms-3">
                <IconChevronDown />
              </i>
            </li>
            <div className="collapse" id="dashboard-collapse">
              <ul className="text-white cursor-pointer d-flex flex-column gap-3 btn-toggle-nav list-unstyled mx-4">
                <li
                  onClick={() => navigateTo(<Dashboard />)}
                  className="cursor-pointer"
                >
                  <i className="me-3">
                    <IconHome2 />
                  </i>
                  <span>Home</span>
                </li>
                <li
                  onClick={() => navigateTo(<Todo />)}
                  className="cursor-pointer"
                >
                  <i className="me-3">
                    <IconListDetails />
                  </i>
                  <span>Todo</span>
                </li>
                <li className="cursor-pointer">
                  <i className="me-3">
                    <IconAsset />
                  </i>
                  <span>Product</span>
                </li>
                <li className="cursor-pointer">
                  <i className="me-3">
                    <IconUsers />
                  </i>
                  <span>Customer</span>
                </li>
                <li className="cursor-pointer">
                  <i className="me-3">
                    <IconAccessible />
                  </i>
                  <span>Admin</span>
                </li>
              </ul>
            </div>
            <p className="fw-bold mt-4">Transaction</p>
            <li className="cursor-pointer text-white">
              <i className="me-3">
                <IconReceipt />
              </i>
              <span>Transaction</span>
            </li>
            <p className="fw-bold mt-4">Settings</p>
            <li className="cursor-pointer text-white">
              <i className="me-3">
                <IconUser />
              </i>
              <span>User</span>
            </li>
            <hr />
            <li className="cursor-pointer text-white">
              <i className="me-3">
                <IconDoorExit />
              </i>
              <span>Logout</span>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

Sidebar.propTypes = {
  navigateTo: PropTypes.func,
};
