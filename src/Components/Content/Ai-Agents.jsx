import Aos from "aos";
import React, { useEffect } from "react";

const Ai_Agents = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1
        data-aos="fade-up"
        style={{ fontFamily: "bold" }}
        className="text-center text-2xl lg:text-6xl text-[#242323] pb-8 lg:w-[650px]"
      >
        Pick Ready-to-use Agents. Close Deals Faster
      </h1>
      <p
        style={{ fontFamily: "regular" }}
        data-aos="fade-down"
        className="text-sm lg:text-xl text-[#848884] text-center lg:w-[650px]"
      >
        Save time with pre-build workflows. Pick a template, tweak it and let AI
        run the show in minutes.
      </p>
    </div>
  );
};

export default Ai_Agents;
