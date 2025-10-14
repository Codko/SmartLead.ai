import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "animate.css";
import Primarybtn from "../Buttons/Primarybtn";

gsap.registerPlugin(ScrollTrigger);

const Navs = () => {
  const navLeftRef = useRef(null);
  const navRightRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: navLeftRef.current,
        start: "top+=100 top",
        end: "top+=400 top",
        scrub: true,
      },
    });
    tl.to(navLeftRef.current, {
      xPercent: 75,
      scale: 0.95,
      borderTopRightRadius: "0px",
      borderBottomRightRadius: "0px",
      ease: "power2.inOut",
    }).to(
      navRightRef.current,
      {
        xPercent: -172,
        scale: 0.95,
        borderTopLeftRadius: "0px",
        borderBottomLeftRadius: "0px",
        ease: "power2.inOut",
      },
      "<"
    );

    tl.to(
      [navLeftRef.current, navRightRef.current],
      {
        backgroundColor: "#ffffff",
        ease: "power2.inOut",
      },
      "<"
    );

    tl.to(
      navRightRef.current,
      {
        x: "-=20",
        ease: "power1.inOut",
      },
      "-=0.2"
    );

    return () => {
      tl.scrollTrigger && tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="flex justify-center md:justify-between items-center w-full">
      <div
        ref={navLeftRef}
        className="
  rounded-2xl 
  flex items-center justify-center
  w-[200px] h-12 
  sm:w-[400px] sm:h-16 sm:justify-around sm:bg-white
  md:w-[450px] md:h-16 md:justify-around md:bg-white
  lg:w-[580px] lg:h-16 lg:justify-around lg:bg-white
  lg:fixed lg:top-10 lg:left-10 lg:translate-x-0
  z-50
  transition-all duration-300
"
      >
        <div className="flex justify-center">
          <img
            src="/images/Vector.svg"
            alt="Logo"
            className="object-contain sm:w-28 md:w-32 lg:w-40"
          />
        </div>
        <div className="hidden sm:block">
          <ul
            style={{ fontFamily: "regular" }}
            className="flex items-center gap-6 text-[#848884] sm:text-sm md:text-sm lg:text-lg"
          >
            <li className="transition-all duration-200 hover:text-[#6E58F1]">
              Product
            </li>
            <li className="transition-all duration-200 hover:text-[#6E58F1]">
              Features
            </li>
            <li className="transition-all duration-200 hover:text-[#6E58F1]">
              Solutions
            </li>
          </ul>
        </div>
      </div>

      <div
        ref={navRightRef}
        className="
          hidden
          rounded-2xl
          md:flex md:items-center md:justify-center md:gap-4          
          md:w-[180px] sm:h-16 md:h-16
          lg:h-16 lg:w-[250px]
          sm:bg-white lg:bg-white
          fixed right-10 top-10 z-50
          transition-all duration-300
        "
      >
        <h1
          style={{ fontFamily: "regular" }}
          className="text-[#848884] text-sm lg:text-base transition-all duration-200 hover:text-[#6E58F1]"
        >
          Login
        </h1>
        <Primarybtn text={"Book A Demo"} />
      </div>
    </div>
  );
};

export default Navs;
