import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="container-md">
      <div className="row banner mx-auto">
        <div style={{ transform: "skew( -15deg)" }} className="col h-100 d-flex justify-content-center align-items-center border-end border-5 border-white"><p className='text-white fw-bold fs-2'>Additional <br /> Queries ?</p></div>
        <div style={{ transform: "skew( -15deg)" }} className="col h-100 d-flex justify-content-center align-items-center border-end border-5 border-white"><p className='text-white fw-bold fs-2'>Training <br /> Partnership ?</p></div>
        <div style={{ transform: "skew( -15deg)" }} className="col h-100 d-flex justify-content-center align-items-center"><p className='text-white fw-bold fs-2'>Last Minute <br /> Registrations ?</p></div>
      </div>
      <div style={{ marginTop: "-1rem" }} className="row position-relative justify-content-center">
        <div className="col-11 d-flex justify-content-center">
          <div className="d-flex flex-wrap gap-3">
            <div className="contactDiv border border-1 rounded d-flex gap-2 bg-white align-items-center">
              <img src="https://img.icons8.com/doodle/48/ringer-volume--v1.png" alt="" />
              <div className="d-flex flex-column pt-2">
                <p style={{ fontSize: ".8rem" }} className="fw-medium m-0">Call us on</p>
                <p className="fw-medium text-secondary m-0">+91 9701 37 97 97</p>
                <p style={{ fontSize: ".7rem" }} className="fw-medium">(9 am to 9 pm IST)</p>
              </div>
            </div>

            <div className="contactDiv border border-1 rounded d-flex gap-2 bg-white">
              <img src="https://img.icons8.com/fluency/48/apple-mail.png" alt="" />
              <div className="d-flex flex-column py-2">
                <p style={{ fontSize: ".8rem" }} className="fw-medium m-0">Email us to</p>
                <p className="fw-medium text-secondary m-0">python.trainer.helper@gmail.com</p>
              </div>
            </div>

            <div className="contactDiv border border-1 rounded d-flex gap-2 bg-white">
              <img src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="" />
              <div className="d-flex flex-column py-2">
                <p style={{ fontSize: ".8rem" }} className="fw-medium m-0">Chat us on Whatsapp</p>
                <p className="fw-medium text-secondary m-0">+91 9701 37 97 97</p>
                <p style={{ fontSize: ".7rem" }} className="fw-medium">(24/7)</p>
              </div>
            </div>

            <div className="contactDiv border border-1 rounded d-flex gap-2 bg-white">
              <img src="https://img.icons8.com/color/48/youtube-play.png" alt="" />
              <div className="d-flex flex-column py-2">
                <p style={{ fontSize: ".8rem" }} className="fw-medium m-0">Follow us on Youtube Channel</p>
                <p className="fw-medium text-secondary m-0">@python.trainer.helper</p>
              </div>
            </div>

            <div className="contactDiv border border-1 rounded d-flex gap-2 bg-white">
              <img src="https://img.icons8.com/fluency/48/instagram-new.png" alt="" />
              <div className="d-flex flex-column py-2">
                <p style={{ fontSize: ".8rem" }} className="fw-medium m-0">Follow us on Instagram</p>
                <p className="fw-medium text-secondary m-0">python.trainer.helper</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact