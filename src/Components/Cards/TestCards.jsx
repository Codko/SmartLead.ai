import Aos from "aos";
import React, { useEffect } from "react";

const TestCards = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const cards = [
    "fade-right",
    "fade-down",
    "fade-left",
    "fade-down",
    "fade-up",
    "fade-down",
  ];

  return (
    <div className="w-full flex justify-center px-4">
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          place-items-center 
          gap-6 
          w-full 
          max-w-[1400px]
        "
      >
        {cards.map((animation, i) => (
          <div
            key={i}
            data-aos={animation}
            className="
              w-full 
              sm:w-[90%] 
              lg:w-[380px] 
              xl:w-[420px]
              h-auto 
              rounded-2xl 
              bg-white 
              flex 
              flex-col 
              justify-between
              gap-6 
              p-6 
              shadow-sm 
              hover:shadow-lg 
              transition-shadow 
              duration-300
            "
          >
            <div>
              <img
                src="/images/Quotes.svg"
                alt="Quote icon"
                className="w-8 h-8"
              />
            </div>
            <div>
              <p
                style={{ fontFamily: "regular" }}
                className="text-[#686B8A] text-base lg:text-lg leading-relaxed"
              >
                Give your sales team the freedom from doing unwanted manual,
                repetitive tasks. Stop juggling between tools, repetitive
                workflows, and endless manual tasks.
              </p>
            </div>
            <div>
              <h1
                style={{ fontFamily: "bold" }}
                className="text-lg lg:text-xl text-black"
              >
                Reggie B.
              </h1>
              <p
                style={{ fontFamily: "regular" }}
                className="text-[#686B8A] text-base lg:text-lg"
              >
                Founder, Lambda Group
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestCards;
