import React, { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Fillbtn from "../Buttons/Fillbtn";
import Plainbtn from "../Buttons/Plainbtn";
import { InputContext } from "../../Context/Inputcontext";
import { useGSAP } from "@gsap/react";

const Content = () => {
  const { text } = useContext(InputContext);

  const topSectionRef = useRef(null);
  const headingRef = useRef(null);
  const restContentRef = useRef(null);
  const fillBtnsRef = useRef([]);

  fillBtnsRef.current = [];

  const addToFillBtnsRefs = (el) => {
    if (el && !fillBtnsRef.current.includes(el)) {
      fillBtnsRef.current.push(el);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(topSectionRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
    });

    tl.from(
      headingRef.current,
      {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.7"
    );

    tl.from(
      restContentRef.current,
      {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.7"
    );

    tl.from(
      fillBtnsRef.current,
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.3,
        ease: "power2.out",
      },
      "-=0.8"
    );
  }, []);

  return (
    <div className="w-full max-w-[1073px] mt-20 md:mt-44 mx-auto flex flex-col items-center px-4 sm:px-6">
      <div ref={topSectionRef} className="flex flex-col items-center">
        <Fillbtn text={"Smart Agent"} />
      </div>

      <div ref={headingRef} className="pt-6 w-full">
        <h1
          style={{ fontFamily: "bold" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-snug text-black"
        >
          Your First AI-Powered GTM Workforce
        </h1>
      </div>

      <div ref={restContentRef} className="w-full">
        <p
          style={{ fontFamily: "regular" }}
          className="text-[#898989] text-base sm:text-lg md:text-xl text-center mt-4 px-2 sm:px-10"
        >
          SmartAgents automate your entire revenue workflow, from lead research
          and outreach to follow-ups, analytics, and closing deals.
        </p>

        <div
          className={`w-full mt-10 shadow-lg ${
            text ? "border" : "border border-[#FAF9F6]"
          } rounded-[50px] flex flex-col sm:flex-row items-stretch sm:items-center shadow-[#9381fc] overflow-hidden`}
        >
          <input
            style={{ fontFamily: "regular" }}
            className={`w-full h-[55px] sm:h-[95px] pl-5 text-sm sm:text-lg ${
              text ? "text-[#7c7c7c]" : "text-[#5f5f5f77]"
            } border-none outline-none bg-transparent ${"pointer-events-none sm:pointer-events-auto opacity-60 sm:opacity-100"}`}
            placeholder={text ? text : "Type Here"}
            type="text"
            readOnly
          />

          <div className="hidden sm:flex sm:pr-4 py-2 sm:py-0 justify-center">
            <div className="w-auto">
              <Plainbtn text={"Create An Agent"} w={"100%"} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-10">
          <div>
            <Fillbtn
              ref={addToFillBtnsRefs}
              text={"Lead gen"}
              w={"200"}
              value={"find 10 software engineers in San Fransisco"}
            />
          </div>
          <div ref={addToFillBtnsRefs}>
            <Fillbtn
              text={"Personal Website"}
              w={"290"}
              value={"Reach me online and then create a personal website"}
            />
          </div>
          <div ref={addToFillBtnsRefs}>
            <Fillbtn
              text={"Customer Support"}
              w={"250"}
              value={"I want an agent that will monitor my support inbox"}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-4">
          <div ref={addToFillBtnsRefs}>
            <Fillbtn
              text={"Meeting Recorder"}
              w={"300"}
              value={
                "Build me a meeting notetaker agent that automatically joins my Google Calendar "
              }
            />
          </div>
          <div ref={addToFillBtnsRefs}>
            <Fillbtn
              text={"LinkedIn outreach"}
              w={"300"}
              value={
                "Reach out to [insert name] who works at [insert company] on LinkedIn"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
