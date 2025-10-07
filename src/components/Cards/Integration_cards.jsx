import React, { useEffect, useRef } from "react";
import { GoPaperclip } from "react-icons/go";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Integration_cards = () => {
  const textRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const imageRefs = useRef([]);
  const section1 = useRef(null);
  const section2 = useRef(null);

  imageRefs.current = [];

  const addToImageRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imagesContainerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(textRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    tl.from(
      imagesContainerRef.current,
      {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.5"
    );
     tl.from(section1.current ,{
      y:-100,
      duration:0.3,
      opacity:0
     }) 
     tl.from(section2.current ,{
      y:-100,
      duration:0.3,
      opacity:0
     }) 
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1655px] px-4 sm:px-6 md:px-10 lg:px-0 mt-20 flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="w-full lg:w-[780px]">
          <h1
            ref={textRef}
            style={{ fontFamily: "bold" }}
            className="text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] text-black"
          >
            Integrates With Your{" "}
            <img
              src="/images/Line 7.svg"
              alt=""
              className="hidden lg:inline pl-4 w-[100px] md:w-[130px] lg:w-[160px]"
            />
          </h1>

          <h1 ref={textRef}
            style={{ fontFamily: "bold" }}
            className="text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] text-[#6E58F1] flex items-center gap-2 mt-4"
          >
            <GoPaperclip />
            Favorite Tools
          </h1>
        </div>

        <div
          ref={imagesContainerRef}
          className="w-full lg:w-[800px] border-2 border-dashed border-[#6E58F1] flex flex-col items-center justify-center gap-12 p-6 md:p-10 rounded-2xl"
        >
          <div
            ref={section1}
            className="flex flex-wrap justify-center gap-6 lg:gap-8"
          >
            <img
              ref={addToImageRefs}
              src="/images/slack 1.svg"
              alt="Slack"
              className="h-[40px] sm:h-[45px] lg:h-[50px]"
            />
            <img
              ref={addToImageRefs}
              src="/images/image-Photoroom (2) 1.svg"
              alt=""
              className="h-[40px] sm:h-[45px] lg:h-[50px]"
            />
            <img
              ref={addToImageRefs}
              src="/images/salesforce 1.svg"
              alt="Salesforce"
              className="h-[40px] sm:h-[45px] lg:h-[50px]"
            />
            <img
              ref={addToImageRefs}
              src="/images/image-Photoroom (4) 1.svg"
              alt=""
              className="h-[40px] sm:h-[45px] lg:h-[50px]"
            />
          </div>
          <div
            ref={section2}
            className="flex flex-wrap justify-center gap-6 lg:gap-8"
          >
            <img
              ref={addToImageRefs}
              src="/images/sheets 1.svg"
              alt="Sheets"
              className="h-[40px] sm:h-[45px] lg:h-[50px]"
            />
            <img
              ref={addToImageRefs}
              src="/images/image-Photoroom (3) 1.svg"
              alt=""
              className="h-[40px] sm:h-[45px] lg:h-[50px]"
            />
            <img
              ref={addToImageRefs}
              src="/images/image 13.svg"
              alt=""
              className="h-[40px] sm:h-[45px] lg:h-[50px]"
            />
            <img
              ref={addToImageRefs}
              src="/images/image 14.svg"
              alt=""
              className="h-[40px] sm:h-[45px] lg:h-[50px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration_cards;
