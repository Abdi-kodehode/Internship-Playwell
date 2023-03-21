import React, { useEffect, useRef } from "react";
import Header from "../../components/header/Header";
//Images
import Diamond from "../../assets/cards/diamond.webp";
import Fire from "../../assets/cards/fire.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import FortniteFly from "../../assets/fortnitefly1.webp";

const PricingCard = () => {
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
      className="w-full h-full flex flex-col justify-center  overflow-hidden relative screen:pt-20"
      ref={pricingContainer}
    >
      <div className="overflow-hidden pb-10 tablet:pb-10 mobile:py-8  ">
        <Header header="Bli med nå" />
      </div>
      <div className="flex justify-center gap-10 items-center  py-20 relative screen:pb-10 screen:gap-2  tablet:py-0 tablet:pt-16 tablet:gap-1 mobile:gap-1 ">
        <div className="absolute from-blue-500/20  to-purple-500/20 bg-gradient-to-b w-[50%] h-[60%] top-[25%] right-[25%] rounded-full blur-2xl backdrop-xl screen:w-full screen:right-0 "></div>
        <div
          className="absolute right-[0%] top-[-510px] z-20 laptop:right-[-40%] screen:right-[-70%] mobile:right-[-100%] mobile:top-[-20rem]"
          ref={flying}
        >
          <img
            src={FortniteFly}
            alt="fortnite"
            className="w-[400px] h-[400px] mobile:w-[250px] mobile:h-[250px]"
          />
        </div>
        <div className="tablet:pb-10 tablet:py-0 ">
          <div className="bg-black/60 w-full px-36 h-[620px] border border-indigo-700 shadow-lg shadow-indigo-700/50  rounded-xl relative laptop:px-24 screen:px-20  tablet:px-14 tablet:h-[565px]  mobile:w-[200px] mobile:h-[450px] mobile:px-1 mobile:pb-2 small-mobile:w-[150px] small-mobile:h-[420px]  ">
            <div className="flex items-center relative justify-center ">
              <img
                src={Fire}
                alt="Fire"
                className="absolute w-[178px] h-[167px] tablet:w-[150px] tablet:h-[130px] mobile:w-[120px] mobile:h-[100px]"
              />
            </div>
            <div className="pt-20 text-center tablet:pt-16 mobile:pt-12 ">
              <h1 className="  text-5xl pt-5 mobile:text-3xl  ">Basic</h1>
              <h2 className="text-5xl pt-5  pb-1  mobile:pt-2 mobile:text-3xl  ">
                190 NOK
              </h2>
              <p className="text-2xl tablet:text-xl mobile:text-sm">
                Hver måned
              </p>

              <ul className=" flex flex-col gap-2 pt-5 text-2xl tablet:text-xl tablet:gap-0 mobile:text-lg small-mobile:text-sm  ">
                <li className="text-3xl tablet:text-2xl mobile:text-xl small-mobile:text-lg">
                  Minecraft
                </li>
                <li className="text-3xl tablet:text-2xl mobile:text-xl small-mobile:text-lg">
                  Fortnite
                </li>
                <li className="text-3xl tablet:text-2xl mobile:text-xl small-mobile:text-lg">
                  Koding
                </li>
              </ul>
              <p className="text-xl pt-5 underline tablet:text-lg mobile:text-sm">
                Fire kursdager
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className="absolute bottom-5 py-2 px-2 w-[150px] font-bold rounded-xl bg-red-700 shadow-lg shadow-red-700/50 text-2xl hover:opacity-80 mobile:text-lg mobile:mb-2 mobile:w-[100px] small-mobile:mb-3 mobile:px-0 mobile:py-1 mobile:bottom-2">
                Kjøp
              </button>
            </div>
          </div>
        </div>
        <div className="tablet:pb-10 tablet:py-0 ">
          <div className="bg-black/60 w-full px-36 h-[620px] border border-indigo-700 shadow-lg shadow-indigo-700/50  rounded-xl relative laptop:px-24 screen:px-20  tablet:px-14 tablet:h-[565px]  mobile:w-[200px] mobile:h-[450px] mobile:px-1 mobile:pb-2 small-mobile:w-[150px] small-mobile:h-[420px]  ">
            <div className="flex items-center relative justify-center ">
              <img
                src={Diamond}
                alt="Diamond"
                className="absolute w-[178px] h-[167px] tablet:w-[150px] tablet:h-[130px] mobile:w-[120px] mobile:h-[100px]"
              />
            </div>
            <div className="pt-20 text-center tablet:pt-16 mobile:pt-12 ">
              <h1 className="  text-5xl pt-5 mobile:text-3xl  ">Basic</h1>
              <h2 className="text-5xl pt-5  pb-1  mobile:pt-2 mobile:text-3xl  ">
                390 NOK
              </h2>
              <p className="text-2xl tablet:text-xl mobile:text-sm">
                Hver måned
              </p>

              <ul className=" flex flex-col gap-2 pt-5 text-2xl tablet:text-xl tablet:gap-0 mobile:text-lg small-mobile:text-sm  ">
                <li className="text-3xl tablet:text-2xl mobile:text-xl small-mobile:text-lg">
                  Minecraft
                </li>
                <li className="text-3xl tablet:text-2xl mobile:text-xl small-mobile:text-lg">
                  Fortnite
                </li>

                <li className="text-3xl tablet:text-2xl mobile:text-xl small-mobile:text-lg">
                  Koding
                </li>
                <li className="text-3xl tablet:text-2xl mobile:text-xl small-mobile:text-lg">
                  Roblox
                </li>
              </ul>
              <p className="text-xl pt-5 underline tablet:text-lg mobile:text-sm">
                Fire kursdager
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className="absolute bottom-5 py-2 px-2 w-[150px] font-bold rounded-xl bg-red-700 shadow-lg shadow-red-700/50 text-2xl hover:opacity-80 mobile:text-lg mobile:mb-2 mobile:w-[100px] small-mobile:mb-3 mobile:px-0 mobile:py-1 mobile:bottom-2">
                Kjøp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
