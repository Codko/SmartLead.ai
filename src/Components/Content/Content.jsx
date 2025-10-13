import React, { useRef } from "react";
import { SlEnergy } from "react-icons/sl";
import Primarybtn from "../Buttons/Primarybtn";

import "animate.css";
const Content = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 z-10">
      <div className="animate__animated animate__fadeInDown w-32 h-12 lg:w-40 lg:h-14 rounded-2xl bg-[#6E58F11A] text-[#6E58F1] flex items-center justify-center gap-2 ">
        <SlEnergy />
        <h1 style={{ fontFamily: "medium" }}>{text}</h1>
      </div>
      <div className="w-full lg:w-[750px] pt-6 ">
        <h1
          style={{ fontFamily: "bold" }}
          className="animate__animated animate__fadeInUp text-3xl text-center lg:text-6xl lg:text-center lg:leading-18 "
        >
          Your First AI Powered GTM Workflow
        </h1>
        <p
          style={{ fontFamily: "regular" }}
          className="animate__animated animate__fadeInDown text-center text-sm lg:text-center lg:text-lg text-[#848884] pt-4"
        >
          SmartAgents automate your entire revenue workflow, from lead research
          and outreach to follow-ups, analytics, and closing deals.
        </p>
      </div>
      <div className="animate__animated animate__fadeInUp w-[300px] lg:w-[850px] lg:h-18 rounded-2xl bg-white flex items-center justify-between">
        <input
          placeholder="Type Here To Build Agent"
          type="text"
          className="w-full border-none outline-none text-[#B2BEB5] p-5 lg:text-lg"
        />
        <div className="lg:pr-4">
          <Primarybtn text={"Build Agent"} />
        </div>
      </div>
    </div>
  );
};

export default Content;
