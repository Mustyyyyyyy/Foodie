import React from 'react'
import myimage from '../assets/download.svg'
import myimages from '../assets/car.png'


const Navbar = () => {
  return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light p-3 shadow-sm rounded">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={myimage} alt="Logo" style={{ height: "50px" }} />
    </a>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav align-items-lg-center" style={{ gap: "30px" }}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Testimonials</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        
        <li className="nav-item d-flex align-items-center">
          <img src={myimages} alt="" style={{ width: "40px" }} />
        </li>

        <li className="nav-item">
          <button className="btn btn-warning fw-bold">Book Now</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </>
      
  )
}

export default Navbar