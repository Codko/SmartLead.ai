import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Plainbtn from "../Buttons/Plainbtn";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const GTM = () => {
  const leftRef = useRef(null);
  const cardContainerRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardContainerRef.current,
        start: "top 80%",
      },
    });

    tl.from(leftRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

 
    tl.from(
      cardRefs.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
      },
      "-=0.4" 
    );
  }, []);

  const card_data = [
    {
      heading: "Qualify",
      text: "leads faster",
      image: "/images/Clock_duotone_line.svg",
    },
    {
      heading: "Follow Up",
      text: "at the perfect time",
      image: "/images/Send_hor_duotone_line.svg",
    },
    {
      heading: "Optimize",
      text: "campaigns automatically",
      image: "/images/Chield_alt_duotone_line.svg",
    },
    {
      heading: "Keep",
      text: "CRM spotless & updated",
      image: "/images/lightning_duotone_line.svg",
    },
    {
      heading: "Maintain",
      text: "perfect inbox health",
      image: "/images/Message_open_duotone_line.svg",
    },
    {
      heading: "And",
      text: "so much more",
      image: "/images/Favorites_duotone.svg",
      bg: "#6E58F1",
    },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center bg-gradient-to-tl from-[#6E58F11A] via-[#FAF9F6] to-[#6E58F11A] mt-32 lg:mt-[193px] px-4 sm:px-8 py-16 lg:py-20 rounded-[30px] lg:rounded-[50px] overflow-hidden">
  
      <div
        ref={leftRef}
        className="w-full lg:w-[526px] flex flex-col gap-6 sm:gap-8 text-center lg:text-left mb-16 lg:mb-0 px-2 sm:px-4"
      >
        <h1
          style={{ fontFamily: "bold" }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] text-[#0A0A0A] leading-tight lg:leading-[1.2]"
        >
          Your <span className="text-[#6E58F1]">GTM Team</span> On Autopilot
        </h1>

        <p
          style={{ fontFamily: "regular" }}
          className="text-base sm:text-lg md:text-xl lg:text-[20px] text-[#898989] leading-relaxed"
        >
          Give your sales team the freedom from doing unwanted manual,
          repetitive tasks. Stop juggling between tools, repetitive workflows,
          and endless manual tasks.
        </p>

        <div className="mx-auto lg:mr-44">
          <Plainbtn text={"Build My GTM Team"} w={"318"} />
        </div>
      </div>

      
      <div
        ref={cardContainerRef}
        className="w-full lg:w-[937px] grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-items-center"
      >
        {card_data.map((item, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="flex flex-col items-center text-center gap-3 sm:gap-4"
          >
            <div
              className={`w-[120px] sm:w-[150px] md:w-[160px] h-[110px] sm:h-[140px] md:h-[154px] border-2 border-dashed border-[#6E58F1] rounded-[20px] sm:rounded-[25.74px] flex justify-center items-center hover:border-solid hover:shadow-md transition-all duration-300 ${
                item.bg ? "bg-[#6E58F1]" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.heading}
                className="w-12 sm:w-14 md:w-16 transition-all ease-in-out duration-300 transform hover:scale-110 hover:rotate-360"
              />
            </div>

            <h1
              style={{ fontFamily: "semi-bold" }}
              className={`text-xl sm:text-2xl md:text-[28px] ${
                item.bg ? "text-[#6E58F1]" : "text-[#0A0A0A]"
              }`}
            >
              {item.heading}
            </h1>
            <p
              style={{ fontFamily: "medium" }}
              className={`text-sm sm:text-base md:text-lg ${
                item.bg ? "text-[#6E58F1]" : "text-[#7A7A7A]"
              }`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GTM;
