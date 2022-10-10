import React from 'react';
import commercial1 from '../images/commercialspace1.png';
import commercial2 from "../images/commercialspace2.png";
import apartment1 from "../images/Apartment-1.png";
import apartment2 from '../images/Apartment-2.png';
import rental1 from '../images/Rent-1.png';
import rental2 from '../images/Rent-2.png';
import rental3 from '../images/Rent-3.png';


const Homestype = () => {
  return (
    <div>
      <>
  <div className="bg commercial commercial-infra">
    <div className="container commercial-spec">
      <div className="commercial-row d-flex">
        <div className="col-md-6 m-auto">
          <h3 className="roof-title font-bold tittle">
            <br />
            <span className=" text-animation" style={{ fontSize: 36 }}>
              Commercial Space
            </span>
          </h3>
          <p className="roof-desc desc" style={{ color: "#fff" }}>
            Kalyani provides the best commercial space for work . 8+ tech parks
            are available in Bangalore and Hyderbad. It has the best interior's
            and smart workspace's. Kalyani Aura has the managed office space
            ready for many companies. Office space are customized according to
            the clients ideas.
          </p>
        </div>
        <div className="col-md-6 commercial-images d-flex">
          <div className="col-md-6 room-image">
            <img
              className="commercial-img-1 commercial-img"
              src={commercial1}
              alt=""
            />
          </div>
          <div className="col-md-6 room-image">
            <img
              className="commercial-img-2 commercial-img"
              src={commercial2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*-for mobile--*/}
  <div className="mobile-home">
    <div className="card-commercial">
      <div className="card-body">
        <h3>Commercial Space</h3>
        <div className="col-md-6 commercial-images d-flex">
          <div className="col-md-6 room-image">
            <img
              className="commercial-img-1 commercial-img"
              src={commercial1}
              alt=""
            />
          </div>
          <div className="col-md-6 room-image">
            <img
              className="commercial-img-2 commercial-img"
              src={commercial2}
              alt=""
            />
          </div>
        </div>
        <p className="roof-desc desc">
          Kalyani provides the best commercial space for work . 8+ tech parks
          are available in Bangalore and Hyderbad. It has the best interior's
          and smart workspace's. Kalyani Aura has the managed office space ready
          for many companies. Office space are customized according to the
          clients ideas.{" "}
        </p>
      </div>
    </div>
  </div>
  {/*-end mobile--*/}
  <div className="bg apartments">
    <div className="container apartments-list">
      <div className="apartments-row d-flex">
        <div className="col-md-6 apartments-images d-flex">
          <div className="col-md-6 room-image">
            <img
              className="ap-img-1 ap-img"
              src={apartment1}
              alt=""
            />
          </div>
          <div className="col-md-6 room-image">
            <img
              className="ap-img-2 ap-img"
              src={apartment2}
              alt=""
            />
          </div>
        </div>
        <div className="col-md-6 m-auto">
          <h3 className="apartments-title font-bold tittle">
            <br />
            <span className=" text-animation" style={{ fontSize: 36 }}>
              Apartments/Villa's
            </span>
          </h3>
          <p className="roof-desc desc">
            1BHK, 2BHK, 3BHK and 4BHK apartments and villa's are available at
            Kalyani Homes. Located near Nayandahalli metro station, Bangalore.
            surrounded by scholls, college's, shopping centre, banks, hospitals.
            Have your best experience with Kalyani Homes.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/*-for mobile--*/}
  <div className="mobile-home">
    <div className="card-apartments">
      <div className="card-body">
        <h3>Apartments/Villas</h3>
        <div className="apartments-row d-flex">
          <div className="col-md-6 apartments-images d-flex">
            <div className="col-md-6 room-image">
              <img
                className="ap-img-1 ap-img"
                src={apartment1}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 room-image ap-image">
            <img
              className="ap-img-2 ap-img"
              src={apartment2}
              alt=""
            />
          </div>
        </div>
      </div>
      <p className="roof-desc desc">
        1BHK, 2BHK, 3BHK and 4BHK apartments and villa's are available at
        Kalyani Homes. Located near Nayandahalli metro station, Bangalore.
        surrounded by scholls, college's, shopping centre, banks, hospitals.
        Have your best experience with Kalyani Homes.
      </p>
    </div>
  </div>
  {/*-end mobile--*/}
  <div className="bg rental">
    <div className="container rental-area-spec">
      <div className="rental-row d-flex">
        <div className="col-md-5 m-auto">
          <h3 className="area-title font-bold tittle">
            <br />
            <span className=" text-animation" style={{ fontSize: 36 }}>
              Rental
            </span>
          </h3>
          <p className="area-desc desc" style={{ color: "#fff" }}>
            Kalyani Homes provides you the best rental options. Kalyani Homes
            contains almost 500+ Villa's and Apartments or rent. Special offer's
            for lease are provided to customers. Rent your dream home home with
            Kalyani Homes.
          </p>
        </div>
        <div className="col-md-7 area-images d-flex">
          <div className="col-md-6 area-image">
            <img
              className="area-images rent-img-1"
              src={rental1}
              alt=""
            />
            <img
              className="area-images rent-img-2"
              src={rental3}
              alt=""
            />
          </div>
          <div className="col-md-6 area-image">
            <img
              className="area-images rent-img-3"
              src={rental2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*-for mobile--*/}
  <div className="mobile-home">
    <div className="card-rental">
      <div className="card-body">
        <h3>Rental</h3>
        <div className="col-md-7 product-images d-flex">
          <div className="col-md-6 area-image">
            <img
              className="area-images rent-img-1"
              src={rental1}
              alt=""
            />
            <img
              className="area-images rent-img-2"
              src={rental3}
              alt=""
            />
          </div>
          <div className="col-md-6 area-image">
            <img
              className="area-images rent-img-3"
              src={rental2}
              alt=""
            />
          </div>
        </div>
        <p className="roof-desc desc">
          Kalyani Homes provides you the best rental options. Kalyani Homes
          contains almost 500+ Villa's and Apartments or rent. Special offer's
          for lease are provided to customers. Rent your dream home home with
          Kalyani Homes.
        </p>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Homestype
