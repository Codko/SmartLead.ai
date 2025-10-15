  import React, { useEffect } from "react";
  import Primarybtn from "../Buttons/Primarybtn";
  import Aos from "aos";

  const Bar = () => {
    useEffect(() => {
      Aos.init({
        duration: 1000,
        once: true,
      });
    }, []);

    return (
      <div
        data-aos="fade-right"
        className="
          w-full h-32 m-auto 
          flex flex-col items-center justify-center gap-3
          lg:w-[88%] lg:h-36 lg:flex-row lg:items-center lg:justify-between lg:px-10 
          bg-[#6E58F1] rounded-2xl
        "
      >
        <div className="text-center lg:text-left">
          <h1
            style={{ fontFamily: "bold" }}
            className="text-[14px] lg:text-3xl text-white lg:max-w-[480px]"
          >
            Let’s Build Your Intelligent Enterprise Outreach Engine
          </h1>
        </div>

        <div className="text-center lg:text-left">
          <h1
            style={{ fontFamily: "regular" }}
            className="text-[10px] lg:text-lg text-white lg:max-w-[350px]"
          >
            Get AI-native operating system for your enterprise sales team
          </h1>
        </div>

        <div className="mt-2 lg:mt-0">
          <Primarybtn bg="#fff" text="Book A Demo" />
        </div>
      </div>
    );
  };

  export default Bar;
