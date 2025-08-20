import React from 'react'
import myimage from '../assets/food.png.png'
import myarrow from '../assets/downloadd.svg'

const Hero = () => {
  return (
    <>
      <div className="container my-5">
  <div className="row align-items-center text-center text-md-start">
    
    <div className="col-md-6 mb-4 mb-md-0">
      <h1 className="fw-bold display-5">
        Your Favourite Food Delivered Hot & Fresh
      </h1>
      <p className="fs-5 mt-3">
        Healthy switcher chefs do all the prep work, like peeling, chopping & marinating,
        so you can cook a fresh meal.
      </p>
      <a href="#">
        <button className="btn btn-warning text-white mt-3 px-4 py-2 d-flex align-items-center gap-2">
          Order Now <img src={myarrow} alt="" style={{ width: "20px" }} />
        </button>
      </a>
    </div>

    <div className="col-md-6 text-center">
      <img 
        src={myimage} 
        alt="" 
        className="img-fluid" 
        style={{ maxWidth: "500px" }} 
      />
    </div>
  </div>
</div>

    </>
  )
}

export default Hero