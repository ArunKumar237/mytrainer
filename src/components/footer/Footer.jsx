import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer container-fluid bg-body-secondary pt-4 mt-5 d-flex flex-column align-items-center justify-content-center gap-5">
      <img id="logo" src="src/assets/logo.PNG" alt="" />
      <ul className="list-unstyled d-flex gap-3">
        <li><a className="text-decoration-none text-black" href="/">Home</a></li>
        <li><a className="text-decoration-none text-black" href="/about">About</a></li>
        <li><a className="text-decoration-none text-black" href="/courses">Courses Offering</a></li>
        <li><a className="text-decoration-none text-black" href="/calender">Course Calender</a></li>
        <li><a className="text-decoration-none text-black" href="/stories">Stories</a></li>
        <li><a className="text-decoration-none text-black" href="/contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Footer;
