import Aos from "aos";
import React, { useEffect } from "react";

const GTMcards = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const cards = [
    {
      aos: "fade-right",
      img: "/images/Clock_duotone_line.svg",
      text: "Qualify leads faster",
    },
    {
      aos: "fade-down",
      img: "/images/Send_hor_duotone_line.svg",
      text: "Follow up at the perfect time",
    },
    {
      aos: "fade-left",
      img: "/images/Chield_alt_duotone_line.svg",
      text: "Optimize campaigns automatically",
    },
    {
      aos: "fade-down",
      img: "/images/lightning_duotone_line.svg",
      text: (
        <>
          Keep CRM spotless and <br /> updated
        </>
      ),
    },
    {
      aos: "fade-up",
      img: "/images/Message_open_duotone_line.svg",
      text: "Maintain perfect inbox health",
    },
    {
      aos: "fade-down",
      img: "/images/Favorites_duotone.svg",
      text: "And so much more",
    },
  ];

  return (
    <div className="w-full flex justify-center px-4 py-10 m-auto">
      <div
        className="
          grid 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-10 sm:gap-12 lg:gap-16 xl:gap-24
          justify-items-center
          place-items-center
          w-full lg:w-[85%] mx-auto
        "
      >
        {cards.map((card, index) => (
          <div
            key={index}
            data-aos={card.aos}
            className="
              flex flex-col sm:flex-row items-center gap-4 sm:gap-6 
              transition-all transform duration-300 ease-in-out 
              hover:bg-white hover:rounded-2xl hover:scale-105 group
              p-4 sm:p-6
              w-full sm:w-auto
              text-center sm:text-left
              max-w-[360px] lg:max-w-[340px] xl:max-w-[390px]
            "
          >
            <img
              src={card.img}
              alt=""
              className="
                w-[45px] sm:w-[55px] md:w-[60px]
                transition-all transform duration-300 ease-in-out 
                group-hover:rotate-12
              "
            />
            <h1
              style={{ fontFamily: "medium" }}
              className="
                text-[#AAAAAA]
                text-lg sm:text-xl xl:text-[22px]
                leading-snug
                transition-all transform duration-300 ease-in-out 
                group-hover:-translate-x-1
              "
            >
              {card.text}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GTMcards;
