import React , {useRef , useEffect} from 'react'
//Gsap Library
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Header = (props) => {
    //Atached Elements
    const headerContainer = useRef(null);
    const header = useRef(null);


    //Registration af Plugin
    gsap.registerPlugin(ScrollTrigger);


    //Gsap Header Animation
    useEffect(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerContainer.current,
          start: "top +70%",
          end:"bottom bottom",
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
    <div>
        <div className="overflow-hidden" ref={headerContainer} >
        <h1
          className="text-7xl font-bold text-center  laptop:text-6xl z-20 relative screen:text-5xl tablet:text-4xl mobile:text-3xl small-mobile:text-[1.8rem] "
          ref={header}
        >
          {props.header}
        </h1>
      </div>
      
    </div>
  )
}

export default Header
