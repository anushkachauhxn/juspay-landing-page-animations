import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// constants
import { GLOBAL_MENU_OPTIONS, MAIN_MENU_OPTIONS } from "../../Common/Constants";
// style imports
import "./styles.scss";
// icon imports
import LogoIcon from "../../Assets/logo-full.svg";
import GlobeIcon from "../../Assets/globe-icon.svg";
import MenuIcon from "../../Assets/icons/hamburger-icon.svg";
import CloseIcon from "../../Assets/icons/close-icon.svg";

const MobileNavbar = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  const [openGlobalMenu, setOpenGlobalMenu] = useState(false);
  const [openMainMenu, setOpenMainMenu] = useState(false);
  useGSAP(() => {
    let tl = gsap.timeline({ delay: 1 });
    tl.fromTo(".navbar",
      { display: "none" },
      { display: "flex", duration: 0.5, ease: "power2.in" }
    );
  }, { scope: container });

  return (
    <div className="mobile-navbar-container" ref={container}>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img className="logo-icon" src={LogoIcon} alt="logo" />
          </a>
        </div>

        {/* Nav Items */}
        <div className="nav-items">
          <div className="nav-item global-item">
            <button
              className="nav-btn global-btn"
              onClick={() => setOpenGlobalMenu(!openGlobalMenu)}
            >
              <img src={GlobeIcon} alt="globe" />
            </button>
            
            <div className={`global-menu ${!openGlobalMenu ? "hidden" : ""}`}>
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
          </div>

          <div className="nav-item">
            <button
              className="nav-btn menu-btn"
              onClick={() => setOpenMainMenu(!openMainMenu)}
            >
              {!openMainMenu
                ? <img src={MenuIcon} className="menu-icon" alt="globe" />
                : <img src={CloseIcon} className="close-icon" alt="globe" />
              }
            </button>
            <div className={`main-menu ${!openMainMenu ? "hidden" : ""}`}>
              <ul>
                {MAIN_MENU_OPTIONS.map((item, index) => (
                  <li key={index}>
                    <a href={item.url}>
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MobileNavbar