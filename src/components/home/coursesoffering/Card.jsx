import React from "react";
import Stars from "./Stars";

const Card = (props) => {
  return (
    <div className="col-3">
      <div className="container">
        <div className="row gx-1">
          <div className="col-12 border border-1 overflow-hidden p-0 rounded-3 shadow">
            <img
              src={props.imgSrc}
              alt=""
            />
            <div className="px-3 py-3 m-0">
              <div className="d-flex flex-column m-0 p-0">
                <p style={{fontSize:"15px"}} className="m-0 py-2 fw-bold">{props.courseName}</p>
                <p style={{fontSize:"14px"}} className="m-0 py-1 fw-medium">{props.trainerName}</p>
                <p style={{fontSize:"14px"}} className="m-0 p-0 fw-normal">{props.trainerQuali}</p>
              </div>
              <Stars />
              <div className="btn btn-warning btn-sm mt-2 mb-2">More details..</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
