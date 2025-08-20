import React from 'react'
import myimage from '../assets/download.svg'
import mimage from '../assets/you.svg'
import moimage from '../assets/twi.svg'
import momage from '../assets/in.svg'
import mige from '../assets/fp.svg'

const footer = () => {
  return (
    <>
    <div className="footer-container bg-light py-5 mt-5">
  <div className="container">
    <div className="row align-items-center text-center text-md-start">
      
      <div className="col-md-4 mb-4 mb-md-0">
        <img src={myimage} alt="Logo" className="mb-3" style={{ maxWidth: "150px" }} />
        <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
          <img src={mige} alt="" style={{ width: "30px" }} />
          <img src={mimage} alt="" style={{ width: "30px" }} />
          <img src={moimage} alt="" style={{ width: "30px" }} />
          <img src={momage} alt="" style={{ width: "30px" }} />
        </div>
      </div>

      <div className="col-md-8">
        <div className="row">
          <div className="col-6 col-md-4 mb-4">
            <h6 className="fw-bold text-dark">Quality</h6>
            <ul className="list-unstyled text-muted">
              <li>Help</li>
              <li>Share</li>
              <li>Career</li>
              <li>Testimonials</li>
              <li>Work</li>
            </ul>
          </div>

          <div className="col-6 col-md-4 mb-4">
            <h6 className="fw-bold text-dark">Contact</h6>
            <ul className="list-unstyled text-muted">
              <li>234 5677 8847</li>
              <li>hello@food.com</li>
              <li>press@food.com</li>
              <li>contact@food.com</li>
            </ul>
          </div>

          <div className="col-6 col-md-4 mb-4">
            <h6 className="fw-bold text-dark">Legal</h6>
            <ul className="list-unstyled text-muted">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>


  </div>
</div>

    </>
  )
}

export default footer