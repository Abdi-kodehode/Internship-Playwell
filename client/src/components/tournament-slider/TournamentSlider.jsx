import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../styles.css";
// import required modules
import { Navigation } from "swiper";
import { Tournaments } from "../../data/Data";
import TournamentCard from "../tournament-card/TournamentCard";

const TournamentSlider = () => {
  return (
    <div className="pt-10 px-10 screen:px-2">
      <div className="m-w-0 w-[98%]  flex items-center justify-center m-auto  ">
        <Swiper
          loop={true}
          grabCursor={true}
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
          {Tournaments.map((tournament, id) => {
            return (
              <SwiperSlide key={id}>
                <TournamentCard
                  image={tournament.image}
                  title={tournament.name}
                  text={tournament.text}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TournamentSlider;
