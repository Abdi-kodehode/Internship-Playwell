import React, { useMemo } from "react";
import Header from "../../../../components/header/Header";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Spiner from "../../../../components/spiner/Spiner";

const VisitUs = () => {
  const bergen= useMemo(() => ({ lat: 60.38283913768676, lng: 5.326266912116777 }), []); 
  const oslo= useMemo(() => ({ lat: 59.94782953572314, lng: 10.769713028836456 }), []); 
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS,
  });
  if (!isLoaded)
    return (
      <div>
        <Spiner />
      </div>
    );
  return (
    <div className="pt-20 tablet:pt-0 ">
      <Header header="Besøk Oss" />
<div className="flex flex-col gap-10">
      <div className="flex justify-center w-2/3  gap-5 items-center m-auto pt-10 laptop:w-[90%] screen:w-[95%] tablet:gap-1 mobile:flex-col-reverse mobile:w-full mobile:px-4 mobile:pt-6">
        <div className="w-1/2 flex flex-col gap-2 text-4xl laptop:text-3xl screen:text-2xl tablet:text-xl mobile:w-full mobile:pt-2 mobile:gap-0 mobile:items-center mobile:text-xl">
          <span>5006 Bergen</span>
          <p>Thormøhlens gate 46</p>
          <p>Mobile:928 49 699</p>
          <p>E-mail:kontakt@playwell.no</p>
        </div>
        <div className="w-1/2 mobile:w-full mobile:rounded-xl">
          <GoogleMap
            zoom={15}
            center={bergen}
            mapContainerClassName="map-container"
         
          >
            <Marker position={bergen} />
          </GoogleMap>
        </div>
      </div>
      <div className="flex justify-center w-2/3  gap-5 items-center m-auto pt-10 laptop:w-[90%] screen:w-[95%] tablet:gap-1 mobile:flex-col-reverse mobile:w-full mobile:px-4 mobile:pt-6">
        <div className="w-1/2 flex flex-col gap-2 text-4xl laptop:text-3xl screen:text-2xl tablet:text-xl mobile:w-full mobile:pt-2 mobile:gap-0 mobile:items-center mobile:text-xl">
          <span>0484 Oslo</span>
          <p>Sandakerveien 114B</p>
          <p>Mobile:955 22 301 </p>
          <p>E-mail:kontakt@playwell.no</p>
        </div>
        <div className="w-1/2 mobile:w-full mobile:rounded-xl overflow-hidden">
          <GoogleMap
            zoom={16}
            center={oslo}
            mapContainerClassName="map-container"
          >
            <Marker position={oslo} />
          </GoogleMap>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VisitUs;
