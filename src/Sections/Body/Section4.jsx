import React from "react";
import Ai_Agents from "../../Components/Content/Ai-Agents";
import AiAgentsCards from "../../Components/Cards/AiAgentsCards";
import Bar from "../../Components/Cards/Bar";

const Section4 = () => {
  return (
    <div className="bg-gradient-to-l from-[#e9edfa]  via-[#f2f8fc] to-[#e9edfa] overflow-hidden w-full min-h-screen">
      <div className="mt-40  lg:mt-40">
        <Ai_Agents />
      </div>
      <div className="lg:mt-20">
        <AiAgentsCards />
      </div>
      <div className="lg:mt-16">
        <Bar />
      </div>
    </div>
  );
};

export default Section4;
