import React from "react";
// component imports
import Navbar from "./Components/Navbar";
import MobileNavbar from "./Components/MobileNavbar";
import GlobalOutcomes from "./Components/GlobalOutcomes";
import BrandsMarquee from "./Components/BrandsMarquee";
// style imports
import "./App.scss";
// video import
import GlobalVideo from "./Assets/global-second-fold.webm";

const App = () => {
  return (
    <div className="app">
      <div className="section">
        <div className="container">
          <Navbar />
          <MobileNavbar />
          <GlobalOutcomes />
        </div>
      </div>
      <div className="section section-2">
        <div className="container">
          <BrandsMarquee />
          <video 
            src={GlobalVideo}
            className="global-video"
            autoPlay
            loop
            playsInline
            muted={true}
            preload="auto"
          ></video>
        </div>
      </div>
    </div>
  )
}

export default App