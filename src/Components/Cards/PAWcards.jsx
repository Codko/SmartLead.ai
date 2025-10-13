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
      className="relative m-auto lg:w-[87.5%] lg:h-[700px] bg-white bg-no-repeat bg-contain flex flex-col items-center justify-center rounded-2xl"
      style={{
        backgroundImage: "url('/images/bg1.svg'), url('/images/bg2.svg')",
        backgroundPosition: "left center, right center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "contain, contain",
      }}
    >
      <PAWcontent />
    </div>
  );
};

export default PAWcards;
