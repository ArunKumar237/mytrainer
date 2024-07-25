import React from "react";
import './Tile.css'

const Tile = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="tile rounded-3 shadow border border-1 d-flex flex-column p-3 align-items-center gap-3"
      >
          <img
            width="35px"
            src={props.src}
            className="pt-4"
          />
          
        <div className="col text-center">
          <h6 className="fw-bold">{props.heading}</h6>
          <p>{props.para}</p>
        </div>
      </div>
    </div>
  );
};

export default Tile;
