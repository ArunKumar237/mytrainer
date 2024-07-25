import React, { Fragment } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Offcanvas from "./Offcanvas";
import "./Navbar.css";

const Navbar = () => {
  const activeLink = ({ isActive, isPending }) => {
    return {
      color: isActive ? "blue" : "inherit",
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg sticky-top bg-white">
        <div className="container-md">
          <a className="navbar-brand ms-md-4" href="#">
            <img
              style={{ height: "2.5rem" }}
              id="logo"
              src="src/assets/logo.PNG"
              alt=""
            />
          </a>
          <Offcanvas />
          <div className="d-none d-lg-flex col-8 h-100 d-flex align-items-center justify-content-end">
            <ul className="d-flex list-unstyled gap-md-3 my-0 me-3 align-items-center fw-medium">
                <li><NavLink style={activeLink} to={"/"}>Home</NavLink></li>
                <li><NavLink style={activeLink} to={"/about"}>About</NavLink></li>
                <li><NavLink style={activeLink} to={"/courses"}>Courses&nbsp;Offering</NavLink></li>
                <li><NavLink style={activeLink} to={"/calender"}>Course&nbsp;Calender</NavLink></li>
                <li><NavLink style={activeLink} to={"/stories"}>Stories</NavLink></li>
                <li><NavLink style={activeLink} to={"/contact"}>Contact</NavLink></li>
                <li><NavLink style={{width:"70px", fontSize:"14px"}} className="text-decoration-none btn btn-sm btn-success" to={"/login"}>Login</NavLink></li>
                <li><NavLink style={{fontSize:"14px"}} className="text-decoration-none btn btn-sm btn-primary" to={"/register"}>Register</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
