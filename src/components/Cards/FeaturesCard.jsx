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
    cardRefs.current.forEach((card) => gsap.set(card, { opacity: 0, x: -50 }));
    lineRefs.current.forEach((line) =>
      gsap.set(line, { scaleY: 0, transformOrigin: "top center" })
    );

    // === Heading Animation ===
    const headingTl = gsap.timeline({
      scrollTrigger: {
        trigger: headingWrapperRef.current,
        start: "top center",
        end: "+=600",
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    headingTl.to(headingLetters, {
      color: "#6E58F1",
      stagger: 0.12,
      duration: 6,
      ease: "power2.out",
    });

    headingTl.to(
      paraRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      },
      "+=0.2"
    );

    // === Cards Animation individually on scroll ===
    cardRefs.current.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top center", // triggers when card top reaches center of viewport
        end: "bottom bottom",
        scrub: false, // optional: true if you want scroll-scrub effect
        onEnter: () => {
          // Animate card
          gsap.to(card, {
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: "power2.out",
          });
          // Animate line if exists
          if (lineRefs.current[index]) {
            gsap.to(lineRefs.current[index], {
              scaleY: 1,
              duration: 2,
              ease: "power2.out",
              transformOrigin: "top center",
            });
          }
        },
      });
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
      className="w-full mt-10 flex flex-col gap-10 bg-gradient-to-tl from-[#6E58F11A] to-[#FAF9F6] px-4 sm:px-6 lg:px-8 py-10"
    >
      {/* Heading */}
      <div
        ref={headingWrapperRef}
        className="relative w-full flex flex-col items-center mb-20 min-h-[400px]"
      >
        <div className="max-w-[900px] text-center">
          <h1
            ref={headingRef}
            style={{ fontFamily: "bold" }}
            className="text-3xl sm:text-4xl md:text-[70px] leading-tight"
          >
            {splitHeading}
          </h1>
          <p
            ref={paraRef}
            style={{ fontFamily: "regular" }}
            className="text-base sm:text-lg md:text-[20px] text-[#898989] text-center mt-4"
          >
            Let SmartAgents do the hard work, so your team can focus on the deal
            work
          </p>
          <div></div>
        </div>
      </div>

      {/* Cards */}
      {[1, 2, 3].map((num, idx) => (
        <React.Fragment key={num}>
          <div
            ref={addToCardRefs}
            className="w-full md:w-[1073px] h-auto md:h-[500px] rounded-[30px] md:rounded-[50px] flex flex-col items-center justify-center gap-10 bg-gradient-to-tl from-[#6E58F11A] to-[#FAF9F6] self-center overflow-hidden relative px-4 sm:px-8 py-10 shadow-2xl mx-auto"
          >
            <h1
              className="text-[120px] sm:text-[180px] md:text-[250px] text-[#c7c7c7] opacity-25 absolute -z-10 -bottom-18 -right-5"
              style={{ fontFamily: "bold" }}
            >
              {num.toString().padStart(2, "0")}
            </h1>
            {num === 1 && (
              <img
                src="/images/img.png"
                className="w-3/4 sm:w-2/3 md:w-[400px] object-contain"
              />
            )}
            {num === 2 && (
              <img
                src="/images/11.png"
                className="w-3/4 sm:w-2/3 md:w-[400px] object-contain"
              />
            )}
            {num === 3 && (
              <img
                src="/images/Group 1000005739.png"
                className="w-3/4 sm:w-2/3 md:w-[400px] object-contain"
              />
            )}
            <h1
              style={{ fontFamily: "medium" }}
              className="text-[#898989] text-lg sm:text-xl md:text-[36px] text-center"
            >
              {num === 1
                ? "Automate all your internal SOPs in a few clicks"
                : num === 2
                ? "Increase your operational profit margins by 80%"
                : "Run 100s of agents for the cost of 1 SDR"}
            </h1>
            <div className="pb-10">
            </div>
          </div>
          <div>
           {
            num ===3 && (
               <Plainbtn text={'Start Your 14-day Trial'} w={'400'}/>
            )
           }
          </div>
          {num < 3 && (
            <div
              ref={addToLineRefs}
              className="h-16 w-[2px] border-l-2 border-dotted border-[#6E58F1] mx-auto"
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FeaturesCard;
