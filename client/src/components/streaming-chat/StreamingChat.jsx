import React from "react";
import Avatar1 from "../../assets/avatar/avatar1.webp";
import Avatar2 from "../../assets/avatar/avatar2.webp";
import Avatar3 from "../../assets/avatar/avatar3.webp";
import Avatar4 from "../../assets/avatar/playwell.webp";
import Avatar5 from "../../assets/avatar/avatar5.webp";
import {
  FaUsers,
  FaDoorOpen,
  FaSlidersH,
  FaPlusCircle,
  FaDiscord,
} from "react-icons/fa";

const StreamingChat = (props) => {
  return (
    <div className="rounded-xl bg-zinc-900 w-[98%]   border-[1px] border-gray-600 relative z-20 tablet:w-[75%] mobile:w-[95%] tablet:mt-0">
      <div className="flex justify-between items-center gap-4 h-[3rem]  border-b-[1px] border-gray-600 px-5 tablet:h-[1.2rem] ">
        <div className="flex gap-4">
          <div className="w-[10px] h-[10px] bg-red-500 rounded-full tablet:w-[5px] tablet:h-[5px]"></div>
          <div className="w-[10px] h-[10px] bg-orange-500 rounded-full tablet:w-[5px] tablet:h-[5px]"></div>
          <div className="w-[10px] h-[10px] bg-green-500 rounded-full tablet:w-[5px] tablet:h-[5px]"></div>
          <div className="w-[10px] h-[10px] bg-blue-500 rounded-full tablet:w-[5px] tablet:h-[5px]"></div>
        </div>
        <FaDiscord className="text-2xl tablet:text-lg" />
      </div>
      <div className="flex  px-1 ">
        <div className="flex flex-col relative items-center gap-1 py-2 bg-zinc-900  w-[15%]  my-3 rounded-xl border-[1px] border-gray-600 mx-1 small-mobile:hidden ">
          <FaUsers className="text-5xl laptop:text-4xl text-gray-100 my-2 tablet:text-2xl" />
          <img
            src={Avatar1}
            alt="Fortnite gameplay"
            className=" rounded-full w-[75px] h-[75px]  laptop:w-[60px] laptop:h-[60px] screen:w-[40px] screen:h-[40px]  tablet:hidden"
          />
          <p className="text-purple-500 screen:text-sm tablet:hidden">Sakura</p>
          <img
            src={Avatar2}
            alt="Fortnite gameplay"
            className=" rounded-full w-[75px] h-[75px] laptop:w-[60px] laptop:h-[60px] screen:w-[40px] screen:h-[40px] tablet:w-[35px] tablet:h-[35px]"
          />
          <p className="text-sky-500  screen:text-sm mobile:text-[0.7rem]">
            Trond
          </p>
          <img
            src={Avatar3}
            alt="Fortnite gameplay"
            className=" rounded-full w-[75px] h-[75px] laptop:w-[60px] laptop:h-[60px] screen:w-[40px] screen:h-[40px] tablet:w-[35px] tablet:h-[35px]"
          />
          <p className="text-red-500 screen:text-sm mobile:text-[0.7rem]">
            Miqu
          </p>
          <img
            src={Avatar4}
            alt="Fortnite gameplay"
            className=" rounded-full w-[75px] h-[75px] laptop:w-[60px] laptop:h-[60px] screen:w-[40px] screen:h-[40px] tablet:w-[35px] tablet:h-[35px]"
          />
          <p className="text-orange-500 screen:text-sm mobile:text-[0.7rem]">
            Instr
          </p>
          <img
            src={Avatar5}
            alt="Fortnite gameplay"
            className=" rounded-full w-[75px] h-[75px] laptop:w-[60px] laptop:h-[60px] screen:w-[40px] screen:h-[40px] tablet:w-[35px] tablet:h-[35px]"
          />
          <p className="text-teal-500 screen:text-sm mobile:text-[0.7rem]">
            Lionel
          </p>
          <FaDoorOpen className="text-5xl laptop:text-4xl bottom-2 tablet:text-2xl" />
        </div>
        <div className="flex flex-col gap-2 w-full h-full  mx-auto my-3 tablet:gap-1">
          <div className="relative">
            <img
              src={props.image}
              alt="game"
              className=" rounded-xl border-[1px] border-gray-600 w-full tablet:h-[200px] "
            />
            <img
              src={props.instructor}
              alt="Instructor"
              className="rounded-xl w-1/5 from-black via-red-900 to-black bg-gradient-to-r absolute right-6 top-4 screen:top-2 screen:right-5  tablet:top-1 tablet:right-6 mobile:right-4 mobile:top-3 mobile:rounded-lg "
            />
          </div>
          <div className="w-full bg-zinc-900 border-[1px] border-gray-600 rounded-xl">
            <div className="flex items-center justify-between h-[2rem] border-b-[1px] border-gray-600">
              <h5 className="text-gray-100 pl-5 tablet:text-[1rem] mobile:text-[0.8rem] mobile:pl-1">
                #Playwell Online Chat
              </h5>
              <div className=" flex text-gray-200 gap-4 pr-5">
                <FaUsers />
                <FaSlidersH />
              </div>
            </div>
            <div className="flex-col pt-2 px-5 tablet:pt-1 tablet:px-2 small-mobile:hidden">
              <div className="flex gap-4 items-center pb-2 ">
                <img
                  src={Avatar4}
                  alt="Fortnite gameplay"
                  className=" rounded-full w-[50px] laptop:w-[30px] laptop:h-[30px] "
                />

                <p className="text-orange-500 laptop:text-lg tablet:text-sm mobile:text-[0.8rem]">
                  Instr
                </p>
                <p className="laptop:text-sm tablet:text-sm mobile:text-[0.6rem]">
                  Today at 2.39pm
                </p>
              </div>
              <p className="pb-5  laptop:text-lg tablet:text-sm tablet:pb-2 mobile:text-[0.6rem]">
                {props.chat1}
              </p>
              <hr className="opacity-20" />
            </div>
            <div className="flex-col pt-2 px-5 py-1 tablet:px-2">
              <div className="flex gap-4 items-center pb-2 ">
                <img
                  src={Avatar5}
                  alt="Fortnite gameplay"
                  className=" rounded-full w-[50px] laptop:w-[30px] laptop:h-[30px]"
                />

                <p className="text-sky-500 laptop:text-lg tablet:text-sm mobile:text-[0.8rem]">
                  Lionel
                </p>
                <p className="laptop:text-sm mobile:text-[0.6rem]">
                  Today at 2.39pm
                </p>
              </div>
              <p className="pb-5 laptop:text-lg tablet:pb-0  tablet:text-sm mobile:text-[0.6rem]">
                {props.chat2}
              </p>
              <hr className="opacity-20 tablet:hidden" />
            </div>
            <div className="flex justify-between  items-center px-5 tablet:hidden">
              <div className="flex  items-center  h-[3.1rem] tablet:h-full ">
                <p className="laptop:text-lg mobile:text-[0.6rem]">
                  Send Message:
                </p>
              </div>
              <FaPlusCircle className="text-2xl tablet:hidden" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamingChat;
