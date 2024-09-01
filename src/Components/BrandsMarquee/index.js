import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// constants
import { BRANDS_LIST } from "../../Common/Constants";
// style imports
import "./styles.scss";

const BrandsMarquee = () => {
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  useGSAP(() => {
    let tl = gsap.timeline({ delay: 0, repeat: -1, ease: "sine.inOut" });

    tl.to(".brands-list", {
      x: "-100%",
      duration: 35
    });
  }, { scope: container });

  return (
    <div className="brands-marquee" ref={container}>
      <div className="brands faded faded-left faded-right" ref={container}>
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