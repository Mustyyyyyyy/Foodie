import React from 'react';
import myimage from '../assets/image.png'
import myimages from '../assets/side.png.png'
import ourimage from '../assets/downs.svg'


const Body = () => {
  return (
    <>
    {/* <img src={myimages} alt="" /> */}
<div className="container my-5 py-5">
  <div className="row align-items-center">
    <div className="col-md-6 text-center mb-4 mb-md-0">
      <img
        src={myimage}
        alt=""
        className="img-fluid rounded shadow"
        style={{ maxWidth: "500px" }}
      />
    </div>

    <div className="col-md-6">
      <h4 className="text-warning">About</h4>
      <h1 className="fw-bold">
        Food Is An Important Part Of A Balanced Diet
      </h1>

      <p className="text-secondary mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum
        dignissimos nobis nihil voluptate, id aut placeat numquam porro, non
        adipisci maiores dicta voluptatum corporis, veniam ipsum velit
        aliquam quas.
      </p>

      <p className="text-secondary mt-4">
        Autem magnam accusantium ullam placeat. Earum quisquam nam iste! A
        qui facere quas? Nihil, dolore?
      </p>

      <div className="d-flex align-items-center gap-3 mt-4 flex-wrap">
        <button className="btn btn-warning text-white px-4 py-2 rounded-3">
          Learn More
        </button>

        <div className="d-flex align-items-center gap-2">
          <button
            className="btn btn-light rounded-circle p-4 shadow-sm"
            style={{ border: "none" }}
          ></button>
          <img src={ourimage} alt="" width="50" />
          <h5 className="mb-0">Watch Video</h5>
        </div>
      </div>
    </div>
  </div>
</div>

  </>
  )
}

export default Body