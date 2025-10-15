import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Spider = () => {
  const logoRef = useRef(null);
  const linesRef = useRef([]);
  const iconsRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: logoRef.current,
        start: "top center",
        end: "bottom center",
      },
    });

    gsap.set(linesRef.current, {
      opacity: 0,
      strokeDasharray: "8 6",
      strokeDashoffset: 0,
    });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, rotate: 0, scale: 0.5 },
      {
        opacity: 1,
        rotate: 360,
        scale: 1,
        transformOrigin: "center center",
        duration: 1,
        ease: "power2.out",
      }
    );

    tl.to(
      linesRef.current,
      {
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      },
      "+=0.2"
    );

    linesRef.current.forEach((line) => {
      gsap.to(line, {
        strokeDashoffset: "-100",
        repeat: -1,
        duration: 1.5,
        ease: "none",
      });
    });

    tl.fromTo(
      iconsRef.current,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.05,
      },
      "-=0.1"
    );
  }, []);

  const rays = [
    [250, 250, 250, 50],
    [250, 250, 400, 100],
    [250, 250, 450, 250],
    [250, 250, 400, 400],
    [250, 250, 250, 450],
    [250, 250, 100, 400],
    [250, 250, 40, 250],
    [250, 250, 100, 100],
  ];

  const icons = [
    [250, 50],
    [400, 100],
    [450, 250],
    [400, 400],
    [250, 450],
    [100, 400],
    [40, 250],
    [100, 100],
  ];

  return (
    <div className="relative flex items-center justify-center w-[300px] sm:w-[450px] md:w-[550px] lg:w-[650px] aspect-square mx-auto mt-20 sm:mt-36 overflow-visible">
      {/* Central logo */}
      <img
        ref={logoRef}
        src="/images/central_logo.svg"
        alt="central logo"
        className="w-[70px] sm:w-[90px] lg:w-[160px] object-contain z-10"
      />

      {/* Lines */}
      <svg
        viewBox="0 0 500 500"
        className="absolute w-full h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        {rays.map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            ref={(el) => (linesRef.current[i] = el)}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#6E58F1"
            strokeWidth="1"
            strokeDasharray="10 6"
            strokeLinecap="round"
          />
        ))}
      </svg>

      {icons.map(([x, y], i) => {
        const cx = 250;
        const cy = 250;
        const dx = x - cx;
        const dy = y - cy;

        const gap =
          window.innerWidth < 640 ? 55 : window.innerWidth < 1024 ? 70 : 64;

        const length = Math.hypot(dx, dy);
        const tipX = x + (dx / length) * gap;
        const tipY = y + (dy / length) * gap;

        const posX = (tipX / 500) * 100;
        const posY = (tipY / 532) * 100;

        return (
          <img
            key={i}
            ref={(el) => (iconsRef.current[i] = el)}
            src={`/images/icon${i + 1}.svg`}
            alt={`icon${i + 1}`}
            className="absolute w-[40px] sm:w-[55px] md:w-[65px] lg:w-[80px]"
            style={{
              left: `${posX}%`,
              top: `${posY}%`,
              transform: "translate(-50%, -50%) scale(0)",
              opacity: 0,
            }}
          />
        );
      })}
    </div>
  );
};

export default Spider;
