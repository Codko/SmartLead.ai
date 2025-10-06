import React from "react";
import Plainbtn from "../Buttons/Plainbtn";

const Header = () => {
  return (
    <div className="flex w-[1620px]  items-center justify-around gap-[170px] mt-12 m-auto">
      <div>
        <img src="/images/Vector.png" alt="" />
      </div>
      <div>
        <ul
          style={{ fontFamily: "regular" }}
          className="flex gap-10 items-center text-[#898989] text-2xl cursor-pointer"
        >
          <li className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-[#6E58F1]">
            Product
          </li>

          <li className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-[#6E58F1]">
            Features
          </li>
          <li className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-[#6E58F1]">
            Solutions
          </li>
        </ul>
      </div>
      <div>
        <Plainbtn text={'Get Started Now'}/>
      </div>
    </div>
  );
};

export default Header;
