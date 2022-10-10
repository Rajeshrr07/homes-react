import React from 'react';
import Slider from "react-slick";
import fb from '../images/fb.png';
import insta from '../images/insta.png';
import linkedin from '../images/linked-in.png';
import carousel1 from "../images/image-carousel-01.png";
import carousel2 from "../images/image-carousel-02.png";
import carousel3 from "../images/image-carousel-03.png";
import carousel4 from "../images/image-carousel-04.png";
import carousel5 from "../images/image-carousel-05.png";
import carousel6 from "../images/image-carousel-06.png";
import carousel7 from '../images/image-carousel-07.png';
import carousel8 from '../images/image-carousel-08.png';


const Sharingthebest = () => {

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  const carouseldata=[{image:carousel1,description:"Home isn't a place, it's a feeling.-Cecilia Ahernhomeinspiration,homegoals"},
  {image:carousel2,description:"A house is made of wood and stone but only love can make a home"},
  {image:carousel3,description:"There is no safer place than home.homedesign homedecoration"},
{
  image:carousel4,
  description:"Experience the best quality of living.Book your slots now!"
},
{
  image:carousel5,
  description:"Stay home because the best party begins at home.modernhome homedecor homegoals"
},
{
  image:carousel6,
  description:"A house of your own.moderndesign luxuryhome homedesign"
},{
  image:carousel7,
  description:"Interior designing is an art and Kalyani Homes is the artist.interiordesign homedesign homeinterior"
},{
  image:carousel8,
  description:" You will be so desperate to work from home because we make the besthomes for you."
}]
  return (
    <div>
      <div className="container-fluid never-sharing-moment">
  <div className="sharing-moment">
    <h2 className="sharing-moment-title font-bold">
      <div className="text-animation">Sharing the</div>
      <br />
      best of us.
    </h2>
    <p className="sharing-moment-sub-title font-book">
      Make your home coming a memorable one.
    </p>
  </div>
 
    <Slider className='my-slider' {...settings}>
    {
        carouseldata.map((el,index)=>{
          return (<div className="slider-img" key={index} style={{position:"relative"}}>
         
          <div>
          <p className="multi-slider-description">
            {el.description}{" "}
          </p>
          <span>
            <a className="social-logo" href="#">
              <img src={fb} alt="" />
            </a>
            <a className="social-logo" href="#">
              <img src={linkedin} alt="" />
            </a>
            <a className="social-logo" href="#">
              <img src={insta} alt="" />
            </a>
            </span>
          </div>
          <img src={el.image} alt=""  />
        </div>
)
        })
      }
        </Slider>

  </div>
</div>

    
  )
}

export default Sharingthebest
