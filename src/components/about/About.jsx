import React from 'react'
import './About.css'
import Stars from '../home/coursesoffering/Stars'

const About = () => {
  return (
    <div className="container my-4">
      <div className="row gap-3 justify-content-center">
        <div className="col-3 d-flex flex-column align-items-center border border-1 rounded p-4 gap-4">
          <div className="row text-center mt-2">
            <div id='profile' className="col">
              <img style={{ height: "12rem", width: "12rem" }} className="rounded-circle object-fit-cover" src="https://img.freepik.com/free-photo/lions-digital-art-style_23-2150977775.jpg?t=st=1721479693~exp=1721483293~hmac=8dd1f8a39a6591fcf753d0619c87b7aa1c7657d70a940bb5673192ba46ade4dd&w=360" alt="" />
              <p className='m-0 fw-semibold'>Chaitanya Reddy</p>
              <p className='m-0 fw-bold'>Python Instructor</p>
            </div>
          </div>
          <div className="row w-100">
            <div className="col d-flex gap-2">
              <hr style={{ width: "37%" }} />
              <p>:: :: :: ::</p>
              <hr style={{ width: "37%" }} />
            </div>
          </div>
          <div style={{backgroundColor:"#f8d7da7d"}} id='profile-info' className="row w-100 rounded px-1 py-3">
            <div>
              <p className='m-0 fw-bold lh-lg mb-1'>Age: 40</p>
              <p className='m-0 fw-bold lh-lg mb-1'>Qualification: Mtech</p>
              <p className='m-0 fw-bold lh-lg mb-1'>IT Experience: 20+ yrs</p>
              <p className='m-0 fw-bold lh-lg mb-1'>Training Experience: 10+yrs</p>
            </div>
            <div className='d-flex align-items-baseline gap-2 mb-1'>
              <p className='m-0 fw-bold lh-lg'>Rating</p>
              <p className='m-0'>
                <Stars />
              </p>
            </div>
            <div className='d-flex flex-column gap-2 mt-2'>
              <p className='m-0 align-self-start text-white fw-medium bg-primary rounded-1 p-2'>Complete Python</p>
              <p className='m-0 align-self-start text-white fw-medium bg-primary rounded-1 p-2'>Python Fullstack</p>
              <p className='m-0 align-self-start text-white fw-medium bg-primary rounded-1 p-2'>Frontend Technologies</p>
              <p className='m-0 align-self-start text-white fw-medium bg-primary rounded-1 p-2'>Data Science</p>
            </div>
          </div>
        </div>
        <div className="col-5 d-flex flex-column gap-3">
          <div style={{backgroundColor:"#f8d7da7d"}} className="row border rounded px-2 p-4">
            <div id='bio' className="col">
              <p className='fw-semibold'>Bio</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugit autem alias rem dolor quibusdam vel totam. Quod nemo vero odit laborum nihil eaque accusantium. Recusandae quibusdam illum laudantium hic dolorem voluptates necessitatibus cumque fugiat adipisci ut, distinctio consectetur provident ratione quisquam tempore quos earum omnis soluta aspernatur dolorum itaque suscipit ab quidem. Expedita provident eveniet fuga incidunt, recusandae ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam amet enim reprehenderit maxime cumque, perspiciatis dolor sit. Ex, distinctio in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, impedit. Iusto tempora quis id tenetur, aliquam ipsa a harum excepturi.</p>
            </div>
          </div>
          <div style={{backgroundColor:"#f8d7da7d"}} className="row border rounded px-2 p-4">
            <div id='education' className="col">
              <p className='fw-semibold'>Educational Cerificates</p>
              <p className='m-0'>Btech: from Andhra University</p>
              <p className='m-0'>Mtech: from IIT Roorkee</p>
            </div>
          </div>
          <div style={{backgroundColor:"#f8d7da7d"}} className="row border rounded-top px-0 pt-4">
            <div id='training' className="col">
              <p className='fs-6 fw-semibold px-2'>Training Experience</p>
              <div style={{ height: "9rem" }} className="row gap-1">
                <div className="col bg-primary d-flex flex-column align-items-center justify-content-center gap-3">
                  <p className='fw-bold m-0'>Batch</p>
                  <p className='fw-bold m-0'>64</p>
                </div>
                <div className="col bg-primary-subtle d-flex flex-column align-items-center justify-content-center gap-3">
                  <p className='fw-bold m-0'>Students</p>
                  <p className='fw-bold m-0'>1245</p>
                </div>
                <div className="col bg-warning d-flex flex-column align-items-center justify-content-center gap-3">
                  <p className='fw-bold m-0'>Weekly Tests</p>
                  <p className='fw-bold m-0'>10901</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex flex-column gap-3">
          <div style={{backgroundColor:"#f8d7da7d"}} className="row trackrecord rounded px-2 py-3 d-flex flex-column gap-3">
            <p className='fw-semibold'>IT Experience</p>
            <div id='circle' style={{ width: "2rem", height: "2rem" }} className='bg-warning rounded-circle border border-2 border-primary'></div>
          </div>
          <div style={{backgroundColor:"#f8d7da7d"}} className="row rounded">
            <p>Awards and Rewards</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About