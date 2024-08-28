import React from "react";
// constants
import { GLOBAL_MENU_OPTIONS } from "../../Common/Constants";
// style imports
import "./styles.scss";
// icon imports
import LogoIcon from "../../Assets/logo.svg";
import GlobeIcon from "../../Assets/globe-icon.svg";
import ChevronIcon from "../../Assets/chevron-right.svg";

const Navbar = () => {
  return (
    <nav class="navbar">
      {/* Logo */}
      <div class="logo">
        <a href="#">
          <img src={LogoIcon} alt="logo" />
          <span className="letter">J</span>
          <span className="letter">U</span>
          <span className="letter">S</span>
          <span className="letter">P</span>
          <span className="letter">A</span>
          <span className="letter">Y</span>
        </a>
      </div>

      {/* Nav Items */}
      <div class="nav-items">
        <ul class="nav-list">
          <li class="nav-item"><a href="">About us</a></li>
          <li class="nav-item"><a href="">Docs</a></li>
          <li class="nav-item"><a href="">Integrations</a></li>
        </ul>

        <ul class="nav-btns">
          <li class="icon-btn">
            <img src={GlobeIcon} alt="globe" />
            <div className="global-menu">
              <p className="menu-title">REGION</p>
              <ul>
                {GLOBAL_MENU_OPTIONS.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} target="_blank">
                      <img src={item.icon} alt="icon" />
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li class="cta-btn">
            <a href="">
              Contact us
              <img src={ChevronIcon} alt="icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar