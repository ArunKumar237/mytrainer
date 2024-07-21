import React from "react";

const Aboutme = () => {
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-4">
          <img
            style={{ height: "400px" }}
            src="https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50581.jpg?w=740"
            alt=""
          />
        </div>
        <div className="col-7 d-flex flex-column justify-content-center">
          <h2>About Me</h2>
          <p style={{ fontSize: "14px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In officia
            veritatis earum porro neque tenetur blanditiis repellat! Magni
            consectetur et laborum a blanditiis maxime omnis vel possimus rem
            fugiat perferendis, dolorem voluptatibus sint itaque ratione illo
            aut? Modi voluptatem et deleniti.
          </p>
          <p style={{ fontSize: "14px" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            nesciunt rerum error cupiditate ullam, excepturi nobis quae
            perspiciatis eligendi ex mollitia itaque explicabo, magnam atque
            blanditiis accusamus doloremque nostrum ea quo praesentium quasi?
            Odio assumenda culpa temporibus accusamus reiciendis cupiditate
            deserunt mollitia. Optio eveniet delectus repellat, odio dolore nemo
          </p>
          <p style={{ fontSize: "14px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In officia
            veritatis earum porro neque tenetur blanditiis repellat! Magni
            consectetur et laborum a blanditiis maxime omnis vel possimus rem
            fugiat perferendis, dolorem voluptatibus sint itaque ratione illo
            aut? Modi voluptatem et deleniti.
          </p>
          <div style={{width:"130px"}} className="btn btn-primary align-self-start btn-sm">
          More details &nbsp;➜</div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
