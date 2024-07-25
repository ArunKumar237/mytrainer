import React from "react";
import './Carousel.css'

const Carousel = () => {
  return (
    <div className="container">
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner rounded">
          <div class="carousel-item active" data-bs-interval="3000">
            <img src="https://images.unsplash.com/photo-1531030874896-fdef6826f2f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="https://images.unsplash.com/photo-1615525137689-198778541af6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="https://plus.unsplash.com/premium_photo-1661833273752-b761bce437ac?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." />    </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <svg className="me-4" width="14" height="16" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9 23.025L-0.149994 12L10.9 0.949997L13.625 3.7L5.32501 12L13.625 20.3L10.9 23.025Z" fill="#E8EAED" />
          </svg>


        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <svg className="ms-4" width="14" height="16" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.575 23.025L13.625 12L2.575 0.949997L-0.150001 3.7L8.15 12L-0.150001 20.3L2.575 23.025Z" fill="#E8EAED" />
          </svg>


        </button>
      </div>
    </div>
  );
};

export default Carousel;


