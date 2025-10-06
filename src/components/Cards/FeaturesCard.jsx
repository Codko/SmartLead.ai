import React from "react";
import Plainbtn from "../Buttons/Plainbtn";
const FeaturesCard = () => {
  return (
    <div className="w-[1620px] mt-10 m-auto flex flex-col">
      <div className="w-[937px] h-[500px] rounded-[50px] bg-[#6E58F1] self-start">
        <div className="w-[703px] flex flex-col pt-10 gap-[40px] m-auto">
          <h1 style={{ fontFamily: "bold" }} className="text-[56px] text-white">
            From Prompt to Revenue, In Minutes
          </h1>
          <p
            style={{ fontFamily: "regular" }}
            className="text-[20px] text-white"
          >
            Let SmartAgents do the hard work, so your team can focus on the deal
            work
          </p>
          <Plainbtn
            iswhite={true}
            text={"Start a 14-day Free Trial"}
            w={"351"}
          />
        </div>
      </div>
      <div className="w-[663px] h-[500px] rounded-[50px] bg-gradient-to-tl from-[#6E58F11A] to-[#FAF9F6] self-end relative flex flex-col items-center justify-center gap-10 overflow-hidden">
        <h1
          style={{ fontFamily: "bold" }}
          className="text-[250px] text-[#c7c7c7] opacity-25 absolute -z-10 -bottom-25 -right-10"
        >
          01
        </h1>

        <div>
          <img src="/images/Frame 1073713882.png" alt="" />
        </div>
        <div>
          <h1
            style={{ fontFamily: "medium" }}
            className="text-[#898989] text-[26px] text-center"
          >
            Automate all your internal SOPs in a <br /> few clicks
          </h1>
        </div>
      </div>

      <div className="w-[937px] h-[500px] rounded-[50px] flex flex-col items-center justify-center gap-10 bg-gradient-to-tl from-[#6E58F11A] to-[#FAF9F6] self-start  overflow-hidden relative">
        <h1
          style={{ fontFamily: "bold" }}
          className="text-[250px] text-[#c7c7c7] opacity-25 absolute -z-10 -bottom-25 -right-10"
        >
          02
        </h1>
        <div>
          <img src="/images/11.png" alt="" />
        </div>
        <div>
          <h1
            style={{ fontFamily: "medium" }}
            className="text-[#898989] text-[26px]"
          >
            Increase your operational profit <br /> margins by 80%
          </h1>
        </div>
      </div>
      <div className="w-[663px] h-[500px] rounded-[50px] flex flex-col items-center justify-center gap-10 bg-gradient-to-tl from-[#6E58F11A] to-[#FAF9F6] self-end overflow-hidden relative">
        <h1
          style={{ fontFamily: "bold" }}
          className="text-[250px] text-[#c7c7c7] opacity-25 absolute -z-10 -bottom-25 -right-10"
        >
          03
        </h1>
        <div>
          <h1
            style={{ fontFamily: "medium" }}
            className="text-[#898989] text-[26px]"
          >
            Run 100s of agents for the cost of 1 <br /> SDR
          </h1>
        </div>
        <div>
          <img src="/images/Group 1000005739.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
