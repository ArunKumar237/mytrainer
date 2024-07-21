import React from 'react'
import Studentcarousal from './Studentcarousal'

const Studentstories = () => {
  return (
    <div className="container py-4">
      <div className="d-flex flex-column align-items-center pb-4">
        <h2>Student Stories</h2>
        <p style={{ fontSize: "16px" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam error
          harum quam a suscipit aspernatur fuga natus optio, totam perspiciatis.
        </p>
      </div>
      <div className="container">
        <Studentcarousal/>
      </div>
    </div>
  )
}

export default Studentstories