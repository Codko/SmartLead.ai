import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Plainbtn = ({ iswhite, text, w }) => {
  return (
    <div className="w-full sm:w-auto flex justify-center">
      <button
        style={{
          fontFamily: "medium",
          width: w ? `${w}px` : "100%",
        }}
        className={`flex items-center justify-center gap-2
        w-full sm:w-auto min-w-[180px] sm:min-w-[220px]
        h-[55px] sm:h-[60px] rounded-[50px]
        ${
          iswhite
            ? "bg-white text-[#6E58F1] border border-[#6E58F1]"
            : "bg-[#6E58F1] text-white border-2 border-[#e4e4e4]"
        }
        cursor-pointer text-base sm:text-lg md:text-xl
        transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95`}
      >
        {text}
        <GoArrowUpRight className="text-lg sm:text-xl" />
      </button>
    </div>
  );
};

export default Plainbtn;
