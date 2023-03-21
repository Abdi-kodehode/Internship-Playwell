import React from "react";

const CourseDetails = (props) => {
  return (
    <div className="flex justify-center items-center gap-3  even:flex-row-reverse mobile:!flex-col-reverse  w-full px-10  py-20 laptop:px-5 screen:px-2 mobile:px-1 mobile:py-0">
      <div className="w-full flex justify-center  items-center mobile:w-full mobile:px-1 ">
        <p className="w-2/3 text-4xl laptop:w-[90%] screen:w-full screen:text-2xl  mobile:font-thin mobile:text-lg small-mobile:text-[1rem] ">
          {props.text}
        </p>
        <span className="text-[26rem] text-[#ff000014]  absolute  text-center mobile:hidden">
          {props.number}
        </span>
      </div>
      <div className="w-full">
        <img src={props.image} className="rounded-lg w-full " alt="course" />
      </div>
    </div>
  );
};

export default CourseDetails;
