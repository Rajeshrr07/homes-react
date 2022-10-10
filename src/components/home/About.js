import React from 'react';
import techpark from '../images/tech park-01.svg';
import construction from '../images/construction-01.svg';
import rental from '../images/rental-01.svg';
import aboutimg1 from '../images/kalyanihomes-content-1.svg';
import aboutimg2 from '../images/kalyanihomes-content-2.svg';
import aboutimg3 from '../images/kalyanihomes-content-3.svg';


const About = () => {
  return (
    <div>
      <>
      <div>
      <h2 className="homes-title font-bold ">
      <span className="text-animation">Why</span> {""} Kalyani Homes?
    </h2>
      </div>
  <div className="icons-row container-fluid d-flex">
    <div className="col-xl-4 ">
      <div className="tech-park">
        <img
          style={{ width: 36, height: 36 }}
          src={techpark} 
        />
        <span className="text-wrap">
          <span className="count font-medium">8+</span>{" "}
          <span className="count-for fm lg:ml-2">Tech Parks</span>
        </span>
      </div>
    </div>
    <div className="col-xl-4 ">
      <div className="construction-icon">
        <img
          style={{ width: 36, height: 36 }}
          src={construction}
        />
        <span className="text-wrap">
          <span className="count font-medium">500+</span>{" "}
          <span className="count-for fm lg:ml-2">Constructions</span>
        </span>
      </div>
    </div>
    <div className="col-xl-4">
      <div className="rent-icon">
        <img
          style={{ width: 36, height: 36 }}
          src={rental}
        />
        <span className="text-wrap">
          <span className="count font-medium">400+</span>
          <span className="count-for fm lg:ml-2">Rental</span>
        </span>
      </div>
    </div>
  </div>
  <div className="bg homes roofs">
    <h2 className="homes-title font-bold ">
      <span className="text-animation">There is No</span> Better Place Than Home
    </h2>
    <p className="homes-sub-title font-book">
      Helping you find your dream home,make a new beginning with Kalyani Homes.{" "}
    </p>
    <div className="container product-spec">
      <div className="homes-row d-flex">
        <div className="col-md-7 product-images d-flex">
          <div className="col-md-6 roof-image">
            <img
              style={{ borderRadius: "1em" }}
              className=""
              src={aboutimg1}
              alt=""
            />
          </div>
          <div className="col-md-6 roof-image">
            <img
              style={{ borderRadius: "1em" }}
              className="wall-images"
              src={aboutimg2}
              alt=""
            />
            <img
              style={{ borderRadius: "1em" }}
              className="wall-images"
              src={aboutimg3}
              alt=""
            />
          </div>
        </div>
        <div className="col-md-5 m-auto">
          <h3 className="roof-title font-bold tittle">
            <br />
            <span className=" text-animation" style={{ fontSize: 36 }}>
              Kalyani Homes
            </span>
          </h3>
          <p className="roof-desc desc">
            Kalyani Homes is the world's leading and developing business,
            Kalyani Homes deliver the best designs and home interior's. Luxury 3
            and 4 bedroom villa's that has thick green gardern. Facilities such
            as Kids Playing area, Basketball Courts, are available inside
            Kalyani Homes. Kalyani Homes has been most trusted and has gained
            reputation all over the world!.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/*-for mobile--*/}
  <div className="mobile-home">
    <div className="card-home">
      <div className="card-body">
        <h3>Kalyani Homes</h3>
        <div className="col-md-7 product-images d-flex">
          <div className="col-md-6 home-image">
            <img
              style={{ borderRadius: "1em" }}
              className=""
              src={aboutimg1}
              alt=""
            />
          </div>
          <div className="col-md-6 roof-image">
            <img
              style={{ borderRadius: "1em" }}
              className="wall-images"
              src={aboutimg2}
              alt=""
            />
            <img
              style={{ borderRadius: "1em" }}
              className="wall-images"
              src={aboutimg3}
              alt=""
            />
          </div>
        </div>
        <p className="roof-desc desc">
          Kalyani Homes is the world's leading and developing business, Kalyani
          Homes deliver the best designs and home interior's. Luxury 3 and 4
          bedroom villa's that has thick green gardern. Facilities such as Kids
          Playing area, Basketball Courts, are available inside Kalyani Homes.
          Kalyani Homes has been most trusted and has gained reputation all over
          the world!.
        </p>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default About
