import React from "react";
import "./index.css";
import Hero from "./section/Hero";
import Section1 from "./section/Body/Section1";
import Section2 from "./section/Body/Section2";
import Testimonials from "./section/Body/Testimonials";
import Workflow_Section from "./section/Body/Workflow";
import FAQ_Section from "./section/Body/Faq";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div className="">
      <Hero />
      <Section1 />
      <Section2 />
      <Testimonials />
      <Workflow_Section />
      <FAQ_Section />
      <Footer />
    </div>
  );
};

export default App;
