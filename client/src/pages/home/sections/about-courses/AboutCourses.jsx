import React, { useLayoutEffect, useRef } from "react";

//Components
import StreamingChat from "../../../../components/streaming-chat/StreamingChat";
import CoursesDescription from "./courses-description/CoursesDescription";
//Gsap animation library
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
//Images
import InstructorOne from "../../../../assets/playwell-teacher1.webp";
import InstructorTwo from "../../../../assets/playwell-teacher2.webp";
import InstructorThree from "../../../../assets/playwell-teacher3.webp";
import Fortnite from "../../../../assets/fortnite/fortnite-gameplay2.webp";
import Minecraft from "../../../../assets/minecraft/minecraft-gameplay.webp";
import Roblox from "../../../../assets/roblox/roblox-gameplay.webp";
import Scratch from "../../../../assets/koding/scratch-koding.webp";
//Data
import { CoursesDescriptions } from "../../../../data/Data";
import AboutCoursesMobile from "./AboutCoursesMobile";

const AboutCourses = () => {
  //Registation Of Plugin
  gsap.registerPlugin(ScrollTrigger);
  //Atached Dom Elements
  const coursContainer = useRef(null);
  const coursPresentation = useRef(null);
  const findChilds = gsap.utils.selector(coursPresentation);

  //Gsap Animation
  useLayoutEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: coursContainer.current,
        start: "top +70%",
      },
    });

    tl.from(".course__header", {
      yPercent: 200,
      rotation: 15,
      transformOrigin: "left 50%",
      duration: 0.8,
    });
  }, []);
  useLayoutEffect(() => {
    let courseShowcase = findChilds(".cours__showcase");
    let courseWrapper = coursPresentation.current;
    let courseWrapperWidth = courseWrapper.offsetWidth;

    let ctx = gsap.context(() => {
      gsap.to(courseShowcase, {
        xPercent: -100 * (courseShowcase.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: courseWrapper,
          start: "center +55%",
          pin: true,
          scrub: 1,
          pinSpacing: true,
          snap: 1 / (courseShowcase.length - 1),
          end: "+=" + courseWrapperWidth,
        },
      });
    }, coursPresentation);
    return () => ctx.revert();
  });
  return (
    <div className="overflow-x-hidden" ref={coursContainer}>
      <div className="flex flex-col justify-center items-center font-bold overflow-hidden py-36 screen:py-16 tablet:py-22 small-mobile:py-0 small-mobile:pt-10 cours__header">
        <div className="overflow-hidden">
          <h3 className="course__header text-7xl my-1  laptop:text-[3.5rem] screen:text-[2.5rem] tablet:text-[2.1rem] mobile:text-[1.25rem] small-mobile:text-[1rem]  ">
            Playwell Online er en digital arena hvor
          </h3>
        </div>
        <div className="overflow-hidden">
          <h3 className="course__header text-7xl my-1 laptop:text-[3.5rem] screen:text-[2.5rem] tablet:text-[2.1rem] mobile:text-[1.25rem] small-mobile:text-[1rem]">
            gaming, koding og e-sport skaper læring,{" "}
          </h3>
        </div>
        <div className="overflow-hidden">
          <h3 className="course__header text-7xl my-1 laptop:text-[3.5rem] screen:text-[2.5rem] tablet:text-[2.1rem] mobile:text-[1.25rem] small-mobile:text-[1rem]">
            mestring og sosialisering
          </h3>
        </div>
      </div>

      <div
        className="cours__presentation flex  w-[400%] screen:hidden "
        ref={coursPresentation}
      >
        <div className="cours__showcase  w-screen h-full flex justify-center align-center    rounded-t-xl  tablet:flex-col-reverse tablet:justify-end tablet:pt-20 tablet:gap-0 mobile:gap-6 mobile:pt-10 mobile:px-2 ">
          <CoursesDescription
            title="Fortnite"
            text={CoursesDescriptions[0].fortnite}
            link="/fortnite"
          />
          <div className="w-1/2 flex justify-center items-center relative tablet:w-full   ">
            <div className="absolute  w-full h-[80%]  top-28  from-blue-600/80 via-teal-500/80  to-purple-500/80 bg-gradient-to-r   blur-2xl laptop:h-[75%] screen:h-[70%] screen:top-32  tablet:top-0 tablet:w-[75%]  tablet:h-full mobile:w-full mobile:h-[90%] mobile:top-3"></div>
            <StreamingChat
              image={Fortnite}
              instructor={InstructorOne}
              chat1="Hei alle sammen.I dag skal vi trene nøyaktighet og taktikk på nye maps."
              chat2="Hei! Super, det er akkurat dette som jeg har det største problem!"
            />
          </div>
        </div>
        <div className="cours__showcase  w-screen h-screen flex justify-center align-center  bg-black/80  rounded-t-xl tablet:flex-col-reverse  tablet:gap-0 mobile:gap-6 mobile:px-2 ">
          <CoursesDescription
            title="Minecraft"
            text={CoursesDescriptions[0].minecraft}
            link="/minecraft"
          />
          <div className="w-1/2 flex justify-center items-center relative tablet:w-full">
            <div className="absolute  w-full h-[80%]  top-28  from-blue-600/80 via-teal-500/80  to-purple-500/80 bg-gradient-to-r   blur-2xl laptop:h-[75%] screen:h-[70%] screen:top-32  tablet:top-0 tablet:w-[75%]  tablet:h-full mobile:w-full mobile:h-[90%] mobile:top-3"></div>
            <StreamingChat
              image={Minecraft}
              instructor={InstructorTwo}
              chat1="Hei alle sammen.I dag vi skal bygge et stor by:)"
              chat2="Hei:) Så fantastisk!"
            />
          </div>
        </div>
        <div className="cours__showcase  w-screen h-screen flex justify-center align-center  bg-black/80  rounded-t-xl tablet:flex-col-reverse  tablet:gap-0 mobile:gap-6 mobile:px-2 ">
          <CoursesDescription
            title="Roblox"
            text={CoursesDescriptions[0].Roblox}
            link="/roblox"
          />
          <div className="w-1/2 flex justify-center items-center relative tablet:w-full">
            <div className="absolute  w-full h-[80%]  top-28  from-blue-600/80 via-teal-500/80  to-purple-500/80 bg-gradient-to-r   blur-2xl laptop:h-[75%] screen:h-[70%] screen:top-32  tablet:top-0 tablet:w-[75%]  tablet:h-full mobile:w-full mobile:h-[90%] mobile:top-3"></div>
            <StreamingChat
              image={Roblox}
              instructor={InstructorTwo}
              chat1="Hei alle sammen.I dag vi skal spile Rl :)"
              chat2="Hei:) Så kjekt!"
            />
          </div>
        </div>
        <div className="cours__showcase  w-screen h-screen flex justify-center align-center  bg-black/80 rounded-b-2xl tablet:flex-col-reverse   tablet:gap-0 mobile:px-2 mobile:gap-6 ">
          <CoursesDescription
            title="Koding"
            text={CoursesDescriptions[0].koding}
            link="/koding"
          />
          <div className="w-1/2 flex justify-center items-center relative tablet:w-full   ">
            <div className="absolute  w-full h-[80%]  top-28  from-blue-600/80 via-teal-500/80  to-purple-500/80 bg-gradient-to-r   blur-2xl laptop:h-[75%] screen:h-[70%] screen:top-32  tablet:top-0 tablet:w-[75%]  tablet:h-full mobile:w-full mobile:h-[90%] mobile:top-3"></div>
            <StreamingChat
              image={Scratch}
              instructor={InstructorThree}
              chat1="Hei alle sammen.I dag  skal vi lage Treasure Island ! "
              chat2="Hei ! Wow så fantastisk !"
            />
          </div>
        </div>
      </div>
      <div className="screen:block">
        <AboutCoursesMobile />
      </div>
    </div>
  );
};

export default AboutCourses;
