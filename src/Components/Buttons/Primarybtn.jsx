import React from "react";
import { GoArrowRight } from "react-icons/go";

const Primarybtn = ({ text, w, bg }) => {
  return (
    <button
      style={{
        fontFamily: "regular",
        backgroundColor: bg || "#6E58F1",
        color: bg ? "#6E58F1" : "#fff",
        width: w ? `${w}px` : undefined,
      }}
      className={`w-26 h-12 flex items-center justify-center gap-2 rounded-2xl 
       text-[10px] lg:text-lg  md:w-24 md:h-10 md:text-xs outline-none ${
         bg ? `border border-[${bg}]` : "border-none"
       } lg:text-lg ${
        w ? `lg:w-[${w}px]` : "lg:w-40"
      } transition-all transform duration-200 ease-in-out hover:scale-105`}
      className={`h-12 lg:w-40 flex items-center justify-center gap-2 rounded-2xl 
        text-[10px] md:w-24 md:h-10 md:text-xs lg:text-lg 
        outline-none transition-all transform duration-200 ease-in-out hover:scale-105
        ${bg ? "border" : "border-none"}
      `}
    >
      {text}
      <GoArrowRight className="hidden lg:block" />
    </button>
  );
};

export default Primarybtn;
