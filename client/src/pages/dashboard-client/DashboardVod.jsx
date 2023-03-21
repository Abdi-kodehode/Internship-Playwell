import React from "react";
//Component
import VodSlider from "../../components/vod-slider/VodSlider";
//Data
import { Vod } from "../../data/Data";

const DashboardVod = () => {
  return (
    <div>
      <div className="bg-zinc-700/20   w-full  rounded-b-xl   overflow-hidden relative pb-20 tablet:mt-1 mobile:pb-0">
        <div className="w-[600px] h-[600px] rounded-full bg-red-500/20 blur-2xl  absolute top-10 right-0"></div>
        <div className="w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-2xl  absolute bottom-10 left-0"></div>
        <div>
          <VodSlider header="Fornite" data={Vod} />
        </div>
        <div>
          <VodSlider header="Rocket League" data={Vod} />
        </div>
        <div>
          <VodSlider header="Minecraft" data={Vod} />
        </div>
        <div>
          <VodSlider header="Scratch" data={Vod} />
        </div>
      </div>
    </div>
  );
};

export default DashboardVod;
