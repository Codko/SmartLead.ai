import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Plainbtn from "../Buttons/Plainbtn";

const Header = () => {
  const logoref = useRef(null);
  const navref = useRef(null);
  const btnref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    const childs = gsap.utils.selector(navref);

    tl.from(logoref.current, {
      top: -100,
      duration: 0.4,
    });
    tl.from(childs("li"), {
      top: -100,
      duration: 0.3,
      stagger: 0.2,
    });
    tl.from(btnref.current, {
      top: -100,
      duration: 0.4,
    });
  }, []);

  return (
    <div className="w-full pt-6">
      {" "}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1620px] mx-auto px-4 md:px-10 lg:px-20 gap-6">
        {" "}
        <div
          ref={logoref}
          className="flex justify-center w-full md:w-auto relative"
        >
          {" "}
          <img
            src="/images/Vector.png"
            alt="Logo"
            className="w-32 md:w-56"
          />{" "}
        </div>{" "}
        <ul
          ref={navref}
          style={{ fontFamily: "regular" }}
          className="hidden md:flex gap-10 items-center text-[#898989] text-2xl cursor-pointer"
        >
          {" "}
          {["Product", "Features", "Solutions"].map((item) => (
            <li
              key={item}
              className="relative transition-all duration-300 ease-out after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#6E58F1] after:transition-all after:duration-300 hover:after:w-full hover:after:-translate-x-1/2 after:transform"
            >
              {" "}
              {item}{" "}
            </li>
          ))}{" "}
        </ul>{" "}
        <div ref={btnref} className="hidden md:block relative">
          {" "}
          <Plainbtn text={"Get Started Now"} />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Header;
