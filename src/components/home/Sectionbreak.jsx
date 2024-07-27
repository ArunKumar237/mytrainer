import React from "react";
import './Sectionbreak.css'

const Sectionbreak = (props) => {
  return (
    <div className="container my-4">
      <div className="row">
        <div id='break' className="col d-flex gap-2 justify-content-center align-items-center">
          <hr />
          <p>:: :: :: ::</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Sectionbreak;
