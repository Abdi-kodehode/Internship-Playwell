import React from "react";
import {Link} from "react-router-dom"

const CoursesDescription = (props) => {
  return (
    <div className="w-1/2 relative z-20 px-5 flex items-center  tablet:w-full tablet:px-2 mobile:mb-1 ">
      <div className="w-[90%] z-20 screen:w-[98%] m-auto tablet:w-[85%] whitespace-pre-wrap tablet:gap-2 tablet:flex tablet:flex-col tablet:items-center  tablet:px-0 mobile:w-full mobile:gap-0  ">
        <h4 className="text-7xl font-bold opacity-90 laptop:text-6xl screen:text-5xl tablet:mt-4 tablet:text-3xl mobile:mt-1 mobile:text-2xl">
          {props.title}
        </h4>
        <p className="text-3xl pt-10 leading-10  laptop:text-2xl screen:pt-5 screen:text-xl  tablet:font-thin tablet:text-[1.4rem] tablet:leading-[1.6rem] tablet:px-5 tablet:pt-2 mobile:leading-[1.5rem] mobile:text-[1rem] small-mobile:pt-4">
          {props.text}
        </p>
       
        <Link to={props.link}><button className="font-bold text-xl py-2 px-5 bg-red-700 hover:opacity-80 rounded-xl mt-8  tablet:text-sm  tablet:mt-3  mobile:mb-0">
          Less Mer
        </button></Link>
      </div>
    </div>
  );
};

export default CoursesDescription;
