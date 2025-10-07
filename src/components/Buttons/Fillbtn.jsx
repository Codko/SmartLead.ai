import React, { useContext } from "react";
import { SlEnergy } from "react-icons/sl";
import { InputContext } from "../../Context/Inputcontext";

const Fillbtn = ({ value, text, w }) => {
  const { setText } = useContext(InputContext);

  return (
    <div className="w-full sm:w-auto flex justify-center">
      <button
        onClick={value ? () => setText(value) : undefined}
        style={{
          fontFamily: "medium",
          width: w ? `${w}px` : "100%",
        }}
        className={`${
          value
            ? "hover:border hover:border-[#6E58F1] active:scale-95 cursor-pointer"
            : "btn-fill hover:text-white"
        } 
        w-full sm:w-auto min-w-[180px] sm:min-w-[200px] 
        h-[55px] sm:h-[60px] bg-[#6E58F11A] 
        rounded-[50px] text-[#6E58F1] text-base sm:text-lg md:text-xl 
        flex items-center justify-center gap-2 
        transition-transform duration-200 ease-in-out`}
      >
        <SlEnergy className="text-lg sm:text-xl" />
        {text}
      </button>
    </div>
  );
};

export default Fillbtn;
