import React, { useContext } from "react";
//Images
import Diamond from "../../assets/cards/diamond.webp";
import Fire from "../../assets/cards/fire.webp";
//import Context
import { UserContext } from "../../context/context";

const PricingCard = ({ price, handleSubscription, userSubscriptions }) => {
  const [state] = useContext(UserContext);
  const dynamicDescription = () => {
    if (price.nickname === "Basic") {
      return (
        <>
          <li className="text-3xl tablet:text-2xl mobile:text-xl small-mobile:text-lg">Minecraft</li>
          <li className="text-3xl tablet:text-2xl mobile:text-xl small-mobile:text-lg">Fortnite</li>
          <li className="text-3xl tablet:text-2xl mobile:text-xl small-mobile:text-lg">Koding</li>
        </>
      );
    } else if (price.nickname === "Premium") {
      return (
        <>
          <li className="text-3xl tablet:text-2xl mobile:text-xl small-mobile:text-lg">Minecraft</li>
          <li className="text-3xl tablet:text-2xl mobile:text-xl small-mobile:text-lg">Fortnite</li>

          <li className="text-3xl tablet:text-2xl mobile:text-xl small-mobile:text-lg">Koding</li>
          <li className="text-3xl tablet:text-2xl mobile:text-xl small-mobile:text-lg">Roblox</li>
        </>
      );
    }
  };
  const dynamicImage = () => {
    if (price.nickname === "Basic") {
      return (
        <img
          src={Fire}
          alt="Fire"
          className="absolute w-[178px] h-[167px] tablet:w-[150px] tablet:h-[130px] mobile:w-[120px] mobile:h-[100px]"
        />
      );
    } else if (price.nickname === "Premium") {
      return (
        <img
          src={Diamond}
          alt="Fire"
          className="absolute w-[178px] h-[167px] tablet:w-[150px] tablet:h-[130px] mobile:w-[120px] mobile:h-[100px]"
        />
      );
    }
  };

  const buttonText = () => {
    return state && state.token ? "Kjøp" : "Meld deg ";
  };

  return (
    <div>
      <div className="tablet:pb-10 tablet:py-0  ">
        <div className="bg-black/60 w-full px-36 h-[620px] border border-indigo-700 shadow-lg shadow-indigo-700/50  rounded-xl relative laptop:px-24 screen:px-20  tablet:px-14 tablet:h-[565px]  mobile:w-[190px] mobile:h-[450px] mobile:px-1 mobile:pb-2 small-mobile:w-[150px] small-mobile:h-[420px]  ">
          <div className="flex items-center relative justify-center ">
            {dynamicImage()}
          </div>
          <div className="pt-20 text-center tablet:pt-16 mobile:pt-12 ">
            <h1 className="  text-5xl pt-5 mobile:text-3xl  ">
              {price.nickname}
            </h1>
            <h2 className="text-5xl pt-5  pb-1  mobile:pt-2 mobile:text-3xl  ">
              {(price.unit_amount / 100).toLocaleString({
                style: "currency",
                currency: "NOK",
              })}{" "}
              NOK
            </h2>
            <p className="text-2xl tablet:text-xl mobile:text-sm">Hver måned</p>

            <ul className=" flex flex-col gap-2 pt-5 text-2xl tablet:text-xl tablet:gap-0 mobile:text-lg small-mobile:text-sm  ">
              {dynamicDescription()}
            </ul>
            <p className="text-xl pt-5 underline tablet:text-lg mobile:text-sm">
              Fire kursdager
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={(e) => handleSubscription(e, price)}
              className="absolute bottom-5 py-2 px-2 w-[150px] font-bold rounded-xl bg-red-700 shadow-lg shadow-red-700/50 text-2xl hover:opacity-80 mobile:text-lg mobile:mb-2 mobile:w-[100px] small-mobile:mb-3 mobile:px-0 mobile:py-1 mobile:bottom-2"
            >
              {userSubscriptions && userSubscriptions.includes(price.id)
                ? "Access plan"
                : buttonText()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
