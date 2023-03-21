import React from "react";
import Avatar1 from "../../../../assets/avatar/avatar.webp";
import Avatar2 from "../../../../assets/avatar/playwell.webp";
import Avatar3 from "../../../../assets/avatar/avatar2.webp";
import Avatar4 from "../../../../assets/avatar/avatar3.webp";
import Avatar5 from "../../../../assets/avatar/avatar4.webp";
import Avatar6 from "../../../../assets/avatar/avatar5.webp";
import Avatar7 from "../../../../assets/avatar/avatar1.webp";
import Avatar8 from "../../../../assets/avatar/avatar7.webp";
import Avatar9 from "../../../../assets/avatar/avatar6.webp";
import Avatar10 from "../../../../assets/avatar/avatar8.webp";
import Planet from "../../../../assets/comunity.webp";
import Header from "../../../../components/header/Header";

const Comunity = () => {
  return (
    <div className="h-full  relative overflow-hidden pt-20 pb-20 tablet:pb-5 mobile:py-0">
      <div className="overflow-hidden pb-10 mobile:py-8">
        <Header header="Bli med i fellesskapet vårt på Discord" />
      </div>
      <div className=" relative w-full h-[62vh] flex justify-center items-center mobile:bg-no-repeat mobile:h-full mobile:py-5 ">
        <img
          src={Planet}
          alt="planet"
          className="animate-spin-slow hidden mobile:block mobile:w-[400px]  mobile:h-[390px] small-mobile:w-[320px] small-mobile:h-[320px] "
        />
        <img
          className="w-[120px] h-[120px] rounded-full absolute top-[2%] left-[5%] z-20 laptop:left-12  screen:top-[18%] screen:left-[3%] tablet:w-[80px] tablet:h-[80px] mobile:w-[50px] mobile:h-[50px] mobile:left-[10%] mobile:top-[25%] small-mobile:left-[10%]"
          src={Avatar1}
          alt="avatar"
        />
        <a
          rel="noopener noreferrer"
          href="https://discord.gg/cUjtqQ6p8p"
          target="_blank"
        >
          <img
            className="w-[120px] h-[120px] rounded-full  absolute bottom-44 left-[50%] z-20 tablet:w-[80px] tablet:h-[80px] tablet:top-[40%] mobile:left-[45%] hover:scale-150 transition-all delay-300 cursor-pointer  "
            src={Avatar2}
            alt="avatar"
          />
        </a>
        <img
          className="w-[120px] h-[120px] rounded-full absolute bottom-20 left-[30%] z-20 tablet:w-[80px] tablet:h-[80px] tablet:bottom-[20%] mobile:w-[50px] mobile:h-[50px] mobile:left-[35%] small-mobile:left-[15%]"
          src={Avatar3}
          alt="avatar"
        />
        <img
          className="w-[120px] h-[120px] rounded-full absolute right-[18%] top-[40%]  z-20 tablet:w-[80px] tablet:h-[80px] tablet:hidden"
          src={Avatar4}
          alt="avatar"
        />
        <img
          className="w-[120px] h-[120px] rounded-full absolute right-[30%] bottom-0 z-20 tablet:w-[80px] tablet:h-[80px] tablet:bottom-[10%] mobile:w-[50px] mobile:h-[50px] mobile:bottom-[15%] small-mobile:right-[10%]"
          src={Avatar5}
          alt="avatar"
        />
        <img
          className="w-[120px] h-[120px] rounded-full absolute left-[24%] top-20 z-20 laptop:top-24 laptop:left-[24%] screen:top-[20%] screen:left-[22%] tablet:w-[80px] tablet:h-[80px] mobile:hidden"
          src={Avatar6}
          alt="avatar"
        />
        <img
          className="w-[120px] h-[120px] rounded-full absolute top-10 left-[50%] z-20 tablet:w-[80px] tablet:h-[80px] tablet:top-[18%] mobile:top-[10%] mobile:w-[50px] mobile:h-[50px]  "
          src={Avatar7}
          alt="avatar"
        />
        <img
          className="w-[120px] h-[120px] rounded-full absolute bottom-[3%] left-[2%] z-20 laptop:bottom-[6%] screen:bottom-[13%] tablet:w-[80px] tablet:h-[80px] tablet:bottom-[19%] mobile:w-[50px] mobile:h-[50px] mobile:left-[10%] mobile:top-52 small-mobile:left-[0%] small-mobile:top-40"
          src={Avatar8}
          alt="avatar"
        />
        <img
          className="w-[120px] h-[120px] rounded-full absolute right-20 top-[7%]  z-20 laptop:top-20 laptop:right-[5%] tablet:w-[80px] tablet:h-[80px] mobile:w-[50px] mobile:h-[50px] mobile:top-[30%] mobile:right-[10%] small-mobile:right-[0%]"
          src={Avatar9}
          alt="avatar"
        />
        <img
          className="w-[120px] h-[120px] rounded-full absolute right-20 bottom-[9%] z-20 laptop:bottom-[13%] laptop:right-[5%]  tablet:w-[80px] tablet:h-[80px] tablet:bottom-[20%]  mobile:w-[50px] mobile:h-[50px] mobile:bottom-[30%] mobile:right-[12%] small-mobile:right-[0%]"
          src={Avatar10}
          alt="avatar"
        />
        <div className="w-[20%] h-[2px] bg-red-500/60 absolute left-[6%] rotate-[6deg] top-[22%]  mobile:hidden  "></div>
        <div className="w-[28%] h-[2px] from-white/80 via-green-500/80 to-red-500/80 bg-gradient-to-r absolute left-[4%] rotate-[-40deg] top-[57%] screen:rotate-[-50deg] tablet:rotate-[-60deg] tablet:w-[37%] tablet:left-[-4%] tablet:top-[55%] mobile:hidden"></div>
        <div className="w-[21%] h-[2px]  from-gray-600/80 via-green-500/80 to-red-500/80 bg-gradient-to-l absolute left-[-3%] rotate-[-84deg] top-[50%] laptop:w-[32%] laptop:left-[-10%] mobile:hidden"></div>
        <div className="w-[30%] h-[2px] bg-purple-500/60 absolute left-[25%] rotate-[18deg] top-[38%] screen:top-[42%] screen:left-[30%] tablet:rotate-[30deg] tablet:top[40%] mobile:hidden"></div>
        <div className="w-[20%] h-[2px]  from-green-600/80 via-blue-500/80 to-pink-500/80 bg-gradient-to-r absolute left-[32%] rotate-[-18deg] top-[65%] tablet:w-[30%] tablet:rotate-[-40deg] mobile:hidden"></div>
        <div className="w-[77%] h-[2px] from-pink-600/80 via-teal-500/80 to-purple-500/80 bg-gradient-to-r absolute left-[4%] rotate-[-8deg] top-[65%] laptop:w-[70%] tablet:w-[58%] tablet:top-[60%] tablet:rotate-[-26deg] mobile:hidden "></div>
        <div className="w-[17%] h-[2px]  bg-green-500 absolute left-[22%] rotate-[70deg] top-[50%] screen:w-[24%] tablet:w-[40%] tablet:left-[10%] mobile:hidden"></div>
        <div className="w-[66%] h-[2px]  from-blue-600/80 via-teal-500/80 to-purple-500/80 bg-gradient-to-r absolute left-[27%] rotate-[-2deg] top-[20%] mobile:hidden"></div>
        <div className="w-[20%] h-[2px] from-yellow-600/80 via-pink-500/80 to-white-500/80 bg-gradient-to-r absolute right-[30%] rotate-[32deg] bottom-[30%] laptop:rotate-[50deg] tablet:rotate-[75deg] tablet:w-[33%] tablet:right-[22%] mobile:hidden"></div>
        <div className="w-[25%] h-[2px] from-blue-600/80 via-teal-500/80 to-purple-500/80 bg-gradient-to-l absolute right-[7%] rotate-[-12deg] bottom-[15%] tablet:bottom-[25%] tablet:rotate-[-21deg] mobile:hidden "></div>
        <div className="w-[18%] h-[2px] bg-pink-500/60 absolute right-[-1%] rotate-[90deg] top-[44%] laptop:top-[50%] laptop:right-[3%] screen:w-[30%]  screen:right-[-2%] tablet:w-[40%] tablet:right-[-8%]  mobile:hidden"></div>
        <div className="w-[12%] h-[2px] bg-sky-500/60 absolute right-[41%] rotate-[90deg] top-[39%] screen:right-[35%] mobile:hidden "></div>
        <div className="w-[15%] h-[2px] from-blue-600/80 via-teal-500/80 to-purple-500/80 bg-gradient-to-r absolute right-[7%] rotate-[28deg] bottom-[35%] tablet:hidden  mobile:hidden"></div>
        <div className="w-[15%] h-[2px] bg-red-500/60 absolute right-[7%] rotate-[-36deg] top-[40%] tablet:hidden mobile:hidden"></div>
        <div className="w-[40%] h-[2px] from-blue-600/80 via-teal-500/80 to-red-500/80 bg-gradient-to-l absolute right-[7%] rotate-[-14deg] top-[40%] tablet:top-[35%] tablet:right-[8%] tablet:rotate-[-25deg] mobile:hidden"></div>
        <div className="w-[40%] h-[2px] from-pink-600/80 via-green-500/80 to-red-500/80 bg-gradient-to-r absolute right-[7%] rotate-[12deg] bottom-[28%] tablet:bottom-[40%] tablet:rotate-[31deg] mobile:hidden "></div>
        <div className="w-[35%] h-[2px] from-purple-600/80 via-teal-500/80 to-purple-500/80 bg-gradient-to-r absolute right-[32%] rotate-[8deg] bottom-[12%] laptop:rotate-[14deg] tablet:bottom-[26%] mobile:hidden"></div>
      </div>
    </div>
  );
};

export default Comunity;
