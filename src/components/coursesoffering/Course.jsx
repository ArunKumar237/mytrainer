import React from 'react'
import Stars from "../home/coursesoffering/Stars";
import Sectionbreak from "../home/Sectionbreak"
import "./Course.css";

const Course = (props) => {
  return (
    <div style={{ height: '100%' }} className={`${props.classname} my-4`}>
      <div className="container h-md-50 h-lg-75">
        <div className="row h-100">
          <div className="col-md-3 col-lg-2 d-flex justify-content-center h-100">
            <img
            id='posterImg'
              className="rounded-3"
              src={props.posterImgSrc}
              alt=""
            />
          </div>
          <div className="col-md-9 col-lg-10 ms-md-auto d-flex flex-column gap-1 bg-white border border-1 rounded pb-1">
            <div style={{ height: "3rem", background: "linear-gradient(90deg, rgba(0,99,255,1) 0%, rgba(35,171,80,1) 100%)" }} className="row rounded-top title-bg d-flex align-items-center" data-before={"Next batch - 23rd May 2024, Batch-65"}>
              <h5 className="ps-5 text-white">{props.courseTitle}</h5>
            </div>
            <div className="row d-flex mx-auto justify-content-center">
              <div className="col-11 p-0">
                <div className="row gap-md-2 justify-content-lg-between align-items-center">
                  <div style={{ fontSize: ".9rem" }} className="col-8 py-0 px-1">
                    {props.courseDesc}
                  </div>
                  <div className="col-2 text-center p-0 me-lg-3">
                    <p style={{ color: "#23ab50", fontSize: "2rem" }} className="fw-bold">{`₹${props.coursePrice}/-`}</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-11 mx-auto">
                <div style={{ backgroundColor: "#e5e5e5" }} className="row rounded p-md-2 p-lg-4 ">
                  <div className="col-lg-6 col-md-5 text-md-center text-lg-start d-flex flex-column gap-lg-4">
                    <div className="row">
                      <div className="col d-flex flex-md-column flex-lg-row gap-2 gap-md-0  align-items-md-center align-items-lg-start">
                        <p className="fw-semibold mb-md-0 me-lg-3">Trainer:</p>
                        <div className="d-flex gap-lg-3 gap-md-3 align-items-lg-start align-items-md-center">
                          <img style={{ height: "1.875rem", width: "1.875rem" }} className="rounded-circle" src={props.trainerPic} alt="" />
                          <div className="col d-flex flex-column gap-lg-1 gap-md-0 mt-1 p-0">
                            <p style={{ fontSize: "0.875rem" }} className="m-0 text-decoration-underline">{props.trainerName}</p>
                            <p style={{ fontSize: "0.8rem" }} className="m-0 fw-bold">{props.trainerQuali}</p>
                            <p style={{ fontSize: "0.8rem" }} className="m-0">{props.trainerRole}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex gap-lg-2 gap-1 flex-column">
                      <Stars />
                      <p style={{ fontSize: "0.875rem" }} className="fw-bold m-0">Schedule: {props.courseSchedule}</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-7 text-center d-flex flex-column gap-2">
                    <p style={{ fontSize: "0.875rem" }} className="m-0 p-md-1 p-lg-2 bg-primary rounded text-white">
                      Duration: {props.courseDuration} months
                    </p>
                    <p style={{ fontSize: "0.875rem" }} className="m-0 p-md-1 p-lg-2 bg-primary rounded text-white">
                      Class Schedule: {props.classSchedule}
                    </p>
                    <p style={{ fontSize: "0.875rem" }} className="m-0 p-md-1 p-lg-2 bg-primary rounded text-white">
                      Class Time: {props.classTime} IST
                    </p>
                    <div className="d-flex gap-2">
                      <p style={{ fontSize: "0.875rem" }} className="m-0 fw-semibold">Course Sample:</p>
                      <img
                        style={{ width: "1.5rem", height: "1.5rem" }}
                        src={props.courseSampleLink}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-11 mx-auto">
                <div className="row">
                  <div className="col-4 ms-auto my-2 btn btn-success btn-sm">Register</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sectionbreak/>
    </div>
  )
}

export default Course