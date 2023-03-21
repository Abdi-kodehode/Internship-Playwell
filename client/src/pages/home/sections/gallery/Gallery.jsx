import React from 'react'
//Library
import Marquee from "react-fast-marquee";
//Images
import Image from "../../../../assets/gallery/playwell__gallery.webp"
import Image1 from "../../../../assets/gallery/playwell__gallery1.webp"
import Image2 from "../../../../assets/gallery/playwell__gallery2.webp"
import Image3 from "../../../../assets/gallery/playwell__gallery3.webp"
import Header from "../../../../components/header/Header"

const Gallery = () => {
 
  return (
    <div  className="pt-20  tablet:py-0">
         <div className="overflow-hidden " >
      <Header header="Galleri"/>
      </div>
          <Marquee
          className=" pt-10 overflow-hidden z-20  "
          speed={60}
          gradient={false}
          pauseOnHover={true}
        >
            <div className="flex pb-20 mobile:pb-10">
            <img src={Image} alt="playwell" className="w-[400px] h-[350px] hover:scale-150 transition-all delay-500 cursor-pointer screen:w-1/3 tablet:w-[300px] tablet:h-[200px]  mobile:w-[200px] mobile:h-[150px]"/>
            <img src={Image1} alt="playwell" className="w-[400px] h-[350px] transition-all delay-200 hover:scale-150 cursor-pointer screen:w-1/3 tablet:w-[300px] tablet:h-[200px] mobile:w-[200px] mobile:h-[150px]  "/>
            <img src={Image2} alt="playwell" className="w-[400px] h-[350px] transition-all delay-200 hover:scale-150 cursor-pointer screen:w-1/3 tablet:w-[300px] tablet:h-[200px] mobile:w-[200px] mobile:h-[150px] "/>
            <img src={Image3} alt="playwell" className="w-[400px] h-[350px] transition-all delay-200 hover:scale-150 cursor-pointer screen:w-1/3 tablet:w-[300px] tablet:h-[200px] mobile:w-[200px] mobile:h-[150px]  "/>
            <img src={Image} alt="playwell" className="w-[400px] h-[350px]  transition-all delay-200 hover:scale-150 cursor-pointer screen:w-1/3 tablet:w-[300px] tablet:h-[200px] mobile:w-[200px] mobile:h-[150px] "/>
            <img src={Image1} alt="playwell" className="w-[400px] h-[350px] transition-all delay-200 hover:scale-150 cursor-pointer screen:w-1/3 tablet:w-[300px] tablet:h-[200px] mobile:w-[200px] mobile:h-[150px] "/>
            <img src={Image2} alt="playwell" className="w-[400px] h-[350px] transition-all delay-200 hover:scale-150 cursor-pointer screen:w-1/3 tablet:w-[300px] tablet:h-[200px] mobile:w-[200px] mobile:h-[150px]"/>
            <img src={Image3} alt="playwell" className="w-[400px] h-[350px] transition-all delay-200 hover:scale-150 cursor-pointer screen:w-1/3 tablet:w-[300px] tablet:h-[200px] mobile:w-[200px] mobile:h-[150px]"/>
            </div>
        
        </Marquee>
       
    </div>
  )
}

export default Gallery
