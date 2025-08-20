import React from 'react'
import imagemi from '../assets/john.png.png'
import meee from '../assets/d.svg'

const Bodyy = () => {
    return (
        <>
        <div className="container my-5 text-center">
  <h3 className="text-warning fw-bold">Testimonials</h3>
  <h2 className="fw-bold display-5 text-secondary mt-3">
    What our clients are saying
  </h2>
  <p className="text-muted fw-semibold">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
    Sed labore quae aliquam temporibus nesciunt quaerat <br />
    doloribus quod omnis.
  </p>

  <div className="card border-0 shadow-sm mx-auto mt-5 p-4" style={{ maxWidth: "600px", borderRadius: "20px", backgroundColor: "rgb(244,244,244)" }}>
    <div className="text-center">
      <img
        src={imagemi}
        alt="Client"
        className="rounded-circle"
        style={{ width: "80px", height: "80px", objectFit: "cover", marginTop: "10px" }}
      />
    </div>

    <p className="text-secondary mt-4 px-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est molestias
      delectus a! Dolore voluptatum distinctio architecto sit.
    </p>

    <div className="d-flex justify-content-center gap-2 mt-3">
      <img src={meee} alt="star" />
      <img src={meee} alt="star" />
      <img src={meee} alt="star" />
      <img src={meee} alt="star" />
      <img src={meee} alt="star" />
    </div>

    <h4 className="text-warning mt-4">John Doe</h4>
  </div>
</div>

        </>
    )
}

export default Bodyy