import React from 'react'
import Header from "../../../../components/header/Header"
import Image from "../../../../assets/about-us.webp";


const AboutValues = () => {
  return (
    <div>
    <div className="pt-20 pb-10 tablet:py-10 mobile:py-6">
    <Header header="Hvem er vi ?" />
  </div>
  <div className="flex justify-center w-full px-10 gap-5 m-auto screen:gap-2  screen:px-5 mobile:flex-col mobile:px-4 ">
    <div className="flex items-center w-2/3 tablet:w-1/2 mobile:w-full ">
      <img src={Image} className="rounded-xl " alt="playwell" />
    </div>
    <div className=" flex flex-col w-1/2 justify-center pt-10 text-4xl leading-normal  laptop:text-3xl laptop:pt-0 screen:text-2xl tablet:text-xl mobile:text-lg mobile:w-full small-mobile:text-[1rem] ">
      <p>
        Playwell er en organsiasjon hvor alle ansatte jobber sammen mot et
        felles mål. Vi skal hjelpe gamere med å lykkes. Vi hjelper gamere
        lykkes i:
      </p>
      <ul className="text-4xl flex flex-col gap-1 pt-5 leading-normal laptop:text-3xl screen:gap-0 screen:text-2xl screen:pt-0 tablet:text-xl mobile:text-lg small-mobile:text-[1rem]">
        <li>E-sport</li>
        <li>Sosial gaming</li>
        <li>Sosial inkludering</li>
        <li>Arbeidsinkludering</li>
        <li>Og mye mer...</li>
      </ul>
    </div>
  </div>
  </div>
  )
}

export default AboutValues