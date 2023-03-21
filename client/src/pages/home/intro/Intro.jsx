import React, { useEffect } from "react";
//Animation
import { introReveal } from "./anmations";
//Logo Image
import Image from "../../../assets/playwell_logo.webp";
//Intro Animations
const Intro = () => {
  useEffect(() => {
    introReveal();
  }, []);
  return (
    <div
      className="bg-black fixed top-0 left-0 h-screen w-full z-[101]"
      id="intro__background"
    >
      <div
        className="flex flex-col justify-center items-center relative  w-full h-full"
        id="intro__headline"
      >
        <img
          src={Image}
          alt="logo"
          className="w-[400px] laptop:w-[300px] tablet:w-[200px] "
        />
        <h1 className="text-8xl font-bold laptop:text-6xl tablet:text-4xl">
          Playwell Online
        </h1>
      </div>
    </div>
  );
};

export default Intro;
