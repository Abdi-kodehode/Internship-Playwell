import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles.css";
// import required modules
import {Navigation } from "swiper";
import { Courses } from "../../data/Data";
import CoursesCard from "../courses-card/CoursesCard";

const DashboardSlider = () => {
  return (
    <div className="px-10 screen:px-2">
      <h2 className="text-7xl text-center py-8 laptop:text-6xl screen:text-5xl mobile:text-4xl">
      Aktivitetsplan
      </h2>
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
          {Courses.map((course, id) => {
            return (
              <SwiperSlide key={id}>
                <CoursesCard
                  image={course.image}
                  alt={course.name}
                  title={course.name}
                  day1={course.day1}
                  time1={course.time1}
                  day2={course.day2}
                  time2={course.time2}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default DashboardSlider;
