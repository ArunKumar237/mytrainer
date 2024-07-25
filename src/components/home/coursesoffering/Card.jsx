import React from "react";
import Stars from "./Stars";
import './Card.css'

const Card = (props) => {
  return (
    <div id="card" className="my-4 mx-auto rounded-4 overflow-hidden border border-2 shadow">
      <img className="object-fit-fill" src={props.img} alt="" />
      <div className="px-3 py-2">
        <div className="d-flex flex-column">
          <p className="m-0 fw-bold">{props.courseName}</p>
          <p className="m-0 fw-medium">{props.trainerName}</p>
          <p className="m-0 fw-normal">{props.trainerQuali}</p>
        </div>
        <Stars />
        <div className="btn btn-warning btn-sm mt-2 mb-2">More details..</div>
      </div>
    </div>
  );
};

export default Card;
