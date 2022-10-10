import React from 'react';
import accenture from '../images/accenture-logo.png';
import ntt from '../images/ntt-Logo.png';
import objectwin from '../images/ObjectWin_Logo.png';
import oracle from '../images/Oracle-logo.png';
import trianz from '../images/Trianz-Logo.png';
import vmare from '../images/vmware-logo.png';
import ey from '../images/ey-logo.png';

const Sponsors = () => {
  return (
    <div>
     <div className=" sponsors">
  <div className="spot-light container-fluid">
    <h2 className="spot-light-title font-bold ">
      <span className="text-animation">Our Clients</span>
    </h2>
    <p className="spot-light-sub-title font-book">
      Our work And Our sponsors count.
    </p>
  </div>
  <div id="slider-container">
    <div id="slider-scroller">
      <div className="slider-item">
        <img src={accenture} alt="" />
      </div>
      <div className="slider-item">
        <img src={ntt} alt="" />
      </div>
      <div className="slider-item">
        <img src={objectwin} alt="" />
      </div>
      <div className="slider-item">
        <img src={oracle} alt="" />
      </div>
      <div className="slider-item">
        <img src={trianz} alt="" />
      </div>
      <div className="slider-item">
        <img src={vmare} alt="" />
      </div>
      <div className="slider-item">
        <img src={ey} alt="" />
      </div>
    </div>
  </div>
  <div className="readmore-button container-fluid">
    <a className="readmore-btn" href="#">
      <button type="submit" className="read-btn">
        Read More
      </button>
    </a>
  </div>
</div>
 
    </div>
  )
}

export default Sponsors
