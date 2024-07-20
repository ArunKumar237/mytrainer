import React, { Fragment } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {

    const activeLink = ({ isActive, isPending }) => {
        return {
          color: isActive ? "blue" : "inherit",
          textDecoration: isActive ? 'underline' : 'none',
        };
      }
  return (
    <Fragment>
      <div id="header-container" className="container">
        <div className="d-flex row h-100 justify-content-between">
          <div className="col-2 d-flex justify-content-center align-items-center">
            <img id="logo" src="src/assets/logo.PNG" alt="" />
          </div>
          <div className="col-8 h-100 d-flex align-items-center justify-content-end">
            <ul className="d-flex list-unstyled gap-4 my-0 me-3 align-items-center fw-medium">
                <li><NavLink style={activeLink} to={"/"}>Home</NavLink></li>
                <li><NavLink style={activeLink} to={"/about"}>About</NavLink></li>
                <li><NavLink style={activeLink} to={"/courses"}>Courses Offering</NavLink></li>
                <li><NavLink style={activeLink} to={"/calender"}>Course Calender</NavLink></li>
                <li><NavLink style={activeLink} to={"/stories"}>Stories</NavLink></li>
                <li><NavLink style={activeLink} to={"/contact"}>Contact</NavLink></li>
                <li><NavLink style={{width:"70px"}} className="text-decoration-none btn btn-sm btn-success" to={"/login"}>Login</NavLink></li>
                <li><NavLink className="text-decoration-none btn btn-sm btn-primary" to={"/register"}>Register</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Header;
