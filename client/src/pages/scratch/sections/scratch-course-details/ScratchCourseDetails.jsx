import React, { useRef, useEffect } from "react";
//Components
import StreamCard from "../../../../components/stream-card/StreamCard";
import CourseDetails from "../../../../components/course-details/CourseDetails";
//Images
import Instructor from "../../../../assets/team/tg1.webp";
import Image1 from "../../../../assets/koding/scratch-live.webp";
import Image2 from "../../../../assets/koding/scratch-hero2.webp";
//Gsap Animation Library
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const ScratchCourseDetails = () => {
  //Registration Plugin
  gsap.registerPlugin(ScrollTrigger);
  //Refs
  const container = useRef(null);
  const header = useRef(null);
  //Animation
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top +=100%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(header.current, {
      yPercent: 200,
      rotation: 15,
      transformOrigin: "left 50%",
      duration: 0.8,
    });
  }, []);

  return (
    <div className=" py-14 mobile:pt-10  mobile:pb-0 mobile:px-2">
      <div className="overflow-hidden" ref={container}>
        <h3
          className="text-7xl text-center font-bold laptop:text-6xl screen:text-5xl  tablet:text-4xl mobile:text-3xl small-mobile:text-2xl"
          ref={header}
        >
          Hva får du på kurset vårt?
        </h3>
      </div>
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
          <StreamCard image={Instructor} name="TG" />
        </div>
        <CourseDetails
          text=" Vårt erfarne team av lærere vil lære deg hvordan dere programmerer dine første spill i Scratch . Scratch er et kodespråk med et enkelt visuelt grensesnitt som lar unge brukere lage digitale historier, spill og animasjoner.
        "
          number="2"
          image={Image1}
        />
        <CourseDetails
          text="
        På Discord skal vi lære hvordan et spill bygges.Lære å bruke løkker og IF-setninger
        Bruke variabler og funksjoner.Designe bakgrunn, sprites og lyd til et spill.
        Bygge sitt eget spill ferdig med fungerende spilldesign og logikk.
        Ha et inkluderende og sosialt læringsmiljø hvor alle deltakere føler seg ivaretatt."
          number="3"
          image={Image2}
        />
      </div>
    </div>
  );
};

export default ScratchCourseDetails;
