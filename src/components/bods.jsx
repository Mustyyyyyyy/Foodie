import React from 'react';
import imageF from '../assets/fork.png.png';
import imageE from '../assets/point.png.png';
import imageD from '../assets/lorry.png.png';


const Bods = () => {
    return (
        <>
        <div className="container my-5 text-center">
  <p className="text-warning fw-bold fs-5">Work</p>
  <h1 className="fw-bold">How It Works</h1>
  <p className="fs-5 fw-medium text-muted">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut <br />
    adipisci eaque fuga optio molestiae veniam?
  </p>

  <div className="row mt-5 g-4 justify-content-center">
    <div className="col-md-4">
      <div className="card border-0 shadow-sm p-4 h-100 text-center">
        <img src={imageF} alt="" className="mx-auto mb-3" style={{ width: "80px" }} />
        <h2 className="h4 fw-bold">Pick Meals</h2>
        <p className="text-muted mt-3">
          Lorem ipsum dolor and the foish of the drink gritlo gonmiloft <br />
          brink of it alone gonmiloft brink of it alone.
        </p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card border-0 shadow-sm p-4 h-100 text-center">
        <img src={imageE} alt="" className="mx-auto mb-3" style={{ width: "80px" }} />
        <h2 className="h4 fw-bold">Choose How Often</h2>
        <p className="text-muted mt-3">
          Lorem ipsum dolor and the foish of the drink gritlo gonmiloft brink of it alone.
        </p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card border-0 shadow-sm p-4 h-100 text-center">
        <img src={imageD} alt="" className="mx-auto mb-3" style={{ width: "80px" }} />
        <h2 className="h4 fw-bold">Fast Deliveries</h2>
        <p className="text-muted mt-3">
          Lorem ipsum dolor and the foish of the drink gritlo gonmiloft brink of it alone.
        </p>
      </div>
    </div>
  </div>
</div>

  </>
    )
}
export default Bods