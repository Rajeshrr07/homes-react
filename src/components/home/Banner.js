import React from 'react';
import Slider from "react-slick";
import banner1 from '../images/banner-image-2-01.png';
import banner2 from '../images/banner-image-01.png';
import card1 from '../images/card-image-1.jpg';
import card2 from '../images/card-image-2.jpg';
import card3 from '../images/card-image-3.jpg';



const Banner = () => {
  const settings = { 
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="row banner-row" >
        
    <div className="col-md-8">
    
        <Slider {...settings}>
        <div className="item">
           
              <div className="banner_content">
                <h1 className="font-bold banner-heading">
                  <span>Turn Your</span>
                  <span style={{ color: "#f4a950" }}> Dream</span>
                  <span> Home into a Real</span>
                  <span>One!</span>
                  <p
                    className="sort-description"
                    style={{
                      width: 300,
                      fontSize: 20,
                      color: "#232728",
                      fontWeight: 500
                    }}
                  >
                    We Make Your Home Beautiful!
                  </p>
                </h1>
                <br />
              </div>
              <div className="part-bannerimg">
                <img
                  className="banner-image"
                  src={banner1}
                  alt=""
                  style={{width:"100%",height:"560px"}}
                />
              </div>
          </div>
          <div className="item">
         
              <div className="banner_content">
                <h1 className="font-bold banner-heading">
                  <span>Don't Quit We Make</span>
                  <span style={{ color: "#f4a950" }}>
                    {" "}
                    Your Day Dream Come True!
                  </span>
                  <p
                    className="sort-description"
                    style={{
                      width: 350,
                      fontSize: 20,
                      color: "#232728",
                      fontWeight: 500
                    }}
                  >
                    You Dream, We Design!
                  </p>
                </h1>
              </div>
              <div className="part-bannerimg">
                <img
                  className="banner-image"
                  src={banner2}
                  alt=""
                  style={{width:"100%",height:"560px"}}
                />
              </div>
          
          </div>
        </Slider>
         
       
      <div className="row form-row">
        <div className="col-xs-8 col-xs-offset-2">
          <form className="search" role="search">
            <div className="input-group">
              <div className="input-group-btn">
                <div className="dropdown">
                  <button
                    className="btn  dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{
                      width: 250,
                      textAlign: "start",
                      color: "#232728",
                      fontWeight: 600,
                      fontSize: 16
                    }}
                  >
                    Shortlist your property
                    <p className="living-place"> select a plot</p>
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a
                      style={{ color: "rgb(78, 82, 83)" }}
                      className="dropdown-item"
                      href="#"
                    >
                      Action
                    </a>
                    <a
                      style={{ color: "rgb(78, 82, 83)" }}
                      className="dropdown-item"
                      href="#"
                    >
                      Another action
                    </a>
                    <a
                      style={{ color: "rgb(78, 82, 83)" }}
                      className="dropdown-item"
                      href="#"
                    >
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              <div className="vl" />
              <label className="banner-form-label">
                Available Locations...
                <input type="hidden" id="txt-category" />
                <input
                  type="text"
                  id="txt-search"
                  className="form-control"
                  placeholder="Enter Locations"
                />
              </label>
              <span className="input-group-btn">
                <button id="btn-search" className="icon" type="submit">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </span>
            </div>
          </form>
          <form className="mobile-form">
            <div className="mobile-forms">
              <i className="fa fa-search" aria-hidden="true" />
              <input
                className="mobile-form-input"
                type="text"
                placeholder="Search for second home"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="card_section col-md-4">
      <div className="card card-col-4">
        <div className="card-body">
          <span className="description">
            Hi-Tech building's for business and &amp; Standard Office Spaces.
          </span>
          <div className="card-text font-medium card-description">
            Commercial
            <br />
            Space
          </div>
          <div className="arrow-icon">
            <i className="fa fa-arrow-right" aria-hidden="true" />
          </div>
          <img
            className="d-block img-fluid card-image"
            src={card1}
            alt=""
          />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <span className="description">
            A fully-furnished Apartments and villa's, a better space for living.
            <office className="" />
          </span>
          <div className="card-text font-medium card-description">
            Apartments
            <br />
            Villas
          </div>
          <div className="arrow-icon">
            <i className="fa fa-arrow-right" aria-hidden="true" />
          </div>
          <img
            className="d-block img-fluid card-image"
            src={card2}
            alt=""
          />
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="card-text font-medium card-description">Rentals</div>
          <span className="description">
            Rent your dream home with customization options.
          </span>
          <div className="arrow-icon">
            <i className="fa fa-arrow-right" aria-hidden="true" />
          </div>
          <img
            className="d-block img-fluid card-image"
            src={card3}
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Banner
