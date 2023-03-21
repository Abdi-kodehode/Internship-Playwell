import React, { useRef, useEffect} from "react";
//Components
import StreamingChat from "../../../../components/streaming-chat/StreamingChat";
import Header from "../../../../components/header/Header"
//Animation Library
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
//Images
import Instructor from "../../../../assets/playwell-teacher1.webp";
import Fortnite from "../../../../assets/fortnite/fortnite-gameplay2.webp";
import Image1 from "../../../../assets/playwell-hero3.jpg";
import Image4 from "../../../../assets/gallery/playing-kid1.webp";
import Image2 from "../../../../assets/gallery/playing-kid2.webp";
import Image3 from "../../../../assets/gallery/playing-kid3.webp";
import Image5 from "../../../../assets/gallery/playing-kid4.webp";
import Image6 from "../../../../assets/gallery/playing-kid5.webp";

const MinecraftGallery = () => {
//Atached Dom Elements
  const minecraftGalleryContainer = useRef(null);
  const minecraftSideBoxLeft = useRef(null);
  const minecraftSideColumnLeft = useRef(null);
  const minecraftSideBoxRight = useRef(null);
  const minecraftSideColumnRight = useRef(null);
  const minecraftMiddleBox = useRef(null);
  const minecraftContainer = useRef(null);


//Gsap Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: minecraftMiddleBox.current,
        start: "center center",
        end: "bottom -=70%",
        pin: minecraftGalleryContainer.current,
        scrub: 0.5,
      },
    });

    tl.to(minecraftMiddleBox.current, {
      scale: 1.2,
    })
      .to([minecraftSideBoxLeft.current, minecraftSideColumnLeft.current], { x: "-50vw" }, "<")
      .to([minecraftSideBoxRight.current, minecraftSideColumnRight.current], { x: "50vw" }, "<");

    return () => {
      tl.pause(0).kill(true);
    
    };
  }, []);



  return (
    <div>
      <div className="pt-20 text-center overflow-hidden screen:py-10 tablet:pb-0" ref={minecraftContainer}>
        <Header header="Nå dine mål i Fortnite sammen med oss!"/>
      </div>
      <div
        className="grid gap-1 h-screen grid-cols-[1fr_1fr_3fr_1fr_1fr] items-center overflow-hidden screen:grid-cols-[1fr_1fr_5fr_1fr_1fr] screen:content-baseline screen:h-full tablet:grid-cols-1"
        ref={minecraftGalleryContainer}
      >
        <div>
          <div
            className=" overflow-hidden rounded side-box__left tablet:hidden"
            ref={minecraftSideBoxLeft}
          >
            <img
              src={Image1}
              alt="player"
              className="w-full object-cover h-[200px] rounded  screen:h-[100px] "
            />
          </div>
        </div>
        <div
          className="flex flex-col gap-1 overflow-hidden two-column__left tablet:hidden"
          ref={minecraftSideColumnLeft}
        >
          <img
            src={Image2}
            alt="player"
            className="w-full object-cover h-[200px] rounded  screen:h-[100px]"
          />

          <img
            src={Image3}
            alt="player"
            className="w-full object-cover h-[200px] rounded  screen:h-[100px]"
          />
        </div>

        <div
          className="flex justify-center w-full z-20 tablet:py-10 mobile:px-10 "
          ref={minecraftMiddleBox}
        >
          <StreamingChat
            image={Fortnite}
            instructor={Instructor}
            chat1="Hei alle sammen! I dag skal vi trene på piece-control🙂"
            chat2="Hei :) Ns , Vi er klar !"
          />
        </div>
        <div
          className="flex flex-col gap-1 two-column__right tablet:hidden"
          ref={minecraftSideColumnRight}
        >
          <img
            src={Image4}
            alt="player"
            className="w-full object-cover overflow-hidden rounded h-[200px]   screen:h-[100px]"
          />
          <img
            src={Image5}
            alt="player"
            className="w-full object-cover overflow-hidden rounded h-[200px]  screen:h-[100px]"
          />
        </div>
        <div className="side-box__right tablet:hidden" ref={minecraftSideBoxRight}>
          <img
            src={Image6}
            alt="player"
            className="w-full object-cover overflow-hidden rounded h-[200px]  screen:h-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MinecraftGallery;
