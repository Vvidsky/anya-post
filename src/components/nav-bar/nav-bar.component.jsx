import React from "react";
import logo from '../../assets/logo_test.png';
import { Link, NavLink } from "react-router-dom";
import './nav-bar.component.css';

export default function NavBar() {
  let activeClassName = "nav-link active";
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: '#8DA99B' }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" style={{ height: "50px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClassName : "nav-link"
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
