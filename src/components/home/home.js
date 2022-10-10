import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import About from './About';
import Aboutinterior from "./Aboutinterior";
import Banner from './Banner';
import Homestype from './Homestype';
import Makeitsimple from './Makeitsimple';
import Sharingthebest from './Sharingthebest';
import Sponsors from './Sponsors';


const home = () => {
  return (
    <div>
          <Navbar/>
    <Banner/>
    <About/>
    <Homestype/>
    <Aboutinterior/>
    <Makeitsimple/>
    <Sharingthebest/>
    <Sponsors/>
    <Footer/>
    </div>
  )
}

export default home
