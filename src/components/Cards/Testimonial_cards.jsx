import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Testimonial_cards = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const imageCardsRef = useRef([]);
  const textCardsRef = useRef([]);

  const data = [
    "/images/Frame 1073714032.png",
    "/images/Frame 1073714033.png",
    "/images/Frame 1073714034.png",
  ];

  const addToImageRefs = (el) => {
    if (el && !imageCardsRef.current.includes(el)) {
      imageCardsRef.current.push(el);
    }
  };

  const addToTextRefs = (el) => {
    if (el && !textCardsRef.current.includes(el)) {
      textCardsRef.current.push(el);
    }
  };

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          once: true,
        },
      });

      tl.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      tl.from(
        imageCardsRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.4"
      );

      tl.from(
        textCardsRef.current,
        {
          y: -80,
          opacity: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.7"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[1600px] px-4 md:px-8 mx-auto mt-24 flex flex-col gap-10"
    >
      <h1
        ref={headingRef}
        style={{ fontFamily: "bold" }}
        className="text-[42px] sm:text-[64px] lg:text-[96px] text-center text-[#000]"
      >
        What Our <span className="text-[#6E58F1]">Customers</span> Say
      </h1>

      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          <div
            ref={addToTextRefs}
            className="bg-gradient-to-tl from-[#6E58F11A] to-[#FAF9F6] rounded-[50px] p-10 w-full sm:w-[48%] lg:w-[26%] min-h-[340px]"
          >
            <p
              style={{ fontFamily: "regular" }}
              className="text-[#898989] text-[16px] md:text-[18px]"
            >
              Give your sales team the freedom from doing unwanted manual,
              repetitive tasks.Stop juggling between tools, repetitive
              workflows, and endless manual tasks. Empower your team with tools
              that save time and effort.
            </p>
            <h1
              style={{ fontFamily: "medium" }}
              className="text-[#0A0A0A] text-[18px] md:text-[20px] pt-4"
            >
              Reggie B.
              <span className="text-[#898989] block text-[14px] md:text-[16px]">
                Founder, Lambda Group
              </span>
            </h1>
          </div>

          <div
            ref={addToImageRefs}
            className="bg-gradient-to-tl from-[#6E58F11A] to-[#FAF9F6] rounded-[50px] w-full sm:w-[48%] lg:w-[26%] min-h-[340px] flex items-center justify-center"
          >
            <img
              src={data[0]}
              alt=""
              className="object-contain w-full h-full rounded-[50px]"
            />
          </div>

          <div
            ref={addToTextRefs}
            className="bg-gradient-to-tl from-[#6E58F11A] to-[#FAF9F6] rounded-[50px] p-10 w-full sm:w-[48%] lg:w-[26%] min-h-[340px]"
          >
            <p
              style={{ fontFamily: "regular" }}
              className="text-[#898989] text-[16px] md:text-[18px]"
            >
              Give your sales team the freedom from doing unwanted manual,
              repetitive tasks.Stop juggling between tools, repetitive
              workflows, and endless manual tasks. Empower your team with tools
              that save time and effort.
            </p>
            <h1
              style={{ fontFamily: "medium" }}
              className="text-[#0A0A0A] text-[18px] md:text-[20px] pt-4"
            >
              Sarah M.
              <span className="text-[#898989] block text-[14px] md:text-[16px]">
                Marketing Lead
              </span>
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          <div
            ref={addToImageRefs}
            className="bg-gradient-to-tl from-[#6E58F11A] to-[#FAF9F6] rounded-[50px] w-full sm:w-[48%] lg:w-[26%] min-h-[340px] flex items-center justify-center"
          >
            <img
              src={data[1]}
              alt=""
              className="object-contain w-full h-full rounded-[50px]"
            />
          </div>

          <div
            ref={addToTextRefs}
            className="bg-gradient-to-tl from-[#6E58F11A] to-[#FAF9F6] rounded-[50px] p-10 w-full sm:w-[48%] lg:w-[26%] min-h-[340px]"
          >
            <p
              style={{ fontFamily: "regular" }}
              className="text-[#898989] text-[16px] md:text-[18px]"
            >
              Give your sales team the freedom from doing unwanted manual,
              repetitive tasks.Stop juggling between tools, repetitive
              workflows, and endless manual tasks. Empower your team with tools
              that save time and effort.
            </p>
            <h1
              style={{ fontFamily: "medium" }}
              className="text-[#0A0A0A] text-[18px] md:text-[20px] pt-4"
            >
              Liam J.
              <span className="text-[#898989] block text-[14px] md:text-[16px]">
                Product Manager
              </span>
            </h1>
          </div>

          <div
            ref={addToImageRefs}
            className="bg-gradient-to-tl from-[#6E58F11A] to-[#FAF9F6] rounded-[50px] w-full sm:w-[48%] lg:w-[26%] min-h-[340px] flex items-center justify-center"
          >
            <img
              src={data[2]}
              alt=""
              className="object-contain w-full h-full rounded-[50px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial_cards;
