import React from "react";
//Components
import Hero from "../../components/hero/Hero";
import GamingClubGallery from "./sections/gaming-clubb-gallery/GamingClubGallery";
import CourseRecomendation from "../../components/course-recomendation/CourseRecomendation";
import GamingClubDetails from "./sections/gaming-club-details/GamingClubDetails";
import SubscriptionPlan from "../../components/subscription-plan/SubscriptionPlan";


const RocketLeague = () => {
  return (
    <div>
      <Hero
        line1="Spill med andre"
        line2="jevnaldrende"
        line3="og likesinnede"
        text1="På gamingklubb vil du møte nye venner"
        text2="med lignende interesser."
      />
      <GamingClubGallery />
      <CourseRecomendation
        text1="Liker du å spille dataspill og møte nye mennesker med lignende interesser?"
        text2="Vil du spille på nivået til en profesjonell dataspiller?"
        text3=" Du leter etter den mest effektive måten å lære alt du trenger for å forbedre dine spillferdigheter"
      />
      <GamingClubDetails />
      <SubscriptionPlan />
    </div>
  );
};

export default RocketLeague;
