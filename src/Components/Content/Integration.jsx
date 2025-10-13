import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Spider from "../Spider/Spider";

const Integration = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1
        data-aos="fade-right"
        style={{ fontFamily: "bold" }}
        className="text-center text-2xl lg:text-6xl text-[#242323] mb-20"
      >
        Integrates With Your Favorite Tools
      </h1>

      <div>
        <Spider />
      </div>
    </div>
  );
};

export default Integration;
