import React from "react";
// component imports
import Navbar from "./Components/Navbar";
import GlobalOutcomes from "./Components/GlobalOutcomes";
import BrandsMarquee from "./Components/BrandsMarquee";
// style imports
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <div className="section">
        <div className="container">
          <Navbar />
          <GlobalOutcomes />
        </div>
      </div>
      <div className="section section-2">
        <div className="container">
          <BrandsMarquee />
        </div>
      </div>
    </div>
  )
}

export default App