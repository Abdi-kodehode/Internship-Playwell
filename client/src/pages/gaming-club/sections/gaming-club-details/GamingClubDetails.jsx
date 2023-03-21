import React from "react";
//Components
import StreamCard from "../../../../components/stream-card/StreamCard";
import CourseDetails from "../../../../components/course-details/CourseDetails";
import Instructor from "../../../../assets/playwell-teacher2.webp";
import Image1 from "../../../../assets/roblox/gamingklubb1.webp";
import Image2 from "../../../../assets/roblox/gamingklubb.webp";
import Header from "../../../../components/header/Header";

const MinecraftCourseDetails = () => {
  return (
    <div className=" py-14 mobile:pt-10  mobile:pb-0 mobile:px-2">
      <Header header="Hva får du på Gamingklubb?" />
      <div className="flex flex-col gap-10 ">
        <div className="flex justify-around items-center w-full gap-3 px-10 py-20  laptop:px-5 tablet:py-10 screen:px-2 mobile:flex-col-reverse mobile:py-0 mobile:px-1 mobile:pt-10">
          <div className="w-1/2 flex justify-center items-center mobile:w-full mobile:px-1 ">
            <p className=" w-2/3 text-4xl laptop:w-[90%] screen:w-full screen:text-2xl  mobile:font-thin mobile:text-lg ">
              Engasjere deltakere med en pedagogisk instruktør som veileder i
              samarbeid, planlegging og sosial atferd.
            </p>
            <span className="text-[26rem] text-[#ff000014]  absolute  text-center mobile:hidden">
              1
            </span>
          </div>
          <StreamCard image={Instructor} name="Pad" />
        </div>
        <CourseDetails
          text="På gamingklubben vil deltagerne ha ukentlige spillsesjoner, hvor de får møte andre spillinteresserte barn og ungdom.
          Deltagerne blir instruert av en erfaren spill-instruktør som vil sette i gang morsomme aktiviteter og tilrettelegge for sosial gaming."
          number="2"
          image={Image1}
        />
        <CourseDetails
          text="Er du på jakt etter et sted hvor du kan teste ut forskjellige spill, utvikle spillferdighetene dine og samtidig få en sosial gjeng å spille med? Da er dette plassen."
          number="3"
          image={Image2}
        />
      </div>
    </div>
  );
};

export default MinecraftCourseDetails;
