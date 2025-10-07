import React, { useEffect, useRef } from "react";
import Plainbtn from "../Buttons/Plainbtn";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Workflow = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const floatingImgsRef = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          once: true,
        },
      });

      tl.from(textRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        immediateRender: false,
      });

      tl.from(
        imageWrapperRef.current,
        {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          immediateRender: false,
        },
        "-=0.5"
      );

      floatingImgsRef.current.forEach((img, i) => {
        gsap.to(img, {
          y: `+=${15 + i * 5}`,
          x: `+=${gsap.utils.random(-10, 10)}`,
          rotation: gsap.utils.random(-3, 3),
          scale: 1 + i * 0.02,
          duration: 1 + i * 0.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col lg:flex-row justify-between items-center bg-gradient-to-tl from-[#6E58F11A] via-[#FAF9F6] to-[#6E58F11A] mt-32 lg:mt-[193px] px-4 sm:px-8 py-12 lg:py-0 relative overflow-hidden rounded-[30px] lg:rounded-[50px]"
    >
      <div
        ref={textRef}
        className="flex-1 w-full max-w-[700px] flex flex-col gap-6 sm:gap-8 px- sm:px-6 lg:px-20 text-center lg:text-left ml-12"
      >
        <h1
          style={{ fontFamily: "bold" }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] leading-tight lg:leading-[1.2] text-[#0A0A0A]"
        >
          Powerful 
           <span className="text-[#6E58F1]">Automated Workflows</span><span>that </span>
           Drive Sales
        </h1>

        <p
          style={{ fontFamily: "regular" }}
          className="text-base sm:text-lg md:text-xl lg:text-[20px] text-[#898989] leading-relaxed"
        >
          Give your sales team the freedom from doing unwanted manual,
          repetitive tasks. Stop juggling between tools, repetitive workflows,
          and endless manual tasks.
        </p>

        <div className="mt-4 sm:mt-6 lg:mt-8 flex justify-center lg:justify-start">
          <Plainbtn text={"Get Started Now"} />
        </div>
      </div>

      <div
        ref={imageWrapperRef}
        className="flex-1 w-full flex justify-center items-center relative mt-16 lg:mt-0 min-h-[400px] sm:min-h-[500px] lg:min-h-[800px]"
      >
        <img
          ref={(el) => (floatingImgsRef.current[0] = el)}
          src="/images/SmartAgent.png"
          alt="SmartAgent Main"
          className="absolute object-contain w-[60%] sm:w-[45%] md:w-[40%] lg:w-[35%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />

        <img
          ref={(el) => (floatingImgsRef.current[1] = el)}
          src="/images/Email Campaigns.png"
          alt="Email Campaigns"
          className="absolute object-contain w-[35%] sm:w-[30%] md:w-[25%] lg:w-[20%] top-10 sm:top-16 right-[15%]"
        />

        <img
          ref={(el) => (floatingImgsRef.current[2] = el)}
          src="/images/SmartAgent (1).png"
          alt="SmartAgent Secondary"
          className="absolute object-contain w-[35%] sm:w-[28%] md:w-[25%] lg:w-[22%] bottom-10 right-[8%]"
        />
      </div>
    </div>
  );
};

export default Workflow;
