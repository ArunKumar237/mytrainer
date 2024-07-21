import React, { Fragment } from "react";
import Cards from "./Cards";

const Coursesoffering = () => {
  return (
    <div className="container py-4">
      <div className="d-flex flex-column align-items-center pb-4">
        <h2>Courses Offering</h2>
        <p style={{ fontSize: "16px" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam error
          harum quam a suscipit aspernatur fuga natus optio, totam perspiciatis.
        </p>
      </div>
      <div className="container">
        <Cards />
      </div>
    </div>
  );
};

export default Coursesoffering;
