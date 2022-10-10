
import './App.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import Home from './components/home/home';
import Aboutus from './components/about/Aboutus';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {

  function slideSlider() {
   
    $("#slider-scroller").css({
        "left": "0%",
        "transition": "all 0s linear"
    });
    $("#slider-scroller").css({
        "left": String(parseInt($("#slider-scroller").css("left")) - 500) + "px",
        "transition": "all 5s linear"
    });
    setTimeout(function() {
        moveSliderItem()
    }, 2635);
}

function moveSliderItem() {
    $("#slider-scroller div").first().detach().appendTo($("#slider-scroller"));
    slideSlider();
}





  useEffect(()=>{

  slideSlider();

  },[])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/About" element={<Aboutus/>}/>
        </Routes>
      </Router>
      
 
    </div>
  );
}

export default App;
