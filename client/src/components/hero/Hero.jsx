import React, { useLayoutEffect } from "react";
import {Link} from "react-router-dom"
//Import Icons
import {
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

//import Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

//import Marquee Text
import MarqueeText from "../marquee/MarqueeText";
//Import images

import Image from "../../assets/hero/home-hero.webp";
import Image1 from "../../assets/hero/home-hero1.webp";
import Image2 from "../../assets/hero/home-hero2.webp";
import Image3 from "../../assets/hero/home-hero3.webp";
import Image4 from "../../assets/hero/home-hero4.webp";
import Image5 from "../../assets/hero/home-hero5.webp";
import Image6 from "../../assets/hero/home-hero6.webp";
import Image7 from "../../assets/hero/home-hero7.webp";
import Image8 from "../../assets/hero/home-hero8.webp";

//Register Plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = (props) => {
  useLayoutEffect(() => {
    let timeline = gsap.timeline();

    timeline
      .from(".move__one", { yPercent: 10, duration: 0.8 }, 0)
      .from(".move__two", { yPercent: 10, duration: 0.8 }, 0)
      .from(".move__three", { yPercent: 30, duration: 0.8 }, 0);

    let scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero__container",
        start: "bottom 99%",
        end: "bottom top",
        scrub: 1,
      },
    });

    scrollTimeline
      .to(".move__one", { yPercent: -15, duration: 0.8 }, 0)
      .to(".move__two", { yPercent: -30, duration: 0.7 }, 0)
      .to(".move__three", { yPercent: -25, duration: 0.9 }, 0);
  }, []);

  return (
    <div>
      <div className="hero__container flex justify-center items-center w-full h-screen relative px-5 bg-no-repeat bg-cover bg-center  bg-hero-landingpage overflow-hidden mobile:px-1">
        <img
          src={Image}
          alt="hero"
          className="move__one absolute w-1/5 opacity-80 rounded-lg left-[30%] top-28 laptop:w-1/5 laptop:left-[36%] screen:w-1/3 mobile:opacity-100 mobile:left-[30%] mobile:top-20"
        />
        <img
          src={Image1}
          alt="hero"
          className="move__one absolute w-1/5 rounded-lg right-[12%] top-32 rotate-6 laptop:w-1/5 screen:right-12 tablet:top-52 mobile:right-2  mobile:w-1/3 "
        />
        <img
          src={Image2}
          alt="hero"
          className="move__two absolute w-1/4 h-1/6 rounded-lg left-[0%] top-[40%] laptop:w-1/4 rotate-2 screen:opacity-60  mobile:hidden"
        />
        <img
          src={Image3}
          alt="hero"
          className="move__two absolute w-1/5 rounded-lg left-10 top-28  rotate-[-8deg] tablet:top-60 mobile:w-1/3  mobile:left-2"
        />
        <img
          src={Image4}
          alt="hero"
          className="move__three absolute w-1/6 rounded-lg right-[26%] bottom-4 laptop:bottom-12 screen:w-1/4 mobile:w-1/3 mobile:bottom-16 mobile:right-[32%]"
        />
        <img
          src={Image5}
          alt="hero"
          className="move__three absolute w-[400px] rounded-lg right-[1%] top-86 rotate-2 laptop:w-1/4 screen:opacity-60 mobile:w-[120px] mobile:right-0"
        />
        <img
          src={Image6}
          alt="hero"
          className="move__one absolute w-1/6 rounded-lg left-[20%] bottom-16 rotate-2 laptop:w-2/8 laptop:bottom-32 screen:w-1/5 mobile:w-1/3  mobile:left-2 mobile:bottom-40"
        />
        <img
          src={Image7}
          alt="hero"
          className="move__two absolute  w-1/5  rounded-lg right-2 bottom-10 rotate-[-6deg] laptop:bottom-32  mobile:w-1/3 mobile:bottom-56  "
        />
        <img
          src={Image8}
          alt="hero"
          className="move__one absolute  w-[10%]  rounded-lg left-6 bottom-12 rotate-[6deg]  mobile:w-1/6 mobile:top-[44%] mobile:opacity-40 "
        />

        <div
          id="header__headline"
          className="move__one flex flex-col justify-center text-center items-center relative z-20 mobile:pb-10"
        >
          <h1 className="text-8xl font-semibold  relative screen:text-7xl tablet:text-6xl mobile:text-5xl  small-mobile:text-[2.8rem]">
            {props.line1} <br />
            {props.line2}
            <br />
            {props.line3}
          </h1>
          <p className="text-2xl pt-4 screen:text-xl mobile:text-[1rem] mobile:px-5 ">
            {props.text1}
            <br />
            {props.text2}
          </p>
          <Link to="/subscription"> <button className=" w-[200px] font-bold text-xl py-2 px-5 bg-gradient-to-r  bg-red-700 hover:opacity-80 rounded-xl mt-8 mobile:text-sm mobile:w-[140px]">
            Meld deg på
          </button></Link>
        </div>
        <div className="absolute w-full bottom-5 left-5 flex  gap-5 text-3xl screen:text-2xl screen:bottom-2 mobile:justify-center mobile:items-center">
        <a rel="noopener noreferrer" href="https://www.facebook.com/playwellgamingcenter"  target="_blank"><FaFacebook className="hover:opacity-80 cursor-pointer" /></a>
        <a rel="noopener noreferrer" href="https://www.instagram.com/playwellgaming/"  target="_blank"><FaInstagram className="hover:opacity-80 cursor-pointer" /></a>
        <a rel="noopener noreferrer" href="https://www.twitch.tv/playwellgaming"  target="_blank"><FaTwitch className="hover:opacity-80 cursor-pointer" /></a>
        <a rel="noopener noreferrer" href="https://www.tiktok.com/@playwell_esport"  target="_blank"><FaTiktok className="hover:opacity-80 cursor-pointer" /></a>
        <a rel="noopener noreferrer" href="https://twitter.com/playwellesport"  target="_blank"><FaTwitter className="hover:opacity-80 cursor-pointer" /></a>
        <a rel="noopener noreferrer" href="https://www.youtube.com/@playwellesport612"  target="_blank"><FaYoutube className="hover:opacity-80 cursor-pointer" /></a>
        </div>
      </div>
      <MarqueeText
        background="bg-zinc-900"
        text="  ✱  neste kurs starter:12.01.2023  ✱  besøk vår discord kanal  ✱  30% rabatt våren  ✱  alle kurs er digitale  ✱  Du kan når som helst bytte fra et kurs til et annet helt kostnadsfritt! "
      />
    </div>
  );
};

export default Hero;
