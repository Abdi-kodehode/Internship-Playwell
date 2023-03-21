import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import FortniteFly from "../../../../assets/fortnitefly1.webp";
import SubscriptionPlan from "../../../../components/subscription-plan/SubscriptionPlan";

const CoursesPricing = () => {
  gsap.registerPlugin(ScrollTrigger);
  const pricingContainer = useRef(null);
  const flying = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: pricingContainer.current,
        start: "top -1px",
        end: "+=1200",
        scrub: 1,
      },
    });

    tl.to(flying.current, {
      xPercent: -1200,
      yPercent: 800,
      scale: 0.8,
      ease: "easeOut",
    });
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      id="subscription__container"
      ref={pricingContainer}
    >
      <div className="absolute from-blue-500  to-purple-500 bg-gradient-to-b w-[50%] h-[70%] top-[25%] right-[25%] rounded-full blur-2xl backdrop-xl screen:w-full screen:right-0 "></div>
      <div className="h-full  relative overflow-hidden  bg-black/80 z-20 ">
        <div
          className="absolute right-[0%] top-[-420px] z-20 laptop:right-[-40%] screen:right-[-70%] small-mobile:right-[-80%] mobile:top-0"
          ref={flying}
        >
          <img
            src={FortniteFly}
            alt="fortnite"
            className="w-[400px] h-[400px] tablet:w-[250px] tablet:h-[250px]"
          />
        </div>
        <SubscriptionPlan />
      </div>
    </div>
  );
};

export default CoursesPricing;
