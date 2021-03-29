import React from "react";
import "./styles.css";

const LandingPage = () => {
  return (
    // navigation
    <nav className="navbar navbar-expand-md navbar-dark">
      <a className="navbar-brand" href="https://joseluisliranzo.webs.com/">
        The Immigration Time
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="https://joseluisliranzo.webs.com/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://joseluisliranzo.webs.com/">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://joseluisliranzo.webs.com/">
              About
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default LandingPage;
