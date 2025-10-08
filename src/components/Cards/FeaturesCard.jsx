import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Plainbtn from "../Buttons/Plainbtn";

gsap.registerPlugin(ScrollTrigger);

const FeaturesCard = () => {
  const sectionRef = useRef(null);
  const headingWrapperRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const cardRefs = useRef([]);
  const lineRefs = useRef([]);

  cardRefs.current = [];
  lineRefs.current = [];

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el);
  };
  const addToLineRefs = (el) => {
    if (el && !lineRefs.current.includes(el)) lineRefs.current.push(el);
  };

  useGSAP(() => {
    const headingLetters = headingRef.current.querySelectorAll("span");

    // Initial states
    gsap.set(headingLetters, { color: "#bfbfbf" });
    gsap.set(paraRef.current, { opacity: 0, y: 40 });
    gsap.set(cardRefs.current, { opacity: 0, x: -80 }); // start off-screen left
    gsap.set(lineRefs.current, { scaleY: 0, transformOrigin: "top center" });

    const isMobile = window.innerWidth < 640;
    const baseDuration = isMobile ? 0.8 : 1.2;

    // Heading Animation
    const headingTl = gsap.timeline({
      scrollTrigger: {
        trigger: headingWrapperRef.current,
        start: "top 80%",
        end: "+=400",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    headingTl
      .to(headingLetters, {
        color: "#6E58F1",
        stagger: 0.08,
        duration: baseDuration * 3,
        ease: "power3.inOut",
      })
      .to(
        paraRef.current,
        {
          opacity: 1,
          y: 0,
          duration: baseDuration,
          ease: "power2.out",
        },
        "-=0.3"
      );

    // Card Animations (Slide from X-axis)
    cardRefs.current.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top 85%",
        end: "bottom 70%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            x: 0,
            duration: baseDuration * 1.8,
            ease: "power3.out",
          });

          if (lineRefs.current[index]) {
            gsap.to(lineRefs.current[index], {
              scaleY: 1,
              duration: baseDuration * 1.5,
              ease: "power2.out",
            });
          }
        },
      });
    });

    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange, DOMContentLoaded, load, resize",
    });
  }, []);

  const headingText = "From Prompt to Revenue In Minutes";
  const splitHeading = headingText.split("").map((char, i) => (
    <span key={i} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <div
      ref={sectionRef}
      className="w-full overflow-x-hidden mt-6 flex flex-col bg-gradient-to-tl from-[#6E58F11A] to-[#FAF9F6] px-4 sm:px-6 lg:px-8 py-10"
    >
      {/* Heading Section */}
      <div
        ref={headingWrapperRef}
        className="relative w-full flex flex-col items-center mb-10 min-h-[300px] overflow-x-hidden"
      >
        <div className="max-w-[900px] text-center">
          <h1
            ref={headingRef}
            style={{ fontFamily: "bold" }}
            className="text-[22px] sm:text-5xl md:text-[70px] leading-tight break-words"
          >
            {splitHeading}
          </h1>
          <p
            ref={paraRef}
            style={{ fontFamily: "regular" }}
            className="text-base sm:text-lg md:text-[20px] text-[#898989] text-center mt-3"
          >
            Let SmartAgents do the hard work, so your team can focus on the deal
            work
          </p>
        </div>
      </div>

      {/* Cards */}
      {[1, 2, 3].map((num, idx) => (
        <React.Fragment key={num}>
          <div
            ref={addToCardRefs}
            className="relative w-full max-w-[1100px] mx-auto rounded-[30px] md:rounded-[50px] flex flex-col items-center justify-center gap-8 sm:gap-10 bg-gradient-to-tl from-[#6E58F11A] to-[#FAF9F6] py-10 px-4 sm:px-6 md:px-10 shadow-2xl"
          >
            {/* Background Number */}
            <h1
              className="text-[100px] sm:text-[180px] md:text-[220px] text-[#c7c7c7] opacity-25 absolute -z-10 bottom-0 right-20 translate-x-1/4 translate-y-1/4 select-none"
              style={{ fontFamily: "bold" }}
            >
              {num.toString().padStart(2, "0")}
            </h1>

            {/* Image */}
            <img
              src={
                num === 1
                  ? "/images/img.png"
                  : num === 2
                  ? "/images/11.png"
                  : "/images/Group 1000005739.png"
              }
              alt={`Feature ${num}`}
              className="w-[80%] sm:w-[60%] md:w-[400px] object-contain"
            />

            {/* Text */}
            <h1
              style={{ fontFamily: "medium" }}
              className="text-[#898989] text-center text-lg sm:text-xl md:text-[28px] max-w-[800px] px-2"
            >
              {num === 1
                ? "Automate all your internal SOPs in a few clicks"
                : num === 2
                ? "Increase your operational profit margins by 80%"
                : "Run 100s of agents for the cost of 1 SDR"}
            </h1>

            <div className="pb-8"></div>
          </div>

          {/* Button after last card */}
          {num === 3 && (
            <div className="flex justify-center mt-4">
              <Plainbtn text={"Start Your 14-day Trial"} w={"400"} />
            </div>
          )}

          {/* Dotted line between cards */}
          {num < 3 && (
            <div
              ref={addToLineRefs}
              className="h-14 w-[2px] border-l-2 border-dotted border-[#6E58F1] mx-auto"
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FeaturesCard;
