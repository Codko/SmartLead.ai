import React from "react";

const Companies_logo = () => {
  return (
    <div className="w-[1620px] h-[440px] rounded-[50px] bg-gradient-to-r from-[#6E58F11A] via-[#FAF9F6] to-[#6E58F11A] m-auto flex flex-col items-center justify-center mt-20">
      <div className="w-[1073px]">
        <h1
          style={{ fontFamily: "bold" }}
          className="text-[56px] text-center leading-12"
        >
          Trusted by <span className="text-[#6E58F1]">100,000+</span>{" "}
          Businesses, <br />
          <span className="text-[36px]">
            from Best agencies to Fortune 500 Companies
          </span>
        </h1>
      </div>
      <div className="w-[1024px] pt-10">
        <marquee behavior="" direction="left" >
          <div className="flex  items-center gap-20">
            <img src="/images/Vector (1).png" alt="" />
            <img src="/images/Vector (2).png" alt="" />
            <img src="/images/Vector (3).png" alt="" />
            <img src="/images/Vector (4).png" alt="" />
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default Companies_logo;
