import React, { Fragment } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Offcanvas.css";

const Offcanvas = () => {
  const activeLink = ({ isActive, isPending }) => {
    return {
      color: isActive ? "blue" : "inherit",
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <Fragment>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="offcanvas offcanvas-start rounded-end-3 w-75"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title mx-auto fs-1 fw-medium"
            id="offcanvasExampleLabel"
          >
            Menu
          </h5>
        </div>
        <div className="d-flex mx-auto text-center">
          <ul className="d-flex d-lg-none flex-column list-unstyled gap-3">
            <li data-bs-toggle="offcanvas">
              <NavLink className="fw-normal fs-5" style={activeLink} to={"/"}>
                Home
              </NavLink>
            </li>
            <li data-bs-toggle="offcanvas">
              <NavLink
                className="fw-normal fs-5"
                style={activeLink}
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li data-bs-toggle="offcanvas">
              <NavLink
                className="fw-normal fs-5"
                style={activeLink}
                to={"/courses"}
              >
                Courses&nbsp;Offering
              </NavLink>
            </li>
            <li data-bs-toggle="offcanvas">
              <NavLink
                className="fw-normal fs-5"
                style={activeLink}
                to={"/calender"}
              >
                Course&nbsp;Calender
              </NavLink>
            </li>
            <li data-bs-toggle="offcanvas">
              <NavLink
                className="fw-normal fs-5"
                style={activeLink}
                to={"/stories"}
              >
                Stories
              </NavLink>
            </li>
            <li data-bs-toggle="offcanvas">
              <NavLink
                className="fw-normal fs-5"
                style={activeLink}
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
            <li data-bs-toggle="offcanvas" className="my-2">
              <NavLink
                className="fw-normal fs-6 text-decoration-none py-2 px-4 rounded-3 text-white bg-success"
                to={"/login"}
              >
                Login
              </NavLink>
            </li>
            <li data-bs-toggle="offcanvas" className="my-2">
              <NavLink
                className="fw-normal fs-6 text-decoration-none py-2 px-4 rounded-3 text-white bg-primary"
                to={"/register"}
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Offcanvas;
