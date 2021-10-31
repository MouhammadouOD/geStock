import React from "react";
import { NavLink, Link } from "react-router-dom";

function SellerNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-success" to="/seller">
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
        <div className="collapse navbar-collapse offset-2 " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/seller/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/seller/sales-area"
              >
                Sales_Area
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/seller/pending-sales">
                Pending_Sales
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/seller/invoices">
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

export default SellerNav;
