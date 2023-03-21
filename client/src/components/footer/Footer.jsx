import React from 'react'
import ContactForm from "../contact-form/ContactForm"
import BranLogo from "../../assets/footer/bran.webp"
import JoobloopLogo from "../../assets/footer/jobloop.webp"
import FjordKraftLogo from "../../assets/footer/fjordkraft.webp"
import Fortnite from "../../assets/footer/fortnite-footer.webp"
import Minecraft from "../../assets/footer/minecraft-footer.webp"
import RocketLeague from "../../assets/footer/rocket-footer.webp"
import {FaFacebookF,FaInstagram ,FaTwitter , FaDiscord} from "react-icons/fa"



const Footer = () => {
  return (
    <div className="overflow:hidden position relative pt-20">
    <div className="flex justify-between bottom-0 bg-zinc-900 w-full h-full py-4 px-5 relative border-t-2 border-gray-500 tablet:px-1">
      <div className="flex flex-col gap-2 w-1/3 mobile:w-2/3 mobile:font-regular ">
        
        <h1 className="text-5xl pb-5 screen:text-4xl tablet:text-3xl tablet:pb-2">Kontakt oss:</h1>
        <a href="mailto:kontakt@playwell.no" className="text-2xl screen:text-xl tablet:text-xl  mobile:text-lg   small-mobile:text-sm">kontakt@playwell.no</a>
        <p className="text-2xl screen:text-xl  mobile:text-lg  small-mobile:text-sm">92849699 - Bergen</p>
        <p className="text-2xl screen:text-xl mobile:text-lg  small-mobile:text-sm">95522301 - Oslo og Fredrikstad</p>
        <p className="text-2xl screen:text-xl mobile:text-lg  small-mobile:text-sm">Sandakerveien 113B,0484 Oslo</p>
        <p className="text-2xl screen:text-xl  mobile:text-lg mobile:pb-10 small-mobile:text-sm">Torvbyen kjøpesenter,1607 Fredrikstad</p>
       
        <div className="flex  item-center gap-5 pt-10  absolute bottom-5 ">
          <img src={BranLogo} alt="bran-logo" className="w-[70px] h-[30px]  cursor-pointer screen:w-[60px] screen:h-[25px] mobile:w-[40px] mobile:h-[20px]" />
          <img src={JoobloopLogo} alt="joobloop-logo" className="w-[80px] h-[40px] screen:w-[60px] screen:h-[30px] mobile:w-[40px] mobile:h-[20px] cursor-pointer"/>
          <img src={FjordKraftLogo} alt="fjordkraft-logo" className="w-[130px] h-[40px] cursor-pointer screen:w-[100px] screen:h-[30px] mobile:w-[60px] mobile:h-[20px]"/>
          

        </div>
      </div>
      <div className="flex flex-col  item-center  w-1/3 mobile:w-1/3">
        <ContactForm/>
        <div className="flex justify-around text-3xl screen:text-2xl mobile:absolute mobile:bottom-5 mobile:z-0 mobile:right-0">
        <a rel="noopener noreferrer" href="https://www.facebook.com/playwellgamingcenter"  target="_blank"><FaFacebookF className="cursor-pointer  hover:text-blue-700  mobile:mr-5 small-mobile:mr-2   small-mobile:text-lg"/></a>
        <a rel="noopener noreferrer" href="https://www.instagram.com/playwellgaming/"  target="_blank"><FaInstagram className="cursor-pointer  hover:text-red-300 mobile:mr-5 small-mobile:mr-2  small-mobile:text-lg"/></a>
        <a rel="noopener noreferrer" href="https://twitter.com/playwellesport"  target="_blank"><FaTwitter className="cursor-pointer hover:text-sky-400 mobile:mr-5 small-mobile:mr-2 small-mobile:text-lg"/></a>
        <a
          rel="noopener noreferrer"
          href="https://discord.gg/cUjtqQ6p8p"
          target="_blank"
        ><FaDiscord className="cursor-pointer hover:text-purple-500 mobile:mr-5 small-mobile:mr-2 small-mobile:text-lg"/></a>
        </div>
      </div>
      <div className="w-1/3 screen:w-[200px] tablet:w-[100px] mobile:w-0">
      <img src={Fortnite} className="w-[200px] h-[500px] absolute right-0 bottom-0 z-10 tablet:w-[150px] tablet:h-[450px] mobile:w-[130px] mobile:h-[290px] mobile:bottom-12 small-mobile:w-[100px] small-mobile:h-[220px] mobile:z-10"  alt="fortnite character" />
      <img src={Minecraft} className="w-[250px] h-[300px] absolute right-[12rem] bottom-0 laptop-[10rem] screen:hidden"  alt="minecraft character" />
      <img src={RocketLeague} className="w-[60px] h-[40px] absolute right-16 bottom-2 tablet:right-10 mobile:bottom-12 small-mobile:hidden" alt="rocket league car"/> 
      </div>
    </div>
  </div>
  )
}

export default Footer
