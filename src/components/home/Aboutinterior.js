import React from 'react';
import interior1 from '../images/Interior-1.png';
import interior2 from '../images/Interior-2.png';
import interior3 from '../images/Interior-3.png';

const Aboutinterior = () => {
  return (
    <div>
      <>
  <div className="bg interior">
    <div className="container hotel-foods">
      <div className="interior-row d-flex">
        <div className="col-md-7 interior-images d-flex">
          <div className="col-md-6 interior-image">
            <img
              className="interior-images interior-img"
              src={interior2}
              alt=""
            />
          </div>
          <div className="col-md-6 interior-image">
            <img
              className="interior-images interior-img-1"
              src={interior3}
              alt=""
            />
            <img
              className="interior-images interior-img-2"
              src={interior1}
              alt=""
            />
          </div>
        </div>
        <div className="col-md-5 m-auto">
          <h3 className="interior-title font-bold tittle">
            {" "}
            <br />
            <span className=" text-animation" style={{ fontSize: 36 }}>
              About Interior's
            </span>
          </h3>
          <p className="interior-desc desc">
            Get your dream interior's done with kalyani Homes. We provide you
            the best interior's . Tell your dream design to our design team,
            they design the best for you.{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
  {/*-for mobile--*/}
  <div className="mobile-home">
    <div className="card-interior">
      <div className="card-body">
        <h3>About Interior's</h3>
        <div className="col-md-7 product-images d-flex">
          <div className="col-md-6 interior-image">
            <img
              className="interior-images interior-img"
              src={interior2}
              alt=""
            />
          </div>
          <div className="col-md-6 interior-image interior-img-1">
            <img
              className="interior-images"
              src={interior3}
              alt=""
            />
            <img
              className="interior-images interior-img-2"
              src={interior1}
              alt=""
            />
          </div>
        </div>
        <p className="roof-desc desc">
          Get your dream interior's done with kalyani Homes. We provide you the
          best interior's . Tell your dream design to our design team, they
          design the best for you.
        </p>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Aboutinterior
