import React from "react";
//Component
import Header from "../../../../components/header/Header";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/navigation";
import "../../../../styles.css";
import "swiper/css";
import { Navigation } from "swiper";
//Data
import { Team } from "../../../../data/Data";

const OurTeam = () => {
  return (
    <div className="py-40 laptop:py-20 px-5 screen:py-0  screen:pt-20  tablet:pb-10   mobile:pt-16 mobile:px-4 ">
      <Header header="Vårt Team" />
      <div className="grid grid-cols-5  w-full px-8 gap-10 text-center pt-10 m-auto laptop:w-full screen:justify-center screen:grid-cols-3 screen:w-full screen:px-0  laptop:gap-4 screen:hidden">
        {Team.map((team, id) => {
          return (
            <div key={id} className={"border rounded-xl " + team.border}>
              <div className="overflow:hidden">
                <img
                  src={team.image}
                  className=" rounded-t-xl w-full h-full"
                  alt="team"
                />
              </div>
              <div className="flex flex-col text-3xl py-5 laptop:text-2xl screen:text-xl ">
                <span>{team.name}</span>
                <span>{team.position}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="m-w-0 hidden scree:w-[98%]  screen:flex   screen:m-auto screen:pt-16 mobile:py-0 mobile:pt-5  mobile:pb-0  ">
        <Swiper
          loop={true}
          loopFillGroupWithBlank={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            760: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mb-5 pb-5 "
        >
          {Team.map((team, id) => {
            return (
              <SwiperSlide key={id}>
                <div
                  className={"border rounded-xl  w-full h-full " + team.border}
                >
                  <div className="overflow:hidden">
                    <img
                      src={team.image}
                      className=" rounded-t-xl w-full h-full"
                      alt="team"
                    />
                  </div>
                  <div className="flex flex-col text-3xl py-5 laptop:text-2xl screen:text-xl ">
                    <span>{team.name}</span>
                    <span>{team.position}</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default OurTeam;
