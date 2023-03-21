import React from "react";

const CoursesCard = (props) => {
  return (
    <div className="flex flex-col w-full bg-zinc-900 backdrop-blur-40 rounded-lg   overflow-hidden ">
      <div className=" w-full h-[300px] rounded-t-xl ">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="flex  flex-col w-full  gap-1 text-gray-300 pb-4 tablet:pb-1 ">
        <h2 className="text-4xl   pt-2 pb-5 text-center big-screen:text-4xl laptop:text-3xl tablet:text-2xl ">
          {props.title}
        </h2>
        <div className="flex justify-between items-center  border-y-2 border-gray-400/20 big-screen:text-3xl laptop:text-2xl tablet:text-xl">
          <span className="px-5 tablet:px-2">{props.day1}</span>
          <span className="px-5 tablet:px-2">{props.time1}</span>
        </div>
        <div className="flex justify-between border-b-2 border-gray-400/20 big-screen:text-3xl laptop:text-2xl tablet:text-xl ">
          <span className="px-5 tablet:px-2">{props.day2}</span>
          <span className="px-5 tablet:px-2">{props.time2}</span>
        </div>
        <div className="py-5">
          <a
            rel="noopener noreferrer"
            href="https://discord.gg/cUjtqQ6p8p"
            target="_blank"
          >
        
            <button className="font-bold text-xl py-2 px-5 bg-red-700 hover:opacity-80 rounded-xl mt-6 tablet:text-sm  tablet:mt-3  mobile:mb-0">
              Bli med
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
