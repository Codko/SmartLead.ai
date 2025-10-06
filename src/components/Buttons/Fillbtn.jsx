import React from "react";
import { SlEnergy } from "react-icons/sl";
import { useContext } from "react";
import { InputContext } from "../../Context/Inputcontext";
const Fillbtn = ({ value, text, w }) => {
  const { setText } = useContext(InputContext);
  return (
    <div>
      <button
        onClick={() => setText(value)}
        style={{ fontFamily: "medium", width: `${w}px` }}
        className={`btn-fill cursor-pointer overflow-hidden z-0 w-[240px]
         h-[60px] bg-[#6E58F11A] rounded-[50px] text-[#6E58F1] text-xl hover:text-white flex items-center justify-center gap-2`}
      >
        <SlEnergy className="text-2xl" />
        {text}
      </button>
    </div>
  );
};

export default Fillbtn;
