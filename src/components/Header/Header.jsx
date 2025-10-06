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
          <li className="relative transition-all duration-300 ease-out  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#6E58F1] after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:-translate-x-1/2 after:transform">
            Product
          </li>

          <li className="relative transition-all duration-300 ease-out  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#6E58F1] after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:-translate-x-1/2 after:transform">
            Features
          </li>
          <li className="relative transition-all duration-300 ease-out  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#6E58F1] after:transition-all after:duration-300 after:ease-out hover:after:w-full hover:after:-translate-x-1/2 after:transform">
            Solutions
          </li>
        </ul>
      </div>
      <div>
        <Plainbtn text={"Get Started Now"} />
      </div>
    </div>
  );
};

export default Header;
