import React from 'react';
import Scrollspy from 'react-scrollspy';
import $ from 'jquery';
import { useState } from 'react';
import mobileapp1 from '../images/Mobileappdesign-01.png';
import mobileapp2 from '../images/Mobileappdesign-02.png';
import mobileapp3 from '../images/Mobileappdesign-03.png';


const Makeitsimple = () => {
const [num,setNum]=useState(1);

const position=()=>{
  let content=document.querySelector("#content")
  if(content.scrollTop<=30){
    setNum(1)
  }
  else if(content.scrollTop >30 && content.scrollTop<=345){
setNum(2)
  }
  else{
    setNum(3)
  }
console.log(num)
  console.log(content.scrollTop)
}

  return (
<div className="we-make">
  <div className="container-fluid">
    <div className="all-have-row d-flex">
      <div className="col-md-6">
        <div className="we-make-title bold">
          We make it
          <span className="teal bold">
            {" "}
            <br />
            simpler for you
          </span>
        </div>
        <div
        id='content'
        data-spy="scroll" data-target="#list-scrollspy" 
          className="scrollspy" 
          style={{position:"relative",}}
          onScroll={position}
        >
          <h4 className="sub-title bold opacity-0" id="list-item-1">
            Finding or Renting a property?
          </h4>
          <hr
            style={{ width: "8%", margin: 0, borderTop: "3px solid #161c25" }}
          />
          <p style={{marginBottom:'150px'}}>
            Pay rent or select a property we have made it easy for you have us
            at the edge of your fingers on your mobile.
          </p >
          <h4 id="list-item-2">Design the way you want!</h4>
          <hr
            style={{ width: "8%", margin: 0, borderTop: "3px solid #161c25" }}
          />
          <p style={{marginBottom:'150px'}}>
            Design your home the way your heart's desire, select and customise
            your home in just one touch with the help of our mobile app.
          </p>
          <h4 id="list-item-3">Give us your feedback!</h4>
          <hr
            style={{ width: "8%", margin: 0, borderTop: "3px solid #161c25" }}
          />
          <p style={{marginBottom:'150px'}}>
            Be a part of every movement and every step we take, give us your
            feedback and support us to make it the best for you.
          </p>
        </div>
      </div>
      <div className="col-md-6 ">
        <div>
          <a
          style={num===1? {display:"block"}:{display:"none"}}
            className="app"
            href="#list-item-1"
          >
            <img
              className="mobileapp"
              src={mobileapp1}
              alt=""
            />
          </a>
          <a
           style={num===2? {display:"block"}:{display:"none"}}
            className="app"
            href="#list-item-2"
          >
            <img
              className="mobileapp"
              src={mobileapp2}
              alt=""
            />
          </a>
          <a
           style={num===3? {display:"block"}:{display:"none"}}
            className="app"
            href="#list-item-3"
          >
            <img
              className="mobileapp"
              src={mobileapp3}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Makeitsimple

{/* <div>
<section className='section-1' id="section-1">lorem20 getgsedf hhjtyjtujtuj edfgerserf sffffffsdc sddddfdfsef fdscdxcaseda zscdewerw werweedsdde sds


</section>
<section className='section-2' id="section-2">lorem20 getgsedf hhjtyjtujtuj edfgerserf sffffffsdc sddddfdfsef fdscdxcaseda zscdewerw werweedsdde sds</section>
<section  id="section-3">lorem20 getgsedf hhjtyjtujtuj edfgerserf sffffffsdc sddddfdfsef fdscdxcaseda zscdewerw werweedsdde sds</section>
</div>

<Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
<li className='section'><a href="#section-1"><img src={mobileapp1} style={{hieght:"300px",width:"300px"}}/></a></li>
<li className='section'><a href="#section-2"><img src={mobileapp2} style={{hieght:"300px",width:"300px"}}/></a></li>
<li className='section'><a href="#section-3"><img src={mobileapp3} style={{hieght:"300px",width:"300px"}}/></a></li>
</Scrollspy> */}