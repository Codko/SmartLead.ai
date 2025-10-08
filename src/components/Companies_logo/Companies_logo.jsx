import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Companies_logo = () => {
  const containerref = useRef(null);
  const textref = useRef(null);
  const marqref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerref.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out", duration: 0.8 },
    });

    tl.from(containerref.current, {
      x: 100, 
      opacity: 0,
      duration: 1,
    })
      .from(textref.current, { opacity: 0, y: 30, duration: 0.8 }, "-=0.5")
      .from(marqref.current, { opacity: 0, y: 40, duration: 1 }, "-=0.3");
  }, []);

  return (
    <div
      ref={containerref}
      className="w-full max-w-[1620px] rounded-[30px] md:rounded-[50px] 
      bg-gradient-to-r from-[#6E58F11A] via-[#FAF9F6] to-[#6E58F11A] 
      mx-auto flex flex-col items-center justify-center 
      mt-16 md:mt-20 px-4 py-10 sm:py-16 
      overflow-x-hidden relative"
    >
      <div className="w-full max-w-[1073px] text-center">
        <h1
          ref={textref}
          style={{ fontFamily: "bold" }}
          className="text-2xl sm:text-4xl md:text-[56px] leading-snug sm:leading-tight text-[#0a0a0a]"
        >
          Trusted by <span className="text-[#6E58F1]">100,000+</span>{" "}
          Businesses,
          <br className="hidden sm:block" />
          <span className="text-lg sm:text-2xl md:text-[36px] block mt-2 sm:mt-3">
            from Best agencies to Fortune 500 Companies
          </span>
        </h1>
      </div>

      <div
        ref={marqref}
        className="w-full max-w-[1024px] pt-10 overflow-hidden no-scrollbar"
      >
        <div className="relative w-full overflow-hidden">
          <marquee behavior="scroll" direction="left" scrollamount="6">
            <div className="flex items-center gap-10 sm:gap-16 md:gap-20">
              <img
                src="/images/Vector (1).png"
                alt="logo1"
                className="w-24 sm:w-32 md:w-40 object-contain"
              />
              <img
                src="/images/Vector (2).png"
                alt="logo2"
                className="w-24 sm:w-32 md:w-40 object-contain"
              />
              <img
                src="/images/Vector (3).png"
                alt="logo3"
                className="w-24 sm:w-32 md:w-40 object-contain"
              />
              <img
                src="/images/Vector (4).png"
                alt="logo4"
                className="w-24 sm:w-32 md:w-40 object-contain"
              />
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Companies_logo;
