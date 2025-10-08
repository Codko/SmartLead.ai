import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Plainbtn from "../Buttons/Plainbtn";

gsap.registerPlugin(ScrollTrigger);

const Simple_card = () => {
  const containerRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          toggleActions: "play none none none",
        },
      });

      tl.from(img1Ref.current, {
        y: 100,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      tl.from(
        img2Ref.current,
        {
          y: 120,
          opacity: 0,
          scale: 0.96,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4"
      );

      tl.from(textRef.current, {
        x: -120,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[1655px] mx-auto mt-32 flex flex-col lg:flex-row 
      items-center lg:items-start justify-center gap-10 lg:gap-20 px-4 sm:px-6 overflow-x-hidden"
    >
      {/* IMAGE CONTAINER */}
      <div
        className="relative bg-gradient-to-tl from-[#6E58F11A] to-[#FAF9F6] 
        w-full sm:w-[600px] md:w-[700px] lg:w-[800px] rounded-[30px] lg:rounded-[40px] 
        flex flex-col items-center justify-center overflow-hidden
        min-h-[280px] sm:min-h-[360px] md:min-h-[520px]"
      >
        {/* BEHIND IMAGE (img1) */}
        <img
          ref={img1Ref}
          src="/images/image 1.png"
          alt=""
          className="absolute 
          w-[85%] sm:w-[430px] md:w-[480px] lg:w-[500px] 
          top-4 sm:top-10 md:top-14 lg:top-10
          left-1/2 lg:left-[58%] -translate-x-1/2 
          object-contain z-[1]"
        />

        {/* FRONT IMAGE (img2) */}
        <img
          ref={img2Ref}
          src="/images/Frame 1073713519.png"
          alt=""
          className="absolute 
          bottom-2 sm:bottom-6 md:bottom-8 lg:bottom-6
          w-[70%] sm:w-[480px] md:w-[520px] lg:w-[520px]
          left-1/2 -translate-x-1/2 
          object-contain z-[2]"
        />
      </div>

      {/* TEXT CONTAINER */}
      <div
        ref={textRef}
        className="w-full sm:w-[500px] md:w-[600px] lg:w-[663px] 
        flex flex-col gap-6 sm:gap-8 text-center lg:text-left items-center lg:items-start"
      >
        <h1
          style={{ fontFamily: "bold" }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#000] leading-tight"
        >
          Pick Ready-to-use Agents. Close Deals Faster
        </h1>

        <p
          style={{ fontFamily: "regular" }}
          className="text-sm sm:text-lg md:text-xl lg:text-[20px] text-[#898989]"
        >
          Save time with pre-built workflows. Pick a template, tweak it, and let
          AI run the show in minutes.
        </p>

        <Plainbtn text={"Start building an Agent"} w={"354"} />
      </div>
    </div>
  );
};

export default Simple_card;
