import React, { useRef } from "react";
// constants
import { BRANDS_LIST } from "../../Common/Constants";
// style imports
import "./styles.scss";
import gsap, { Linear } from "gsap";
import { useGSAP } from "@gsap/react";
import { TimelineMax } from "gsap/gsap-core";

const BrandsMarquee = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  useGSAP(() => {
    let tl = gsap.timeline({ delay: 0, repeat: -1, ease: "none" });

    tl.to(".brands-list", {
      x: "-100%",
      duration: 60
    });
  }, { scope: container });

  return (
    <div className="brands-marquee" ref={container}>
      <div className="brands" ref={container}>
        <div className="brands-list">
          {BRANDS_LIST.map((brand, index) => (
            <div className="brand" key={index}>
              <img src={brand.icon} alt={brand.name} />
            </div>
          ))}
        </div>
        <div className="brands-list">
          {BRANDS_LIST.map((brand, index) => (
            <div className="brand" key={index}>
              <img src={brand.icon} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandsMarquee