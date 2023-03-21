import React from 'react'
import Logo from "../../assets/playwell-header.webp"

const DashboardHero = () => {
  return (
    <>
  <div className="flex flex-col justify-center items-center relative w-full h-[55vh]  rounded-xl bg-no-repeat bg-cover bg-center  bg-hero-dashboard  mobile:h-[50vh]">
            <img src={Logo} className="px-5" alt="playwell-logo" />
            <h1 className="text-7xl tablet:text-6xl mobile:text-4xl small-mobile:text-3xl">
              Online
            </h1>
          </div>
    </>
  )
}

export default DashboardHero
