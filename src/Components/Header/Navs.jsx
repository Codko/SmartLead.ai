import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "animate.css";
gsap.registerPlugin(ScrollTrigger);

const Navs = ({ scrollTo }) => {
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
    <div
      ref={navRef}
      className="
      animate__animated animate__fadeInLeft
        rounded-2xl mt-10
        flex items-center justify-center
        w-[200px] h-12 z-10
        mx-auto             
        sm:w-[400px] sm:h-16 sm:justify-around sm:bg-white sm:mx-0
        md:w-[450px] md:h-16 md:ml-10 md:mt-20 md:justify-around md:bg-white
        lg:w-[580px] lg:h-16 lg:ml-10 lg:justify-around lg:bg-white
        lg:fixed lg:left-10 lg:z-50 md:fixed md:left-10 md:z-50 
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
          <li className="transition-all transform duration-200 ease-in-out hover:text-[#6E58F1]">
            Product
          </li>
          <li className="transition-all transform duration-200 ease-in-out hover:text-[#6E58F1]">
            Features
          </li>
          <li className="transition-all transform duration-200 ease-in-out hover:text-[#6E58F1]">
            Solutions
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navs;
  