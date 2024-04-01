import { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <a className="navbar-brand fs-3 text-white" href="#">
            <i>
              <b>Enigma</b> Shop
            </i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-5 column-gap-4">
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  aria-current="page"
                  href="#hero"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#tentang-kami">
                  Tentang Kami
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#testimoni">
                  Testimoni
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#kontak-kami"
                  className="nav-link text-white"
                  aria-disabled="true"
                >
                  Kontak Kami
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
