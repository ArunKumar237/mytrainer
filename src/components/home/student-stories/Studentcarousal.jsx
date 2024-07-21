import React, {useEffect, useRef} from "react";
import "./Studentcarousal.css";

const Studentcarousal = () => {
  
  return (
    <div className="container">
      <div className="row py-4 mb-4">
        <div className="col">
          <div
            id="myCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-wrap="true"
          >
            <div className="carousel-inner rounded-2">
              <div className="carousel-item active">
                <img
                  // style={{ height: "250px", width: "100%" }}
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1531030874896-fdef6826f2f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="carousel-item">
                <img
                  // style={{ height: "250px", width: "100%" }}
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1615525137689-198778541af6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="carousel-item">
                <img
                  // style={{ height: "250px", width: "100%" }}
                  className="d-block w-100"
                  src="https://plus.unsplash.com/premium_photo-1661833273752-b761bce437ac?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
            </div>

            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studentcarousal;
