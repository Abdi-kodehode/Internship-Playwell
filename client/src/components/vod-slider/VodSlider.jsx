import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "../../styles.css";
// import required modules
import { Navigation } from "swiper";
import VodCard from "../vod-card/VodCard";

const VodSlider = (props) => {
  return (
    <div className="px-10 screen:px-2">
      <h2 className="text-7xl text-center py-8 tablet:text-6xl mobile:text-4xl">
        {props.header}
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
            500: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            767: {
              slidesPerView: 3,
              spaceBetween: 10,
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
          {props.data?.map((url, id) => {
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
