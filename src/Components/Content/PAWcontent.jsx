import React from "react";
import Primarybtn from "../Buttons/Primarybtn";

const PAWcontent = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 lg:gap-10">
      <h1
        style={{ fontFamily: "bold" }}
        className="text-center text-[13px]  lg:text-5xl text-[#242323] pb-8 lg:w-[800px]"
      >
        Powerful Automated Workflows that Drive Sales.
      </h1>
      <p
        style={{ fontFamily: "regular" }}
        className="text-[13px] lg:text-xl text-[#848884] text-center lg:w-[850px]"
      >
        Try Smartlead's AI-led outbound system today.
      </p>
      <div className="flex gap-6 items-center">
        <Primarybtn w={"300"} text={"Start Your Free Trial"} />
        <Primarybtn w={"300"} text={"View Pricing Plans"} bg={"#fff"} />
      </div>
    </div>
  );
};

export default PAWcontent;
