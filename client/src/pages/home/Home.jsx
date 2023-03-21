import React from "react";
//Components and Sections
import Intro from "./intro/Intro";
import Hero from "../../components/hero/Hero";
import TextSlide from "../../components/text-slide/TextSlide";
import AboutCourses from "./sections/about-courses/AboutCourses";
import Comunity from "./sections/comunity/Comunity";
import AboutTeam from "./sections/about-team/AboutTeam";
import FaqHome from "./sections/faq-home/FaqHome";
import Gallery from "./sections/gallery/Gallery";
import CoursesPricing from "./sections/courses-pricing/CoursesPricing";

const Home = () => {
  return (
    <div>
      <Intro />
      <Hero
        line1="Lær noe nytt"
        line2="Bli bedre"
        line3="Møt nye venner"
        text1="En trygg, sosial og lærerik digital arena for unge gamere."
        text2="Dette tilbudet er rettet mot barn og unge i alderen 7-16 år."
      />
      <AboutCourses />
      <CoursesPricing />
      <Comunity />
      <TextSlide />
      <AboutTeam />
      <FaqHome />
      <Gallery />
    </div>
  );
};

export default Home;
