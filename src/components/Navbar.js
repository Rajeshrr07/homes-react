import React from 'react';
import  '../css/Navbar.css';
import logo from './images/logo2.svg';

const Navbar = () => {
  return (
    <div className="container-fluid">
    <nav className="navbar navbar-inverse">
      <ul className="nav navbar-nav">
        <a className="navbar-brand" href="#">
          <img style={{width:"300px",height:"100px"}}src={logo} alt="" />
        </a>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li className="active nav-item">
          <a href="/">Home</a>
        </li>
        <li className="active nav-item">
          <a href="/About">About us</a>
        </li>
        <li className="dropdown nav-item dropbtn">
          <a className="dropdown-icon" data-toggle="dropdown" href="#">
            Our Location
          </a>
          <ul className="dropdown-menu dropdown-content">
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
            <li>
              <a href="#">Page 3</a>
            </li>
          </ul>
        </li>
        <div style={{ marginLeft: 50 }} className="call-icon">
          <span className="ico">
            <i className="fa fa-phone" aria-hidden="true" />
          </span>
          <span className="font-medium">Contact Us</span>
        </div>
      </ul>
    </nav>
  </div>
     
  )
}

export default Navbar
