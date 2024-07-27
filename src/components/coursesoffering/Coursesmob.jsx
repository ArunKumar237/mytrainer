import React from 'react'
import Stars from "../home/coursesoffering/Stars";
import "./Coursesmob.css"

const Coursesmob = (props) => {
    return (
        <div className={`${props.classname}  align-items-center justify-content-center gap-3 my-5`}>
            <div style={{ height: "25rem", width: "19rem" }} className="container p-0 d-flex justify-content-center">
                <div style={{ height: "25rem", width: "19rem" }} className='infocard overflow-hidden rounded-3 border border-1 border-black shadow-lg'>
                    <div style={{ height: "12rem", width: "20.4rem" }} className="row overflow-hidden">
                        <img style={{ width: "100%" }} className="rounded-3 object-fit-cover" src={props.posterImgSrc} alt="" />
                    </div>

                    <div style={{ background: "linear-gradient(90deg, rgba(0,99,255,1) 0%, rgba(35,171,80,1) 100%)" }} className="row rounded-top d-flex align-items-center" data-before={"Next batch - 23rd May 2024, Batch-65"}>
                        <p className="py-2 m-0 text-white text-center fw-bold">{props.courseTitle}</p>
                    </div>

                    {/* Carousel started */}
                    <div id={`carouselExampleSlidesOnly${props.id}`} class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item" data-bs-interval="2500">
                                <div style={{ height: "8.4rem", width: "100%" }} className=' d-flex flex-column align-items-center gap-1'>
                                    <p className='m-0 fw-medium text-decoration-underline'>Trainer</p>
                                    <div className="d-flex gap-3">
                                        <img style={{ height: "3.8rem", width: "3.8rem" }} className="rounded-circle" src={props.trainerPic} alt="" />
                                        <div className="col align-items-center">
                                            <p style={{ fontSize: ".875rem" }} className="m-0 e">{props.trainerName}</p>
                                            <p style={{ fontSize: ".875rem" }} className="m-0 fw-bold">{props.trainerQuali}</p>
                                            <p style={{ fontSize: ".875rem" }} className="m-0">{props.trainerRole}</p>
                                        </div>
                                    </div>
                                    <Stars/>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2500">
                                <div style={{ height: "8.4rem", width: "100%" }} className=' px-4 py-2 fw-medium justify-content-center d-flex flex-column'>
                                    <p className='p-0 m-0'>Duration: {props.courseDuration} months</p>
                                    <p className='p-0 m-0'>Class Schedule: {props.classSchedule}</p>
                                    <p className='p-0 m-0'>Class Time: {props.classTime} IST</p>
                                    <div className="d-flex align-items-center justify-content-center gap-2">
                                        <p style={{ fontSize: ".875rem" }} className="m-0 fw-medium">Course Sample:</p>
                                        <img
                                            style={{ width: "1.8rem", height: "1.8rem" }}
                                            src={props.courseSampleLink}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item active" data-bs-interval="3000">
                                <div style={{ height: "8.4rem", width: "100%" }} className='px-4'>
                                    <p style={{fontSize:".8rem"}} className='fw-medium p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro rem optio adipisci? Aliquam molestiae ullam </p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2500">
                                <div style={{ height: "8.4rem", width: "100%" }} className='px-4 d-flex flex-column gap-2 justify-content-center align-items-center'>
                                    <p className="m-0 fw-bold text-center">Schedule: {props.courseSchedule}</p>
                                    <p className='m-0 fw-bold text-center'>Next batch - 23rd May 2024, Batch-65</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target={`#carouselExampleSlidesOnly${props.id}`} data-bs-slide="prev">
                            <span><img style={{ height: "1rem", transform: "scaleX(-1)", paddingLeft: "1.5rem" }} src="https://img.icons8.com/metro/26/forward.png" alt="" /></span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target={`#carouselExampleSlidesOnly${props.id}`} data-bs-slide="next">
                            <span><img style={{ height: "1rem", paddingLeft: "1.5rem" }} src="https://img.icons8.com/metro/26/forward.png" alt="" /></span>
                        </button>
                    </div>

                    <div className="row">
                        <p style={{ backgroundColor: "#23ab50" }} className="py-1 text-white text-center">Click to Register</p>
                    </div>
                </div>
                <div className='row price-ribbon m-0' data-before={`₹${props.coursePrice}/-`}>
                </div>
            </div>
        </div>
    )
}

export default Coursesmob