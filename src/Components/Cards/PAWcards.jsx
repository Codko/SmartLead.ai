import React, { useEffect } from "react";
import PAWcontent from "../Content/PAWcontent";
import Aos from "aos";

const PAWcards = () => {
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
        relative m-auto 
        w-[90%] sm:w-[95%] lg:w-[87.5%]
        min-h-[400px] sm:min-h-[500px] lg:h-[700px]
        bg-white flex flex-col items-center justify-center
        rounded-2xl overflow-hidden
        p-6 sm:p-10 lg:p-0
      "
      style={{
        backgroundImage: "url('/images/bg1.svg'), url('/images/bg2.svg')",
        backgroundPosition: "left bottom, right bottom", 
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "contain, contain", 
      }}
    >
      <PAWcontent />
    </div>
  );
};

export default PAWcards;
