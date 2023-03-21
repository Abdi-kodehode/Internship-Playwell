import React from "react";
//Components
import HeroSubpage from "../../components/hero-subpages/HeroSubpages";
import MinecraftGallery from "./sections/minecraft-gallery/MinecraftGallery";
import CourseRecomendation from "../../components/course-recomendation/CourseRecomendation";
import MinecraftCourseDetails from "./sections/minecraft-course-details/MinecraftCourseDetails";
import SubscriptionPlan from "../../components/subscription-plan/SubscriptionPlan";

const Maincraft = () => {
  return (
    <div>
      <HeroSubpage
        background="bg-no-repeat bg-cover bg-center  bg-hero-minecraft overlay-bg"
        line1="La oss bygge "
        line2="noe stort"
        line3="sammen."
        text="Bli med i vår discord-kanal. Der vil du møte nye kollegaer som vil hjelpe deg med å bygge en ny verden."
      />
      <MinecraftGallery />
      <CourseRecomendation
        text1="Liker du å spille dataspill og møte nye mennesker med lignende interesser?"
        text2="Vil du spille på nivået til en profesjonell dataspiller?"
        text3=" Du leter etter den mest effektive måten å lære alt du trenger for å forbedre dine spillferdigheter"
      />
      <MinecraftCourseDetails />
      <SubscriptionPlan />
    </div>
  );
};

export default Maincraft;
