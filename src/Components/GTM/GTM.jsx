import React, { useEffect } from "react";
import GTMcontent from "../Content/GTMcontent";
import GTMcards from "../Cards/GTMcards";
import Primarybtn from "../Buttons/Primarybtn";
import Aos from "aos";

const GTM = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      <div>
        <GTMcontent />
      </div>
      <div className="mt-8">
        <GTMcards />
      </div>
      <div data-aos="fade-up" className="flex justify-center  lg:pt-20">
        <Primarybtn w={"400"} text={"Create Your GTM Workforce Now"} />
      </div>
    </div>
  );
};

export default GTM;
