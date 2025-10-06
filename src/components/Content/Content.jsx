import React from "react";
import Fillbtn from "../Buttons/Fillbtn";
import Plainbtn from "../Buttons/Plainbtn";
import { useContext } from "react";
import { InputContext } from "../../Context/Inputcontext";
const Content = () => {
  const { text } = useContext(InputContext);
  return (
    <div className="w-[1073px] h-[670px]  mt-36 m-auto flex flex-col items-center">
      <div className="flex flex-col items-center">
        <Fillbtn text={'Smart Agent'}/>
      </div>
      <div className="pt-12 w-3xl">
        <h1
          style={{ fontFamily: "bold" }}
          className="text-6xl text-center leading-20 text-[#0a0a0a]"
        >
          Your First AI-Powered GTM Workforce{" "}
        </h1>
      </div>
      <p
        style={{ fontFamily: "regular" }}
        className="text-[#898989] text-xl text-center"
      >
        SmartAgents automate your entire revenue workflow, from lead research
        and outreach to follow-ups, analytics, and closing deals.
      </p>
      <div
        className={`w-full h-[95px] mt-10 shadow-[#FAF9F6]  shadow-2xl ${
          text ? "border border-[#6E58F1]" : "border border-[#FAF9F6]"
        } rounded-[50px] flex items-center `}
      >
        <input
          style={{ fontFamily: "regular" }}
          className={`w-full h-full pl-8 text-lg ${
            text ? "text-[#777]" : "text-[#c7c7c7]"
          } border-none outline-none`}
          placeholder={text ? text : "Type Here"}
          type="text"
        />
        <div className="pr-4">
          <Plainbtn text={'Create An Agent'}/>
        </div>
      </div>
      <div className="flex  w-full justify-center gap-6 pt-10">
        <Fillbtn
          text={"Lead gen"}
          w={"200"}
          value={"find 10 software engineers in San Fransisco"}
        />
        <Fillbtn
          text={"Personal Website"}
          w={"290"}
          value={"Reach me online and then create a personal website"}
        />
        <Fillbtn
          text={"Customer Support"}
          w={"250"}
          value={"I want an agent that will monitor my support inbox"}
        />
      </div>
      <div className="flex gap-6 pt-3">
        <Fillbtn
          text={"Meeting Recorder"}
          w={"300"}
          value={
            "Build me a meeting notetaker agent that automatically joins my Google Calendar "
          }
        />
        <Fillbtn
          text={"LinkedIn outreach"}
          w={"300"}
          value={
            "Reach out to [insert name] who works at [insert company] on LinkedIn"
          }
        />
      </div>
    </div>
  );
};

export default Content;
