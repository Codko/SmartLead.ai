import React from "react";
import { GoPaperclip } from "react-icons/go";
import Plainbtn from "../Buttons/Plainbtn";
const Simple_card = () => {
  return (
    <div className="w-[1655px] m-auto mt-32 flex gap-20">
      <div className="bg-gradient-to-tl from-[#6E58F11A] to-[#FAF9F6] w-[800px] rounded-[50px] flex flex-col items-center justify-center gap-8">
      </div>
      <div className="w-[663px] flex flex-col gap-10">
        <h1
          style={{ fontFamily: "bold" }}
          className="text-[56px] text-[#0a0a0a]"
        >
          Pick Ready-to-use Agents. Close Deals Faster
        </h1>
        <p
          style={{ fontFamily: "regular" }}
          className="text-[20px] text-[#898989]"
        >
          Save time with pre-build workflows. Pick a template, tweak it and let
          AI run the show in minutes.
        </p>
        <Plainbtn text={"Start building an Agent"} w={"354"} />
      </div>
    </div>
  );
};

export default Simple_card;
