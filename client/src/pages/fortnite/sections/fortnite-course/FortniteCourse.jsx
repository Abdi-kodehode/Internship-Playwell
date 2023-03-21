import React, { useState, useEffect } from "react";
import Header from "../../../../components/header/Header";
const data = require("../../../../data/Data");

export default function Technology() {
  // State
  const [technologyId, setTechnologyId] = useState(0);

  // Data of Technology from data
  const {
    name,
    points,
    points2,
    title,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
  } = data.Fortnite[technologyId];

  // Function to change technologyId onClick crew
  const change = (id) => {
    setTechnologyId(id);
  };

  useEffect(() => {
    const list = document.querySelectorAll(".pagination span");
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove("bg-red-700");
    }
    list[technologyId].classList.add("bg-red-700");
  }, [technologyId]);

  return (
    <div className="flex flex-col pb-20 tablet:pb-10 mobile:pt-10 mobile:pb-0">
      <Header header="Velg et kurs som passer til deg!" />
      <div className="pagination flex justify-center text-3xl gap-10 text-center pt-20 screen:text-2xl screen:pt-10 mobile:text-xl">
        <span
          onClick={() => change(0)}
          className="py-2 px-5 rounded-full cursor-pointer screen:px-3 mobile:px-2 "
        >
          Lavterskel
        </span>
        <span
          onClick={() => change(1)}
          className="py-2 px-5 rounded-full cursor-pointer screen:px-3 mobile:px-2 "
        >
          Avansert
        </span>
      </div>

      <div className="flex justify-center items-center w-full px-10 m-auto pt-10 gap-5 screen:px-2 screen:gap-5 mobile:flex-col-reverse mobile:px-3">
        <div className="technology-text w-1/3 flex flex-col laptop:w-1/2  mobile:w-full ">
          <h2 className="text-4xl tablet:text-3xl font-bold">{name}</h2>
          <h2 className="text-xl pt-3">{title}</h2>
          <p className="py-5 text-xl font-light screen:py-2 small-mobile:text-[1rem]">{paragraph1}</p>
          <p className=" text-lg small-mobile:text-[1rem]">{paragraph2}</p>
          <p className=" text-lg  pt-5 screen:pt-2 small-mobile:text-[1rem]">{paragraph3}</p>
          <div className="pt-5 screen:pt-2">
            {points.map((point, index) => (
              <p className="text-xl  small-mobile:text-[1rem]" key={index}>
                {point}
              </p>
            ))}
          </div>
          <p className=" text-lg pt-5 screen:pt-2 ">{paragraph4}</p>
          {points2.map((point, index) => (
            <p className="text-lg small-mobile:text-[1rem]" key={index}>
              {point}
            </p>
          ))}
        </div>
        <div className="w-1/2 mobile:w-full">
        <div className="w-full h-[80vh] flex items-end bg-fortnite-courses  bg-cover bg-left bg-no-repeat rounded-xl screen:h-[90vh]   mobile:h-[30vh] mobile:bg-center "></div>
        </div>
      </div>
    </div>
  );
}
