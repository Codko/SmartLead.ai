import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navs from "../Components/Header/Navs";
import CTA from "../Components/Header/CTA";
import Content from "../Components/Content/Content";

gsap.registerPlugin(ScrollTrigger);
const Hero = ({ footer }) => {
  const svgRef = useRef(null);

  useGSAP(() => {
    gsap.from(svgRef.current, {
      opacity: 0,
      duration: 1.2,
      ease: "elastic.inOut",
    });
  }, []);
  return (
    <div className="relative w-full min-h-screen">
      <svg
        ref={svgRef}
        className="absolute inset-0 m-auto w-[80%] h-auto"
        viewBox="0 0 1348 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M517.795 0V396.965H1.45728V865.978M565.826 0V466.187H56.5521V1009.37M113.766 910.477V528.345H618.802V0M671.778 0V700.693M726.873 0V528.345H1243.92V910.477M1299.01 1009.37V466.187H777.023V0M825.761 0V396.965H1347.04V865.978M726.873 579.202H1188.82V1080M618.802 579.202H164.623V1080"
          stroke="#6E58F1"
          strokeOpacity="0.1"
          strokeWidth="1.41269"
        />
      </svg>

      <div className="">
        <Navs scrollTo={footer} />
      </div>

      <div className="mt-30 lg:mt-70">
        <Content text={"Smart Lead"} />
      </div>
    </div>
  );
};

export default Hero;
