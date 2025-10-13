import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HoverList = () => {
  const items = [
    { text1: "Lead Generation", text2: "Germany" },
    { text1: "Content Writing", text2: "France" },
    { text1: "Market Research", text2: "Spain" },
    { text1: "App Development", text2: "USA" },
    { text1: "App Development", text2: "USA" },
  ];

  const [active, setActive] = useState(2); // default center item

  return (
    <div className="">
      <ul className="flex flex-col items-center justify-between relative">
        {items.map((item, i) => {
          const isActive = i === active;

          return (
            <motion.li
              key={i}
              layout
              onMouseEnter={() => setActive(i)}
              className={`
                w-[320px] lg:w-[380px] py-4 text-center rounded-xl cursor-pointer
                border border-[#6E58F1] text-[#6E58F1] flex items-center justify-around shadow-lg shadow-[#ccc]
                bg-white
              `}
              animate={{
                scale: isActive ? 1.1 : 0.9,
                opacity: isActive ? 1 : 0.4,
                filter: isActive ? "blur(0px)" : "blur(3px)",
                zIndex: isActive ? 10 : 0,
                y: isActive ? 0 : i < active ? -30 : 30,
                width: 350,
                height: 40,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <span
                style={{ fontFamily: "regular" }}
                className="text-sm lg:text-base"
              >
                {item.text1}
              </span>
              <span
                style={{ fontFamily: "medium" }}
                className="text-xs lg:text-sm text-[#000]/80"
              >
                {item.text2}
              </span>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default HoverList;
