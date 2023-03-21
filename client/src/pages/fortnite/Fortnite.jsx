import React from "react";
import HeroSubpage from "../../components/hero-subpages/HeroSubpages";
import FornitetGallery from "./sections/fortnite-gallery/FortniteGallery";
import CourseRecomendation from "../../components/course-recomendation/CourseRecomendation";
import FortniteCourseDetails from "./sections/fortnite-course-details/fortniteCourseDetails";
//import SubscriptionPlan from '../../components/subscription-plan/SubscriptionPlan';
import FortniteCourse from "./sections/fortnite-course/FortniteCourse"
import SubscriptionPlan from "../../components/subscription-plan/SubscriptionPlan";


const Maincraft = () => {
  return (
    <div>
      <HeroSubpage
        background="bg-no-repeat bg-cover bg-top  bg-hero-fortnite overlay-bg"
        line1="Vi skal hjelpe"
        line2="deg til å bli "
        line3="enda bedre!"
        text="Vær med oss ​​på vår discord-kanal. Sammen kan vi forbedre flere av våre ferdigheter."
      />
      <FornitetGallery />
      <CourseRecomendation
        text1="Liker du å spille dataspill og møte nye mennesker med lignende interesser?"
        text2="Vil du spille på nivået til en profesjonell dataspiller?"
        text3=" Du leter etter den mest effektive måten å lære alt du trenger for å forbedre dine spillferdigheter"
      />
      <FortniteCourseDetails />
      <FortniteCourse/>
      <SubscriptionPlan/>
    </div>
  );
};

export default Maincraft;
