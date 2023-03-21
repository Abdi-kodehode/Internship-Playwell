import React from 'react'
import { FaArrowUp, FaUserFriends , FaMoneyCheckAlt , FaArrowDown } from "react-icons/fa";

const DashboardWidgets = () => {
  return (
    <div>
       <div className="flex gap-5 justify-around px-5 w-full h-[30vh] screen:gap-2 tablet:h-[20vh] mobile:flex-col mobile:h-full">
        <div className="flex flex-col justify-between bg-black/20 w-full px-4 pt-4 rounded-xl screen:px-2 screen:pt-2">
          <div className="flex justify-between">
            <h1 className="text-4xl text-white/80 laptop:text-3xl screen:text-2xl tablet:text-xl">Total Users</h1>
            <div className="flex gap-2 items-center text-4xl laptop:text-3xl screen:text-2xl tablet:text-xl ">
              <FaArrowUp className="text-green-500 tablet:text-sm" />
              <span className="text-green-500">5%</span>
            </div>
          </div>
          <div className="flex justify-center items-center text-7xl  text-white/80 laptop:text-6xl screen:text-5xl tablet:text-4xl mobile:py-5">
            <span>720</span>
          </div>
          <div className="flex justify-between ">
            <span className="underline pb-4 text-2xl text-white/80 hover:text-red-500 transition-all delay-150 cursor-pointer underline-offset-4 laptop:text-xl screen:text-lg tablet:text-sm  ">
              View all users
            </span>
            <FaUserFriends className="text-4xl bg-red-700 rounded-xl p-2 laptop:text-3xl" />
          </div>
        </div>
        <div className="flex flex-col justify-between bg-black/20 w-full px-4 pt-4 rounded-xl screen:px-2 screen:pt-2">
          <div>
            <h1 className="text-4xl text-white/80 laptop:text-3xl screen:text-2xl tablet:text-xl">New Users</h1>
          </div>
          <div className="flex justify-center items-center text-7xl  text-white/80 laptop:text-6xl screen:text-5xl tablet:text-4xl mobile:py-5">
            <span>20</span>
          </div>
          <div className="flex justify-between">
            <span className="underline pb-4 text-2xl text-white/80 hover:text-red-500 transition-all delay-150 cursor-pointer underline-offset-4 laptop:text-xl screen:text-lg tablet:text-sm">
              View all new users
            </span>
            <FaUserFriends className="text-4xl bg-red-700 rounded-xl p-2 laptop:text-3xl" />
          </div>
        </div>
        <div className="flex flex-col justify-between bg-black/20 w-full px-4 pt-4 rounded-xl screen:px-2 screen:pt-2">
          <div className="flex justify-between">
            <h1 className="text-4xl text-white/80 laptop:text-3xl screen:text-2xl tablet:text-xl">Earnings</h1>
            <div className="flex gap-2 items-center text-4xl laptop:text-3xl screen:text-2xl tablet:text-xl">
              <FaArrowDown className="text-red-500 tablet:text-sm" />
              <span className="text-red-500">3%</span>
            </div>
          </div>
          <div className="flex justify-center items-center text-7xl  text-white/80 laptop:text-6xl screen:text-5xl tablet:text-4xl mobile:py-5">
            <span>12312kr</span>
          </div>
          <div className="flex justify-between ">
            <span className="underline pb-4 text-2xl text-white/80 hover:text-red-500 transition-all delay-150 cursor-pointer underline-offset-4 laptop:text-xl screen:text-lg tablet:text-sm">
              View net earnings
            </span>
            <FaMoneyCheckAlt className="text-4xl bg-red-700 rounded-xl p-2 laptop:text-3xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardWidgets
