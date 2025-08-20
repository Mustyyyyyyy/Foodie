import React from 'react';

const Bodyy = () => {
    return (
        <> 
        <div className="container my-5 text-center">
  <h1 className="fw-bold display-5 text-secondary" style={{ fontFamily: "serif" }}>
    Have Questions In Mind
  </h1>
  <h1 className="fw-bold text-secondary">
    Let Us Help You Out
  </h1>

  <div className="row justify-content-center mt-5">
    <div className="col-md-8 col-lg-6">
      <div className="input-group">
        <input
          type="email"
          className="form-control form-control-lg rounded-start-pill border-0 shadow-sm"
          placeholder="yourmail@gmail.com"
          style={{ backgroundColor: "#f5f5f5", height: "70px" }}
        />
        <button
          className="btn btn-warning text-white px-4 rounded-end-pill"
          type="button"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Bodyy