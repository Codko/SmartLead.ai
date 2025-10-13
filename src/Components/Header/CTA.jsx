import React, { useRef } from "react";
import Primarybtn from "../Buttons/Primarybtn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "animate.css";
gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const navRef = useRef(null);

  useGSAP(() => {
    const nav = navRef.current;

    gsap.to(nav, {
      marginTop: 0,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: nav,
        start: "top top+=100",
        end: "+=100",
        scrub: true,
      },
    });
  }, []);

  return (
    <div>
      <div
        ref={navRef}
        className="
          hidden
          animate__animated animate__fadeInRight
          rounded-2xl mt-10 
          sm:hidden
          md:flex md:items-center md:justify-center md:gap-4          
          md:w-[180px] md:h-14 md:mt-20 
          lg:h-14 lg:w-[250px]
          sm:bg-white lg:bg-white
          lg:fixed lg:top-0 lg:right-10 lg:z-50 
          md:fixed md:top-0 md:right-10 md:z-50
        "
      >
        <div>
          <h1
            style={{ fontFamily: "regular" }}
            className="text-[#848884] text-sm lg:text-base"
          >
            Login
          </h1>
        </div>
        <div>
          <Primarybtn text={"Book A Demo"} />
        </div>
      </div>
    </div>
  );
};

export default CTA;
