import React, { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Primarybtn from "../Buttons/Primarybtn";
import RevenueCards from "../Cards/RevenueCards";

const Companies_logo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-10">
        <div data-aos="fade-down" className="w-full lg:w-8xl  pt-6">
          <h1
            style={{ fontFamily: "bold" }}
            className=" text-2xl text-center lg:text-[42px] lg:text-center lg:leading-18 "
          >
            Trusted by <span className="text-[#6E58F1]">100,000+</span>{" "}
            Businesses, <br /> from Best agencies to Fortune{" "}
            <span className="text-[#6E58F1]">500 </span>
            Companies
          </h1>
        </div>
        <div
          data-aos="fade-down"
          className="w-full lg:w-[1000px] flex flex-col gap-10 pt-10"
        >
          <marquee behavior="scroll" direction="left">
            <div className="flex justify-center gap-6">
              <img src="/images/image 1.svg" alt="" />
              <img src="/images/image 2.svg" alt="" />
              <img src="/images/image 3.svg" alt="" />
              <img src="/images/image 4.svg" alt="" />
            </div>
          </marquee>
          <marquee behavior="scroll" direction="right">
            <div className="flex justify-center gap-6">
              <img src="/images/image 5.svg" alt="" />
              <img src="/images/image 6.svg" alt="" />
              <img src="/images/image 7.svg" alt="" />
              <img src="/images/image 8.svg" alt="" />
              <img src="/images/image 9.svg" alt="" />
            </div>
          </marquee>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:pt-20 lg:pl-20 lg:flex lg:flex-row lg:items-center lg:justify-between">
        <div className="w-[300px] pt-10 lg:w-[750px]">
          <h1
            data-aos="fade-right"
            style={{ fontFamily: "bold" }}
            className="text-xl pl-10 lg:text-7xl"
          >
            From Prompt to Revenue, In Minutes
          </h1>
        </div>
        <div className="lg:pr-10">
          <h1
            data-aos="fade-left"
            style={{ fontFamily: "regular" }}
            className="pl-10 lg:text-xl text-[#848884] lg:pl-0"
          >
            Let SmartAgents do the hard work, so your team can focus on the deal
            work
          </h1>
          <div className="pt-10 pl-10 lg:pl-0">
            <Primarybtn text={"Start a 14-day free trial"} w={"300"} />
          </div>
        </div>
      </div>
      <div className="pt-20 lg:pl-20 lg:pt-20">
        <RevenueCards />
      </div>
    </div>
  );
};

export default Companies_logo;
