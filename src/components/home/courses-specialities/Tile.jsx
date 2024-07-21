import React from "react";

const Tile = (props) => {
  return (
    <div className="col-3">
      <div className="row gx-1">
        <div
          style={{ height: "300px", backgroundColor: "rgb(255 149 24)" }}
          className="d-flex flex-column col rounded-3 justify-content-center align-items-center pt-5 px-4"
        >
          <div
            style={{ height: "35px", width: "35px" }}
            className="d-flex flex-column col-1 mb-4"
          >
            <img
              width="35"
              src= {props.src}
              alt="live-video-on--v1"
            />
          </div>
          <div className="col text-center">
            <h6 className="fw-bold">{props.heading}</h6>
            <p>{props.para}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tile;
