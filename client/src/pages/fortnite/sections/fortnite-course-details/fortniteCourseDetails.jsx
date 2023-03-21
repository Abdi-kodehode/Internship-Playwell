import React from "react";
//Components
import StreamCard from "../../../../components/stream-card/StreamCard";
import CourseDetails from "../../../../components/course-details/CourseDetails";
import Header from "../../../../components/header/Header";
//Images
import Instructor from "../../../../assets/playwell-teacher.webp";
import Image1 from "../../../../assets/fortnite/fortnite-gameplay.webp";
import Image2 from "../../../../assets/fortnite/fortnite-gameplay1.webp";

const FortniteCourseDetails = () => {
  return (
    <div className=" py-16 mobile:pt-10  mobile:pb-0 mobile:px-2">
      <Header header="Hva får du på kurset vårt?" />
      <div className="flex flex-col gap-10 ">
        <div className="flex justify-around items-center w-full gap-3 px-10 py-20  laptop:px-5 tablet:py-10 screen:px-2 mobile:flex-col-reverse mobile:py-0 mobile:px-1 mobile:pt-10">
          <div className="w-1/2 flex justify-center items-center mobile:w-full mobile:px-1 ">
            <p className=" w-2/3 text-4xl laptop:w-[90%] screen:w-full screen:text-2xl  mobile:font-thin mobile:text-lg small-mobile:text-[1rem]">
              Engasjere deltakere med en pedagogisk instruktør som veileder i
              samarbeid, planlegging og sosial atferd.
            </p>
            <span className="text-[26rem] text-[#ff000014]  absolute  text-center mobile:hidden">
              1
            </span>
          </div>
          <StreamCard
            image={Instructor}
            name="Mustazico"
            background="bg-[#53000063] "
          />
        </div>
        <CourseDetails
          text=" På Discord skal vi gå gjennom innsendte replays i plenum (VOD review).
        Gjennomføre in-house Zone Wars, Box Fights m.m.
        Arrangere utfordringer for deltakerne (challenges)."
          number="2"
          image={Image1}
        />
        <CourseDetails
          text="På Discord skal vi spille og prate med inviterte gjester.
          Linke til treningsmaps , hvor deltakere kan trene sammen.
          Gi deltakere tilgang til ekslusiv Fortnite-kanal"
          number="3"
          image={Image2}
        />
      </div>
    </div>
  );
};

export default FortniteCourseDetails;
