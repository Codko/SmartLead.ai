import React from "react";
import Plainbtn from "../Buttons/Plainbtn";

const GTM = () => {
  const card_data = [
    {
      heading: "Qualify",
      text: "leads faster",
      image: "/images/Clock_duotone_line.svg",
    },
    {
      heading: "Follow Up",
      text: "at the perfect time",
      image: "/images/Send_hor_duotone_line.svg",
    },
    {
      heading: "Optimize",
      text: "campaigns automatically",
      image: "/images/Chield_alt_duotone_line.svg",
    },
    {
      heading: "Keep",
      text: "CRM spotless & updated",
      image: "/images/lightning_duotone_line.svg",
    },
    {
      heading: "Maintain",
      text: "perfect inbox health",
      image: "/images/Message_open_duotone_line.svg",
    },
    {
      heading: "And",
      text: "so much more",
      image: "/images/Favorites_duotone.svg",
      bg: "#6E58F1",
    },
  ];
  return (
    <div className="w-full h-[998.6541748046875px] border flex justify-center items-center border-[#777] bg-gradient-to-tl from-[#6E58F11A] via-[#FAF9F6] to-[#6E58F11A] mt-[193px]">
      <div className="w-[1620px]  m-auto flex gap-[157px]">
        <div className="w-[526px]  flex flex-col gap-[40px]">
          <h1
            style={{ fontFamily: "bold" }}
            className="text-[76px] text-[#0A0A0A] leading-20"
          >
            Your <span className="text-[#6E58F1]">GTM Team</span> On Autopilot
          </h1>
          <p
            style={{ fontFamily: "regular" }}
            className="text-[20px] text-[#898989]"
          >
            Give your sales team the freedom from doing unwanted manual,
            repetitive tasks. Stop juggling between tools, repetitive workflows,
            and endless manual tasks.
          </p>
          <Plainbtn text={"Build My GTM Team"} w={"318"} />
        </div>
        <div className="w-[937px]  grid grid-cols-3  gap-4 ">
          {card_data.map((item, index) => {
            return (
              <div className="">
                <div className="">
                  <div
                    className={`w-[168.18px] h-[154.45px] border-2 border-dashed border-[#6E58F1] 
              rounded-[25.74px] flex justify-center items-center 
              hover:border-solid hover:shadow-md transition-all duration-300 
              ${item.bg ? `bg-[${item.bg}]` : ""}`}
                  >
                    <img src={item.image} alt="" className="transition-all ease-in-out duration-300 transform hover:scale-110 hover:rotate-360"/>
                  </div>
                  <h1
                    style={{ fontFamily: "semi-bold" }}
                    className={`text-[28.27px] ${
                      item.bg ? `text-[${item.bg}]` : "text-[#0A0A0A]"
                    }`}
                  >
                    {item.heading}
                  </h1>
                  <p
                    style={{ fontFamily: "medium" }}
                    className={`text-lg ${
                      item.bg ? `text-[${item.bg}]` : "text-[#7A7A7A]"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GTM;
