import React from "react";
import './Aboutme.css'

const Aboutme = () => {
  return (
    <div className="container py-4 text-center">
      <div className="d-flex flex-column text-center text-md-start flex-md-row">
        <div className="d-md-none">
          <img
            id="profileImg"
            src="https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50581.jpg?w=740"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-center">About Me</h2>
          <p>
            <span><img
              src="https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50581.jpg?w=740"
              alt=""
              id="profileImg"
              style={{ float: "left" }}
              className="d-none d-md-block"
            /></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In officia
            veritatis earum porro neque tenetur blanditiis repellat! Magni
            consectetur et laborum a blanditiis maxime omnis vel possimus rem
            fugiat perferendis, dolorem voluptatibus sint itaque ratione illo
            aut? Modi voluptatem et deleniti.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            nesciunt rerum error cupiditate ullam, excepturi nobis quae
            perspiciatis eligendi ex mollitia itaque explicabo, magnam atque
            blanditiis accusamus doloremque nostrum ea quo praesentium quasi?
            Odio assumenda culpa temporibus accusamus reiciendis cupiditate
            deserunt mollitia. Optio eveniet delectus repellat, odio dolore nemo
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In officia
            veritatis earum porro neque tenetur blanditiis repellat! Magni
            consectetur et laborum a blanditiis maxime omnis vel possimus rem
            fugiat perferendis, dolorem voluptatibus sint itaque ratione illo
            aut? Modi voluptatem et deleniti.
            <span className="d-inline-flex align-items-baseline">
              <p className="btn btn-primary btn-sm ms-2">More details &nbsp;➜</p>
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Aboutme;
