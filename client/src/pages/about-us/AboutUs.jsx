import React from "react";
//Components and Sections
import Hero from "../../components/hero/Hero";
import AboutTeam from "./sections/about-team/AboutTeam";
import AboutCompany from "./sections/about-company/AboutCompany";
import AboutValues from "./sections/about-values/AboutValues";
import FaqHome from "../home/sections/faq-home/FaqHome";
import VisitUs from "./sections/visit-us/VisitUs";

const AboutUs = () => {
  return (
    <div>
      <Hero
        line1="Forent med lidenskap"
        line2="det vi gjør."
        text1=""
        text2=""
      />
      <AboutValues />
      <AboutTeam />
      <AboutCompany />
      <FaqHome />
      <VisitUs/>
    </div>
  );
};

export default AboutUs;
