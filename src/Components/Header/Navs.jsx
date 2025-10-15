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

  useGSAP(() => {
    if (window.innerWidth < 1550) return;

    const leftEl = navLeftRef.current;
    const rightEl = navRightRef.current;

    const screenWidth = window.innerWidth;

    let leftMove = 0;
    let rightMove = 0;

    if (screenWidth >= 1550 && screenWidth <= 1570) {
      leftMove = 240;
      rightMove = 315;
    } else if (screenWidth > 1570 && screenWidth <= 1600) {
      leftMove = 270;
      rightMove = 320;
    } else if (screenWidth > 1600 && screenWidth <= 1630) {
      leftMove = 280;
      rightMove = 330;
    } else if (screenWidth > 1630 && screenWidth <= 1660) {
      leftMove = 290;
      rightMove = 340;
    } else if (screenWidth > 1660 && screenWidth <= 1690) {
      leftMove = 310;
      rightMove = 360;
    } else if (screenWidth > 1690 && screenWidth <= 1720) {
      leftMove = 325;
      rightMove = 375;
    } else if (screenWidth > 1720 && screenWidth <= 1750) {
      leftMove = 345;
      rightMove = 395;
    } else if (screenWidth > 1750 && screenWidth <= 1780) {
      leftMove = 355;
      rightMove = 405;
    } else if (screenWidth > 1780 && screenWidth <= 1820) {
      leftMove = 375;
      rightMove = 425;
    } else if (screenWidth > 1820 && screenWidth <= 1850) {
      leftMove = 395;
      rightMove = 435;
    } else if (screenWidth > 1850 && screenWidth <= 1880) {
      leftMove = 395;
      rightMove = 445;
    } else if (screenWidth > 1880 && screenWidth <= 1910) {
      leftMove = 405;
      rightMove = 455;
    } else if (screenWidth > 1910 && screenWidth <= 1940) {
      leftMove = 415;
      rightMove = 465;
    } else if (screenWidth > 1940 && screenWidth <= 1970) {
      leftMove = 425;
      rightMove = 475;
    } else if (screenWidth > 1970 && screenWidth <= 2000) {
      leftMove = 435;
      rightMove = 485;
    } else if (screenWidth > 2000) {
      leftMove = 445;
      rightMove = 495;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: leftEl,
        start: "top+=100 top",
        end: "top+=400 top",
        scrub: true,
      },
    });

    tl.to(navLeftRef.current, {
      x: `+=${leftMove}`,
      scale: 0.95,
      borderTopRightRadius: "0px",
      borderBottomRightRadius: "0px",
      top: 0,
      ease: "power2.inOut",
    }).to(
      navRightRef.current,
      {
        x: "-=520",
        scale: 0.95,
        borderTopLeftRadius: "0px",
        borderBottomLeftRadius: "0px",
        top: 0,
        ease: "power2.inOut",
      },
      "<"
    );

    tl.to(
      [leftEl, rightEl],
      {
        ease: "power2.inOut",
      },
      "<"
    );
    tl.to(rightEl, {
      x: "-=2",
      ease: "power1.inOut",
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="flex justify-center 2xl:justify-between items-center w-full">
      <div
        ref={navLeftRef}
        className="
  rounded-2xl 
  flex items-center justify-center
  w-[200px] h-12 
  sm:w-[400px] sm:h-16 sm:justify-around sm:bg-white
  md:w-[450px] md:h-16 md:justify-around md:bg-white
  lg:w-[580px] lg:h-16 lg:justify-around lg:bg-white
  2xl:fixed 2xl:top-16 2xl:left-26 2xl:translate-x-0
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
          2xl:flex 2xl:items-center 2xl:justify-center 2xl:gap-4          
          2xl:h-16 2xl:w-[250px]
          sm:bg-white lg:bg-white
          fixed right-26 top-16 z-50
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
