import React from "react";

const Sectionbreak = (props) => {
  return (
    <div className={`${props.classname} container`}>
      <div className="row d-flex align-items-center">
        <div className="col">
          <hr />
        </div>
        <div className="col-1 fs-4 text-center">
          <p className="mt-2" >:: :: :: ::</p>
        </div>
        <div className="col">
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Sectionbreak;
