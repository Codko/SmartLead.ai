import React from "react";
import { GoPaperclip } from "react-icons/go";
const Integration_cards = () => {
  return (
    <div className="w-[1655px] m-auto mt-32 flex gap-20">
      <div className="w-[780px]">
        <h1
          style={{ fontFamily: "bold" }}
          className="text-[56px] text-[#0a0a0a]"
        >
          Integrates With Your{" "}
          <img src="/images/Line 7.svg" alt="" className="inline pl-4" />
        </h1>

        <h1
          style={{ fontFamily: "bold" }}
          className="text-[56px] text-[#6E58F1] flex items-center gap-2"
        >
          <GoPaperclip />
          Favorite Tools
        </h1>
      </div>
      <div className="border-2 border-dashed border-[#6E58F1] w-[800px] flex flex-col items-center justify-center gap-8">
        <div className="flex gap-5">
          <img src="/images/slack 1.svg" alt="" className="w-[50px] h-[50px]" />
          <img
            src="/images/image-Photoroom (2) 1.svg"
            className="w-[212px] h-[50px]"
            alt=""
          />
          <img
            src="/images/salesforce 1.svg"
            alt=""
            className="w-[70px] h-[50px]"
          />
          <img
            src="/images/image-Photoroom (4) 1.svg"
            alt=""
            className="w-[220px] h-[50px]"
          />
        </div>
        <div className="flex gap-5">
          <img
            src="/images/sheets 1.svg"
            alt=""
            className="w-[50px] h-[50px]"
          />
          <img
            src="/images/image-Photoroom (3) 1.svg"
            alt=""
            className="w-[198px] h-[50px]"
          />
          <img
            src="/images/image 13.svg"
            alt=""
            className="w-[172px] h-[50px]"
          />
          <img
            src="/images/image 14.svg"
            alt=""
            className="w-[145px] h-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Integration_cards;
