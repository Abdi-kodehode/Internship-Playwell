import React from "react";
import SubscriptionPlan from "../../components/subscription-plan/SubscriptionPlan";

//import Pricingtest from "../../components/pricing-card/Pricingtest";
const Subscription = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center overflow-hidden relative  pt-[6.2rem] pb-10 ">
      <SubscriptionPlan />
    </div>
  );
};

export default Subscription;
