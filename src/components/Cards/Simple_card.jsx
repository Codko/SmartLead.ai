import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoPaperclip } from "react-icons/go";
import Plainbtn from "../Buttons/Plainbtn";
import { useGSAP } from "@gsap/react";

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
        duration: 0.5,
        ease: "power3.out",
      });

      tl.from(
        img2Ref.current,
        {
          y: 120,
          opacity: 0,
          scale: 0.95,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      );

      tl.from(textRef.current, {
        x: -150,
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
      items-center lg:items-start justify-center gap-10 lg:gap-20 px-4 sm:px-6"
    >
      <div
        className="relative bg-gradient-to-tl from-[#6E58F11A] to-[#FAF9F6] 
        w-full sm:w-[600px] md:w-[700px] lg:w-[800px] rounded-[30px] lg:rounded-[40px] 
        flex flex-col items-center justify-center gap-8 overflow-hidden 
        min-h-[400px] sm:min-h-[480px] md:min-h-[520px]"
      >
        <img
          ref={img2Ref}
          src="/images/image 1.png"
          alt=""
          className="absolute left-1/2 lg:left-56 bottom-8 sm:bottom-12 
          w-[70%] sm:w-[500px] md:w-[550px] lg:w-[610px] object-contain"
        />
        <img
          ref={img1Ref}
          src="/images/Frame 1073713519.png"
          alt=""
          className="absolute w-[65%] sm:w-[400px] md:w-[450px] lg:w-[497px] 
          top-1/3 sm:top-40 lg:top-44 right-1/2 translate-x-1/2 lg:translate-x-0 
          lg:right-64 object-contain"
        />
      </div>

      <div
        ref={textRef}
        className="w-full sm:w-[500px] md:w-[600px] lg:w-[663px] 
        flex flex-col gap-6 sm:gap-8 text-center lg:text-left items-center lg:items-start"
      >
        <h1
          style={{ fontFamily: "bold" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#000] leading-tight"
        >
          Pick Ready-to-use Agents. Close Deals Faster
        </h1>

        <p
          style={{ fontFamily: "regular" }}
          className="text-base sm:text-lg md:text-xl lg:text-[20px] text-[#898989]"
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
