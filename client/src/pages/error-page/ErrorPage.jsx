import React from "react";
//react Router
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-start w-full h-screen relative px-5 bg-no-repeat bg-cover bg-center  bg-error-page overflow-hidden screen:bg-right screen:justify-end screen:items-center screen:bg-contain  mobile:bg-cover mobile:bg-[-800px_0px]  ">
      <div className="flex-col items-center justify-center text-center screen:pb-8 mobile:pt-20">
        <h1 className=" text-7xl text-left font-bold pb-5 laptop:text-6xl screen:text-center tablet:text-5xl mobile:text-4xl">
          Mistet du deg selv? <br />
          Komme hjem!
        </h1>
        <Link to="/">
          <button className="w-[200px] font-bold text-xl py-2 px-5  bg-red-700 hover:opacity-80 rounded-xl  mobile:text-sm mobile:w-[140px]">
            Hjem
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
