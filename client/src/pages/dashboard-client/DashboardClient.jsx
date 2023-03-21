import React from "react";
//Components
import DashboardHero from "../../components/dashboard-hero/DashboardHero";
import CourseSlider from "../../components/courses-slider/CourseSlider";
import TournamentSlider from "../../components/tournament-slider/TournamentSlider";
import VodSlider from "../../components/vod-slider/VodSlider"
//Data
import {Vod} from "../../data/Data"

const DashboardClient = () => {
  return (
    <div>
     <DashboardHero />
          <div className="bg-zinc-700/20 backdrop-blur-xl  w-full h-full rounded-xl mt-2 overflow-hidden relative pb-20 tablet:mt-1 mobile:pb-0">
            <div className="w-[600px] h-[600px] rounded-full bg-red-500/20 blur-2xl  absolute top-10 right-0"></div>
            <div className="w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-2xl  absolute bottom-10 left-0"></div>
            <CourseSlider />
            <TournamentSlider />
            <VodSlider header="VOD" data={Vod} url="url" />
          </div>
          

    </div>
  );
};

export default DashboardClient;


