import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// constants
import { GLOBAL_MENU_OPTIONS, MAIN_MENU_OPTIONS } from "../../Common/Constants";
// style imports
import "./styles.scss";
// icon imports
import LogoIcon from "../../Assets/logo.svg";
import GlobeIcon from "../../Assets/globe-icon.svg";
import ChevronIcon from "../../Assets/icons/chevron-right-blue.svg";

const Navbar = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  useGSAP(() => {
    let tl = gsap.timeline({ delay: 0.5 });
    tl.addLabel("start");

    // Logo Animation
    tl.fromTo(".logo-icon",
      { x: 25, rotation: 200, opacity: 0 },
      { x: 0, rotation: 0, opacity: 1, duration: 1.5, ease: "power2.in" },
      "start"
    )
    .addLabel("logo-finished");

    // Letter Animation
    tl.fromTo(".letter",
      { y: 10, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: {
          each: 0.1,
          from: "center",
          grid: "auto",
          ease: "power2.inOut"
        }
      },
      "logo-finished"
    )

    // Items Animation
    tl.fromTo(".nav-item, .nav-btn",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.in" },
      "start"
    );
  }, { scope: container });

  return (
    <div className="navbar-container">
      <nav className="navbar" ref={container}>
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img className="logo-icon" src={LogoIcon} alt="logo" />
            <span className="letter letter-2">J</span>
            <span className="letter letter-1">U</span>
            <span className="letter letter-0">S</span>
            <span className="letter letter-0">P</span>
            <span className="letter letter-1">A</span>
            <span className="letter letter-2">Y</span>
          </a>
        </div>

        {/* Nav Items */}
        <div className="nav-items">
          <ul className="nav-list">
            {MAIN_MENU_OPTIONS.map((item, index) => (
              <li className="nav-item" key={index}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>

          <ul className="nav-btns">
            <li className="nav-btn icon-btn">
              <img src={GlobeIcon} alt="globe" />
              <div className="global-menu">
                <p className="menu-title">REGION</p>
                <ul>
                  {GLOBAL_MENU_OPTIONS.map((item, index) => (
                    <li key={index}>
                      <a href={item.url} target="_blank" rel="noreferrer">
                        <img src={item.icon} alt="icon" />
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className="nav-btn cta-btn">
              <a href="https://juspay.io/contact">
                Contact us
                <img src={ChevronIcon} alt="icon" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar