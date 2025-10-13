import React from "react";
import HoverList from "../List/Hoverlist";

const RevenueCards = () => {
  return (
    <div className="lg:flex lg:flex-row lg:gap-6 flex flex-col items-center gap-6">
      {/* Card 1 */}
      <div
        data-aos="fade-up"
        className="
          w-[300px] h-[280px] 
          md:w-[420px] md:h-[360px] 
          lg:w-[560px] lg:h-[450px]  
          bg-white rounded-2xl 
          flex flex-col items-center justify-between 
          overflow-hidden
        "
      >
        <div className="transform transition-all ease-in-out lg:hover:-translate-y-1/2 duration-500">
          <img
            src="/images/Frame 39.svg"
            alt=""
            className="w-[240px] md:w-[320px] lg:w-auto"
          />
        </div>
        <div>
          <h1
            style={{ fontFamily: "regular" }}
            className="
              text-sm md:text-lg lg:text-2xl 
              text-[#242323] text-center
            "
          >
            Automate all your internal SOPs in a few clicks
          </h1>
        </div>
      </div>

      {/* Card 2 (80%) */}
      <div
        data-aos="fade-down"
        className="
          relative group 
          w-[300px] h-[280px] 
          md:w-[420px] md:h-[360px] 
          lg:w-[560px] lg:h-[450px] 
          bg-white rounded-2xl 
          flex flex-col items-center justify-around 
          overflow-hidden
        "
      >
        <div>
          <h1
            style={{ fontFamily: "regular" }}
            className="
              text-sm md:text-lg lg:text-2xl 
              text-[#7A7A7A] text-center
            "
          >
            Increase your operational profit margins by{" "}
            <span className="lg:hidden md:hidden sm:hidden">80</span>
          </h1>
          <h1 className="hidden text-sm md:text-lg lg:text-2xl text-[#7A7A7A] lg:block">
            80%
          </h1>
        </div>

        <div className="relative group flex items-center justify-center">
          <h1
            style={{ fontFamily: "bold" }}
            className="
              hidden lg:block 
              lg:absolute lg:top-16 lg:left-16 
              lg:text-9xl 
              lg:opacity-0 lg:group-hover:opacity-10 
              lg:text-black 
              lg:z-0 
              lg:transform 
              lg:translate-y-20 
              lg:transition-all 
              lg:duration-500 
              lg:ease-in-out 
              lg:group-hover:-translate-y-6
            "
          >
            80%
          </h1>

          <img
            src="/images/Frame 47.svg"
            alt=""
            className="relative z-10 w-[200px] md:w-[260px] lg:w-auto"
          />
        </div>
      </div>

      {/* Card 3 */}
      <div
        data-aos="fade-up"
        className="
          w-[300px] h-[280px] 
          md:w-[420px] md:h-[360px] 
          lg:w-[560px] lg:h-[450px] 
          bg-white rounded-2xl 
          flex flex-col items-center justify-around 
          overflow-hidden
        "
      >
        <div className="hidden lg:flex flex-1 items-center justify-center w-full">
          <HoverList />
        </div>

        <img
          src="/images/Frame 48.svg"
          alt=""
          className="sm:hidden object-contain w-[200px] md:w-[260px] lg:w-auto"
        />

        <div>
          <h1
            style={{ fontFamily: "regular" }}
            className="
              text-sm md:text-lg lg:text-2xl 
              text-[#242323] text-center
            "
          >
            Run 100s of agents for the cost of 1 SDR
          </h1>
        </div>
      </div>
    </div>
  );
};

export default RevenueCards;
