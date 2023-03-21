import React from 'react'
import Marquee from "react-fast-marquee";

const MarqueeText = (props) => {
  return (
    <div>
          <Marquee
          className={" py-4 overflow-hidden z-20 mobile:py-2 " + props.background}
          speed={30}
          gradient={false}
        >
        <span className="text-4xl font-bold uppercase screen:text-2xl tablet:text-xl mobile:text-lg small-mobile:text-sm">{props.text}</span>
        </Marquee>
       
    </div>
  )
}

export default MarqueeText