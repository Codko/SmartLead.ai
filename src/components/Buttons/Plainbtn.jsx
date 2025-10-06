import React from "react";
import { GoArrowUpRight } from "react-icons/go";
const Plainbtn = ({ iswhite, text, w }) => {
  return (
    <div>
      <button
        style={{ fontFamily: "medium", width: `${w}px` }}
        className={`flex items-center justify-center gap-2
        w-[228px] h-[60px] rounded-[50px] ${
          iswhite
            ? "bg-[#6E58F1] text-white border-2 border-[#e4e4e4]"
            : "bg-[#6E58F1] text-white border-4 border-[#e4e4e4]"
        }  cursor-pointer  text-xl  transition-all duration-200 ease-in-out transform hover:scale-110`}
      >
        {text} <GoArrowUpRight />
      </button>
    </div>
  );
};

export default Plainbtn;
