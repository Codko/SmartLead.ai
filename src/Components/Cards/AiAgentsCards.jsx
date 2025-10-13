import Aos from "aos";
import React, { useEffect } from "react";
import { CiUser, CiClock2 } from "react-icons/ci";

const AiAgentsCards = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const cards = [
    { aos: "fade-down-right" },
    { aos: "fade-up" },
    { aos: "fade-down-left" },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-6 px-4 py-10 md:flex-row md:flex-wrap lg:gap-10">
      {cards.map((card, index) => (
        <div
          key={index}
          data-aos={card.aos}
          className="
            w-full sm:w-[90%] md:w-[400px] lg:w-[530px] 
            bg-white rounded-[10px] shadow-md transition-all
            hover:shadow-lg"
        >
         
          <div className="flex justify-between items-center p-4 md:p-6">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
              <img
                src="/images/profile picture of blonde woman in blue shirt.svg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-3 py-1 bg-[#EAEEFF] text-[#5D72EB] text-sm md:text-base rounded-lg">
              <h1 style={{ fontFamily: "medium" }}>Popular</h1>
            </div>
          </div>

        
          <div className="px-4 md:px-6 space-y-2">
            <h1
              style={{ fontFamily: "medium" }}
              className="text-base md:text-xl text-[#382F32]"
            >
              Lead enrichment agent
            </h1>
            <p
              style={{ fontFamily: "regular" }}
              className="text-[#686B8A] text-sm md:text-lg leading-snug"
            >
              Fetches missing firmographic & contact data for new CRM leads to
              improve outreach and personalization.
            </p>
          </div>

          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 md:p-6">
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-[#FFF8E7] text-[#000] text-sm md:text-base rounded-lg px-3 py-1">
                <CiUser />
                <h1 style={{ fontFamily: "medium" }}>1.2k users</h1>
              </div>
              <div className="flex items-center gap-2 bg-[#EAEEFF] text-[#000] text-sm md:text-base rounded-lg px-3 py-1">
                <CiClock2 />
                <h1 style={{ fontFamily: "medium" }}>Popular</h1>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-end">
              {[
                "/images/smartlead.svg",
                "/images/Group 628065.svg",
                "/images/devicon_slack.svg",
                "/images/logos_salesforce.svg",
                "/images/sheetlogo.svg",
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="logo"
                  className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] object-contain"
                />
              ))}
            </div>
          </div>

         
          <div className="p-4 md:p-6 pt-2">
            <button className="w-full h-[45px] md:h-[50px] border-2 border-[#6E58F1] bg-white text-sm md:text-lg rounded-xl hover:bg-[#6E58F1] hover:text-white transition-all">
              Use template
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AiAgentsCards;
