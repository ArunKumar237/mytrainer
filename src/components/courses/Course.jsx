import React from 'react'
import Stars from "../home/coursesoffering/Stars";

const Course = (props) => {
  return (
    <div className="container-md my-4">
      <div className="row">
        <div className="col-3 d-flex justify-content-center">
          <img className="rounded-3" style={{width:"251px", height:"350px"}} src={props.posterImgSrc} alt="" />
        </div>
        <div className="col-9 rounded-3 border border-1 bg-white">
          <div style={{height:"3rem", background:"linear-gradient(90deg, rgba(0,99,255,1) 0%, rgba(35,171,80,1) 100%)"}} className="row mb-4 rounded-top title-bg d-flex align-items-center" data-before={"Next batch - 23rd May 2024, Batch-65"}>
            <h5 className="ps-5 text-white">{props.courseTitle}</h5>
          </div>
          <div className="row mb-4">
            <div className="col-9">
              {props.courseDesc}
            </div>
            <div className="col-3 text-center">
              <h1 style={{color:"#23ab50"}} className="fs-1 fw-bold">{props.coursePrice}</h1>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-11 mx-auto">
              <div style={{backgroundColor:"#e5e5e5"}} className="row py-2 px-4">
                <div className="col-7 py-4">
                  <div className="row">
                    <div className="col d-flex gap-3">
                      <p className="fw-semibold">Trainer:</p>
                      <div className="d-flex gap-2">
                      <img style={{height:"30px", width:"30px"}} className="rounded-circle" src={props.trainerPic} alt="" />
                      <div className="col d-flex flex-column gap-1 mt-1 p-0">
                        <p style={{fontSize:"14px"}} className="m-0 text-decoration-underline">{props.trainerName}</p>
                        <p style={{fontSize:"14px"}} className="m-0 fw-bold">{props.trainerQuali}</p>
                        <p style={{fontSize:"14px"}} className="m-0">{props.trainerRole}</p>
                      </div></div>
                    </div>
                  </div>
                  <div className="row d-flex gap-1 flex-column py-4">
                    <Stars/>
                    <p className="fw-bold">Schedule: {props.courseSchedule}</p>
                  </div>
                </div>
                <div className="col-5 text-center py-4">
                  <p style={{fontSize:"14px"}} className="py-2 px-3 bg-primary rounded-3 text-white">
                    Duration: {props.courseDuration} months
                  </p>
                  <p style={{fontSize:"14px"}} className="py-2 px-3 bg-primary rounded-3 text-white">
                    Class Schedule: {props.classSchedule}
                  </p>
                  <p style={{fontSize:"14px"}} className="py-2 px-3 bg-primary rounded-3 text-white">
                    Class Time: {props.classTime} IST
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    <p style={{fontSize:"14px"}} className="m-0 fw-semibold">Course Sample:</p>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src={props.courseSampleLink}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-11 mx-auto">
              <p style={{backgroundColor:"#23ab50"}} className="col-4 py-2 rounded-3 text-white text-center ms-auto">Register</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course