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
      {/* Top Section */}
      <div className="flex flex-col justify-center items-center gap-10 px-4 sm:px-8 lg:px-0">
        <div data-aos="fade-down" className="w-full lg:w-8xl pt-6">
          <h1
            style={{ fontFamily: "bold" }}
            className="text-2xl text-center sm:text-3xl md:text-[36px] lg:text-[42px] lg:leading-[1.3]"
          >
            Trusted by <span className="text-[#6E58F1]">100,000+</span>{" "}
            Businesses, <br /> from Best agencies to Fortune{" "}
            <span className="text-[#6E58F1]">500 </span>
            Companies
          </h1>
        </div>

        {/* Logos */}
        <div
          data-aos="fade-down"
          className="w-full max-w-[900px] lg:w-[1000px] flex flex-col gap-8 sm:gap-10 pt-6 sm:pt-10"
        >
          <marquee behavior="scroll" direction="left">
            <div className="flex justify-center gap-6 sm:gap-8">
              <img src="/images/image 1.svg" alt="" className="opacity-20" />
              <img src="/images/image 2.svg" alt="" className="opacity-20" />
              <img src="/images/image 3.svg" alt="" className="opacity-20" />
              <img src="/images/image 4.svg" alt="" className="opacity-20" />
            </div>
          </marquee>
          <marquee behavior="scroll" direction="right">
            <div className="flex justify-center gap-6 sm:gap-8">
              <img src="/images/image 5.svg" alt="" className="opacity-20" />
              <img src="/images/image 6.svg" alt="" className="opacity-20" />
              <img src="/images/image 7.svg" alt="" className="opacity-20" />
              <img src="/images/image 8.svg" alt="" className="opacity-20" />
              <img src="/images/image 9.svg" alt="" className="opacity-20" />
            </div>
          </marquee>
        </div>
      </div>

      <div className="flex flex-col md:flex md:flex-col md:items-center md:justify-center gap-6 lg:pt-20 lg:pl-20 lg:flex lg:items-center lg:flex-row lg:justify-between">
        <div className="sm:w-[300px] md:w-[400px] pt-10 lg:w-[725px] p-[26px]">
          <h1
            data-aos="fade-right"
            style={{ fontFamily: "bold" }}
            className="text-[30px] sm:text-center lg:text-[65px] lg:text-left leading-tight"
          >
            From Prompt to Revenue, In Minutes
          </h1>
        </div>

        <div className="lg:pr-13 lg:w-[850px]">
          <h1
            data-aos="fade-left"
            style={{ fontFamily: "regular" }}
            className="lg:text-[18px] text-[#848884] lg:pl-0 text-center lg:text-left"
          >
            Let SmartAgents do the hard work, so your team can focus on the deal
            work
          </h1>

          <div className="pt-10 flex justify-center lg:justify-start">
            <Primarybtn text={"Start a 14-day free trial"} w={"300"} />
          </div>
        </div>
      </div>

      <div className="pt-20 px-4 sm:px-8 lg:pl-20 lg:pt-20">
        <RevenueCards />
      </div>
    </div>
  );
};

export default Companies_logo;
