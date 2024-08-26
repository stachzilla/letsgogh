import React from "react";
import PropTypes from "prop-types";
import { Link } from "util/router";

function Navbar({}) {
  return (
    <nav
      className="navbar px-4 py-2"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        {/* <a className="navbar-item" href="/">
          Dashboard
        </a> */}
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/saved" className="navbar-item">
            Saved
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
