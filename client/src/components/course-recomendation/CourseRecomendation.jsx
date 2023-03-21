import React from "react";
//Components
import Header from "../../components/header/Header";
//Images
import Image from "../../assets/joystick.webp";

const CourseRecomendation = (props) => {
  return (
    <div className="h-full  overflow-hidden mobile:py-0 mobile:px-2">
      <div className="pt-20 text-center screen:py-10 tablet:pb-0 overflow-hidden">
        <Header header="Hvem passer kurset for?" />
      </div>
      <div className="flex justify-center items-center gap-6  py-20 w-5/6 m-auto laptop:w-[95%] screen:w-full screen:px-5 screen:pt-0 screen:pb-10 tablet:w-full tablet:px-2 tablet:py-10 mobile:py-0 mobile:flex-col  mobile:px-1 mobile:gap-2 small-mobile:gap-1 ">
        <div className="w-full mobile:pt-10">
          <img
            src={Image}
            alt="gaming"
            className="w-full h-[60vh] object-cover rounded-lg mobile:h-[40vh]"
          />
        </div>
        <div className="w-full flex flex-col gap-8 text-3xl laptop:gap-6 screen:text-2xl mobile:text-lg  mobile:gap-0 small-mobile:text-[1rem] ">
          <p>{props.text1}</p>
          <p>{props.text2}</p>
          <p>{props.text3}</p>
          <p>I så fall inviterer vi deg til kurset vårt.</p>
        </div>
      </div>
    </div>
  );
};

export default CourseRecomendation;
