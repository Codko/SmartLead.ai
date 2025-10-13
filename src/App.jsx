import React, { useRef, useState } from "react";
import Hero from "./Sections/Hero";
import Section2 from "./Sections/Body/Section2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Section3 from "./Sections/Body/Section3";
import Section4 from "./Sections/Body/Section4";
import Section5 from "./Sections/Body/Section5";
import Testimonials from "./Sections/Body/Testimonials";
import Section6 from "./Sections/Body/Section6";
import FAQs from "./Sections/Body/FAQs";
import Footer from "./Sections/Footer";
const App = () => {
  const [show, setShow] = useState(false);
  const logoRef = useRef(null);
  const footerref = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(logoRef.current, {
      scale: 5,
      delay: 1,
      ease: "power3.out",
    })
      .to(logoRef.current, {
        scale: 1,
        duration: 1,
        ease: "power2.out",
      })
      .to(logoRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => setShow(true),
      });
  }, []);
  return (
    <>
      {!show && (
        <div className="flex justify-center items-center h-screen overflow-hidden">
          <img ref={logoRef} src="/images/Vector.svg" alt="" />
        </div>
      )}
      {show && (
        <div className="bg-gradient-to-l from-[#e9edfa] via-[#f2f8fc] to-[#e9edfa] overflow-hidden hover:cursor-pointer">
          <Hero footer={footerref} />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Testimonials />
          <Section6 />
          <FAQs />
          <div ref={footerref}>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
