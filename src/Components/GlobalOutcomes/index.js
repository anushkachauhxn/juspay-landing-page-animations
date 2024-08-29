import React from "react";
// style imports
import "./styles.scss";
// icon imports
import ChevronIcon from "../../Assets/chevron-right.svg";

const GlobalOutcomes = () => {
  return (
    <div className="global-outcomes">
      <div className="heading">Payments designed for</div>
      <div className="letters">
        <span>G</span>
        <span>L</span>
        <span>O</span>
        <span>B</span>
        <span>A</span>
        <span>L</span>
        <span>&nbsp;</span>
        <span>O</span>
        <span>U</span>
        <span>T</span>
        <span>C</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
        <span>S</span>
      </div>
      <div className="description">
        <span>Juspay</span> powers leading enterprises around the world, <br/>
        simplifying global coverage, orchestration, conversions, <br/>
        fraud reduction and seamless customer experiences.
      </div>
      <button className="main-cta-btn">
        Schedule a demo
        <img src={ChevronIcon} alt="" />
      </button>
    </div>
  )
}

export default GlobalOutcomes
