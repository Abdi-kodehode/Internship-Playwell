import React from "react";

//Components
import HeroSubpage from "../../components/hero-subpages/HeroSubpages";
import ScratchGallery from "./sections/scratch-gallery/ScratchGallery";
import CourseRecomendation from "../../components/course-recomendation/CourseRecomendation";
import ScratchCourseDetails from "./sections/scratch-course-details/ScratchCourseDetails";
import SubscriptionPlan from "../../components/subscription-plan/SubscriptionPlan";


const Scratch = () => {
  return (
    <div>
      <HeroSubpage
      background="bg-no-repeat bg-cover bg-center  bg-hero-scratch overlay-bg"
        line1="Ha det gøy"
        line2="med"
        line3="Scratch"
        text="Vær med oss ​​på vår discord-kanal. Sammen kan vi forbedre flere av våre ferdigheter."

      />
      <ScratchGallery/>
      <CourseRecomendation
        text1="Er du interessert i spill og har lyst til å lage ditt eget spill??"
        text2="Har du lyst til å lære programmering og kunne tenke deg å jobbe i denne bransjen i fremtiden?"
        text3=" Du leter etter den mest effektive måten å lære alt du trenger for å forbedre dine spillferdigheter"
      />
     <ScratchCourseDetails/>
     <SubscriptionPlan/>
    </div>
  );
};

export default Scratch;
