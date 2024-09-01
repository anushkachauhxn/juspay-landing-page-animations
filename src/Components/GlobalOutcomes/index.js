import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// constants
import { GLOBAL_OUTCOMES_ANIMATION_LETTERS } from "../../Common/Constants";
// style imports
import "./styles.scss";
// icon imports
import ChevronIcon from "../../Assets/icons/chevron-right.svg";

const GlobalOutcomes = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  useGSAP(() => {
    let tl = gsap.timeline({ delay: 0 });
    tl.addLabel("start");
    
    // Text Animation
    tl.fromTo(".heading, .description",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.in" },
      "start"
    );

    // Button Animation
    tl
    .fromTo(".main-cta-btn",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.8, ease: "power2.in" },
      "start"
    )
    .fromTo(".btn-text",
      { width: 0 },
      { width: "100%", duration: 1, delay: 1, ease: "power2.in" },
      "start"
    );

    // Letter Animation
    tl.fromTo(".letter",
      { y: 0, opacity: 0 },
      {
        y: "-400%",
        opacity: 1,
        duration: 1,
        delay: 1,
        stagger: function (index, target, list) {
          const mid = 7, each = 0.1;
          let dist = Math.abs(mid - index);
          let delay = ((mid - dist) * each).toFixed(1);
          return delay;
        }  
      },
      "start"
    );
  }, { scope: container });

  return (
    <div className="global-outcomes" ref={container}>
      <div className="heading">Payments designed for</div>
      <div className="letters">
        {GLOBAL_OUTCOMES_ANIMATION_LETTERS.map((letters, index) => (
          <ul key={index} className={`letter letter-${index+1}`}>
            {letters.map((letter, index) => (
              <li key={index}><span>{letter}</span></li>
            ))}
          </ul>
        ))}
      </div>
      <div className="description">
        <span>Juspay</span> powers leading enterprises around the world, <br/>
        simplifying global coverage, orchestration, conversions, <br/>
        fraud reduction and seamless customer experiences.
      </div>
      <div className="description description-sm">
        Simplify <span>global coverage</span>, optimise<br/>
        costs, improve conversions, and<br/>
        minimise payment operations.
      </div>
      <button className="main-cta-btn">
        <div className="btn-text">Schedule a demo</div>
        <div><img src={ChevronIcon} alt="" /></div>
      </button>
    </div>
  )
}

export default GlobalOutcomes