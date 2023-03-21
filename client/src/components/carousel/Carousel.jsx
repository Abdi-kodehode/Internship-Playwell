import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "../../styles.css";
// import required modules
import { Navigation } from "swiper";
import { Vod } from "../../Data/Data";
import VodCard from "../VodCard/VodCard";

const VodSlider = () => {
  return (
    <div>
      <h2 className="text-7xl text-center py-8 tablet:text-6xl mobile:text-4xl">
        VOD
      </h2>
      <div className="m-w-0 w-[98%]  flex items-center justify-center m-auto pb-10 ">
        <Swiper
          loop={true}
          loopFillGroupWithBlank={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            730: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1060: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {Vod.map((url, id) => {
            return (
              <SwiperSlide key={id}>
                <VodCard link={url.url} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default VodSlider;
