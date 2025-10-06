import React from "react";
import { SlEnergy } from "react-icons/sl";
import { useContext } from "react";
import { InputContext } from "../../Context/Inputcontext";
const Fillbtn = ({ value, text, w }) => {
  const { setText } = useContext(InputContext);
  return (
    <div>
      <button
        onClick={value && (() => setText(value))}
        style={{ fontFamily: "medium", width: `${w}px` }}
        className={`${
          value
            ? `hover:border hover:border-[#6E58F1] active:scale-95 cursor-pointer`
            : "btn-fill hover:text-white"
        }  overflow-hidden z-0 w-[240px]
         h-[60px] bg-[#6E58F11A] rounded-[50px] text-[#6E58F1] text-xl  flex items-center justify-center gap-2 transition transform duration-200 ease-in-out `}
      >
        <SlEnergy className="text-2xl" />
        {text}
      </button>
    </div>
  );
};

export default Fillbtn;
