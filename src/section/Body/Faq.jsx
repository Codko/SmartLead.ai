import React, { useEffect, useRef } from "react";
import { FAQ } from "../../components/Faq/Faq";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sampleFaqs = [
  {
    index: 1,
    question: "What makes this FAQ component special?",
    answer:
      "This FAQ component features modern design with smooth animations, responsive layout, search functionality, and customizable color schemes. It's built with React and Tailwind CSS for optimal performance and beautiful aesthetics.",
  },
  {
    index: 2,
    question: "How do I customize the color scheme?",
    answer:
      "You can pass a prop called `colorScheme` (e.g. blue, purple, green) to the FAQ component to change its theme.",
  },
  {
    index: 3,
    question: "Is it searchable?",
    answer:
      "Yes! If you pass `searchable={true}`, it shows a search input to filter questions.",
  },
  {
    index: 4,
    question: "Can I have animations on FAQ expansion?",
    answer:
      "The FAQ component already animates the answer reveal (slide + fade). You can further enhance with scroll animations externally.",
  },
  {
    index: 5,
    question: "Is it mobile friendly?",
    answer:
      "Yes, it's responsive across screen sizes with Tailwind CSS classes.",
  },
];

export default function FAQ_Section() {
  const sectionRef = useRef(null);
  const faqItemsRefs = useRef([]);


  faqItemsRefs.current = [];

  const addToRefs = (el) => {
    if (el && !faqItemsRefs.current.includes(el)) {
      faqItemsRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      
      tl.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      });

     
      tl.from(
        faqItemsRefs.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mt-20 mb-20" ref={sectionRef}>
      <div>
        <FAQ
          faqs={sampleFaqs}
          colorScheme="blue"
          searchable
        />
      </div>
      <div className="hidden">
        {sampleFaqs.map((faq, idx) => (
          <div key={idx} ref={addToRefs}></div>
        ))}
      </div>
    </div>
  );
}
