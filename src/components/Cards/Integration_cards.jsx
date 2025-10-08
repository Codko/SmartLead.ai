import React, { useRef } from "react";
import { GoPaperclip } from "react-icons/go";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Integration_cards = () => {
  const textRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imagesContainerRef.current,
        start: "top 85%",
        once: true, // Animate only once
      },
    });

    tl.from(textRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    tl.from(
      imagesContainerRef.current,
      {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.6"
    );

    tl.from([section1.current, section2.current], {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="w-full flex justify-center overflow-x-hidden">
      <div className="w-full max-w-[1500px] flex flex-col items-center px-4 sm:px-6 md:px-8 mt-20">
        {/* TEXT SECTION */}
        <div ref={textRef} className="text-center mb-10">
          <h1
            style={{ fontFamily: "bold" }}
            className="text-[30px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-black"
          >
            Integrates With Your{" "}
            <span className="text-[#6E58F1] inline-flex items-center gap-2">
              <GoPaperclip /> Favorite Tools
            </span>
          </h1>
        </div>

        {/* IMAGES CONTAINER */}
        <div
          ref={imagesContainerRef}
          className="w-full max-w-[900px] border-2 border-dashed border-[#6E58F1] rounded-2xl 
          flex flex-col items-center justify-center gap-8 p-6 sm:p-8 md:p-10 mx-auto"
        >
          <div
            ref={section1}
            className="flex flex-wrap justify-center gap-5 md:gap-6 lg:gap-8"
          >
            <img
              src="/images/slack 1.svg"
              alt="Slack"
              className="h-[40px] sm:h-[45px] lg:h-[50px]"
            />
            <img
              src="/images/image-Photoroom (2) 1.svg"
              alt="Tool 1"
              className="h-[40px] sm:h-[45px] lg:h-[50px]"
            />
            <img
              src="/images/salesforce 1.svg"
              alt="Salesforce"
              className="h-[40px] sm:h-[45px] lg:h-[50px]"
            />
            <img
              src="/images/image-Photoroom (4) 1.svg"
              alt="Tool 2"
              className="h-[40px] sm:h-[45px] lg:h-[50px]"
            />
          </div>

          <div
            ref={section2}
            className="flex flex-wrap justify-center gap-5 md:gap-6 lg:gap-8"
          >
            <img
              src="/images/sheets 1.svg"
              alt="Sheets"
              className="h-[40px] sm:h-[45px] lg:h-[50px]"
            />
            <img
              src="/images/image-Photoroom (3) 1.svg"
              alt="Tool 3"
              className="h-[40px] sm:h-[45px] lg:h-[50px]"
            />
            <img
              src="/images/image 13.svg"
              alt="Tool 4"
              className="h-[40px] sm:h-[45px] lg:h-[50px]"
            />
            <img
              src="/images/image 14.svg"
              alt="Tool 5"
              className="h-[40px] sm:h-[45px] lg:h-[50px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration_cards;
