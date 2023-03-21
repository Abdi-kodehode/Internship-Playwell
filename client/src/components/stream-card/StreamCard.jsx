import React from "react";
import Decoration from "../../assets/stream-card.webp";
import Logo from "../../assets/playwell-logo.webp";

const StreamCard = (props) => {
  return (
    <div className="w-2/3 mobile:w-full">
      <div className="flex justify-center  items-center rounded-lg bg-no-repeat bg-cover bg-center  bg-stream w-full h-full py-10 relative overflow-hidden screen:py-8 mobile:h-auto ">
        <img
          src={Logo}
          alt="logo"
          className="absolute w-[60px] h-[30px] top-2 mobile:w-[40px] mobile:h-[20px]"
        />
        <span className="absolute text-8xl left-5 font-bold z-20 uppercase laptop:text-7xl screen:text-6xl screen:left-1 mobile:hidden">
          We are <br /> ready !
        </span>

        <div>
          <img
            src={Decoration}
            className="absolute right-0 top-1 small-mobile:hidden"
            alt="card"
          />
          <img
            src={Decoration}
            className="absolute left-0 bottom-1 small-mobile:hidden"
            alt="card"
          />
          <img
            src={Decoration}
            className="absolute right-0 bottom-1 small-mobile:hidden"
            alt="card"
          />
          <img
            src={Decoration}
            className="absolute left-0 top-1 small-mobile:hidden"
            alt="card"
          />
          <div className="flex flex-col justify-center items-center relative left-36 top-6 screen:top-3 mobile:left-0 ">
            <img
              src={props.image}
              alt="teacher"
              className={
                "w-3/4 screen:w-1/2 rounded-xl   mobile:w-2/3 mobile:px-2 " +
                props.background
              }
            />
            <span className="text-center text-4xl laptop:text-3xl screen:text-2xl mobile:text-xl">
              {props.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamCard;
