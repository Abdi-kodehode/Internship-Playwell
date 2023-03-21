import React, { useContext } from "react";
//React Router
import { Link, useNavigate } from "react-router-dom";

//React Icons
import { HiHome } from "react-icons/hi";
import {
  FaWallet,
  FaRegCalendarAlt,
  FaPlay,
  FaDoorOpen,
  FaDiscord,
} from "react-icons/fa";

//Context
import { UserContext } from "../../context/context";


const DashboardMenu = () => {
  const navigate = useNavigate();
  const [state, setState] = useContext(UserContext);

  //Logout
  const logout = () => {
    setState({ user: {}, token: "" });
    localStorage.removeItem("auth");
    navigate("/");
    console.log(state);
    window.location.reload();

  };

  return (
    <div className="big-screen:w-[100px]  relative flex flex-col flex-start mobile:fixed mobile:bottom-0 mobile:flex-row mobile:z-20  mobile:w-full ">
      <div className=" bg-zinc-900 sticky top-20 left-0 py-5 rounded-b-xl laptop:py-5 screen:top-20 mobile:py-0 mobile:w-full mobile:rounded-t-xl mobile:rounded-b-none ">
        <div className="flex flex-col  justify-center items-center text-center  text-gray-200  font-semibold screen:text-sm screen:font-extralight mobile:flex-row mobile:justify-around mobile:pb-2 mobile:h-[3.5rem] ">
          <Link to="/dashboard">
            <HiHome className="inline-block text-5xl cursor-pointer hover:opacity-20 mb-2 transition-all delay-150 screen:text-4xl mobile:text-3xl mobile:mt-[20px] mobile:mb-0 " />
            <p className="mobile:hidden">Home</p>
          </Link>
          <Link to="/dashboard-calendar">
            <FaRegCalendarAlt className="inline-block text-5xl mt-7 cursor-pointer hover:opacity-20 mb-2 transition-all delay-150 screen:text-4xl  mobile:text-2xl " />
            <p className="mobile:hidden">Kalendar</p>
          </Link>
          <Link to="/dashboard-vod">
            <FaPlay className=" inline-block text-5xl mt-7 cursor-pointer mb-2 hover:opacity-20 transition-all delay-150 screen:text-4xl mobile:text-2xl " />
            <p className="mobile:hidden">Media</p>
          </Link>
          <Link to="/dashboard-subscription">
            <FaWallet className=" inline-block text-5xl mt-7 cursor-pointer mb-2 hover:opacity-20 transition-all delay-150 screen:text-4xl  mobile:text-2xl" />
            <p className="mobile:hidden">Abonnement</p>
          </Link>
          <a
            rel="noopener noreferrer"
            href="https://discord.gg/cUjtqQ6p8p"
            target="_blank"
          >
            <FaDiscord className=" inline-block text-5xl mt-7 cursor-pointer mb-2 hover:opacity-20 transition-all delay-150 screen:text-4xl  mobile:text-2xl" />
            <p className="mobile:hidden">Discord</p>
          </a>

          <Link to="/">
            <button onClick={logout}>
              <FaDoorOpen className=" inline-block text-5xl mt-7 cursor-pointer mb-2 hover:opacity-20 transition-all delay-150 screen:text-4xl  mobile:text-2xl" />
            </button>

            <p className="mobile:hidden">Log out</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
