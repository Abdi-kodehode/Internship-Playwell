import React from "react";
import MarqueeText from "../../components/marquee/MarqueeText";
import {
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {Link} from "react-router-dom"

const HeroSubpages = (props) => {
  return (
    <div>
      <div
        className={
          "flex  items-center w-full h-screen relative pl-8  overflow-hidden " +
          props.background
        }
      >
        <div className="flex flex-col font-bold  items-start justify-center w-full h-screen  z-10 mobile:justify-center mobile:pt-28 mobile:items-center">
          <h1 className="text-8xl uppercase  laptop:text-7xl screen:text-6xl tablet:text-5xl mobile:text-4xl">
            {props.line1}
          </h1>
          <h1 className="text-8xl uppercase laptop:text-7xl screen:text-6xl tablet:text-5xl mobile:text-4xl">
            {props.line2}
          </h1>
          <h1 className="text-8xl uppercase  laptop:text-7xl screen:text-6xl tablet:text-5xl mobile:text-4xl">
            {props.line3}
          </h1>
          <p className="w-1/3 text-3xl font-thin laptop:text-2xl screen:text-xl tablet:w-[39%] mobile:w-[75%] mobile:text-center">
            {props.text}
          </p>
          <Link to="/subscription"><button className="font-bold text-xl py-2 px-5 bg-red-700 hover:opacity-80 rounded-xl mt-8  tablet:text-sm  tablet:mt-3  mobile:mb-0">
            Bli med
          </button></Link>
        </div>
        <div className="absolute w-full bottom-5 left-6 flex  gap-5 text-3xl z-10 screen:text-2xl screen:bottom-2 mobile:justify-center mobile:items-center">
          <a
            rel="noopener noreferrer"
            href="https://www.facebook.com/playwellgamingcenter"
            target="_blank"
          >
            <FaFacebook className="hover:opacity-80 cursor-pointer" />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.instagram.com/playwellgaming/"
            target="_blank"
          >
            <FaInstagram className="hover:opacity-80 cursor-pointer" />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.twitch.tv/playwellgaming"
            target="_blank"
          >
            <FaTwitch className="hover:opacity-80 cursor-pointer" />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@playwell_esport"
            target="_blank"
          >
            <FaTiktok className="hover:opacity-80 cursor-pointer" />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://twitter.com/playwellesport"
            target="_blank"
          >
            <FaTwitter className="hover:opacity-80 cursor-pointer" />
          </a>
          <a
            rel="noopener noreferrer"
            href="https://www.youtube.com/@playwellesport612"
            target="_blank"
          >
            <FaYoutube className="hover:opacity-80 cursor-pointer" />
          </a>
        </div>
      </div>
      <MarqueeText
        background="bg-zinc-900 "
        text="  ✱ neste kurs starter:12.01.2023  ✱ besøk vår discord kanal  ✱ 30% rabatt våren  ✱ alle kurs er digitale  ✱  Du kan når som helst bytte fra et kurs til et annet helt kostnadsfritt!  "
      />
    </div>
  );
};

export default HeroSubpages;
