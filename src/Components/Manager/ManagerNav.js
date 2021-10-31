import React from "react";
import { NavLink, Link } from "react-router-dom";

function ManagerNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-success" to="/manager">
          GESTOCK
        </Link>
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
        <div className="collapse navbar-collapse offset-3 mr-30" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/manager/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/manager/store"
              >
                Store
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manager/stocks">
                Stock
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manager/factures">
                Invoices
              </NavLink>
            </li>

            <button type="submit" className="btn btn-warning offset-10 ">
              <Link className="nav-link text-dark" to="/">
                logout
              </Link>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ManagerNav;
