import React from "react";
import Header from "../../../../components/header/Header";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/navigation";
import "../../../../styles.css";
import "swiper/css";
//import required modules
import { Navigation } from "swiper";
import TeamCard from "../../../../components/team-card/TeamCard";
import { Instructors } from "../../../../data/Data";

const AboutTeam = () => {
  return (
    <div className="w-full h-full pt-16 mobile:pb-10">
      <div className="overflow-hidden pb-10 mobile:pb-0">
        <Header header=" Møt teamet vårt !" />
      </div>
      <div className="m-w-0 w-[98%]  flex items-center justify-center m-auto pb-10 tablet:pb-0 mobile:px-4 ">
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
            1060: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mb-5 pb-5"
        >
          {Instructors.map((team, id) => {
            return (
              <SwiperSlide key={id}>
                <TeamCard
                  image={team.image}
                  border={team.border}
                  background={team.background}
                  name={team.name}
                  game={team.game}
                  position={team.position}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutTeam;
