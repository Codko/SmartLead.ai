import React from "react";
import Companies_logo from "../../components/Companies_logo/Companies_logo";
import FeaturesCard from "../../components/Cards/FeaturesCard";
import Integration_cards from "../../components/Cards/Integration_cards";
import Simple_card from "../../components/Cards/Simple_card";

const Section1 = () => {
  return (
    <div>
      <Companies_logo />
      <FeaturesCard />
      <Integration_cards/>
      <Simple_card/>
    </div>
  );
};

export default Section1;
