import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";

//Logo
import Logo from "../../assets/playwell-logo.webp";

//Context
import { UserContext } from "../../context/context";

//Components
import MenuMobile from "./MenuMobile";
import Dropdown from "../dropdown/Dropdown";

const Menu = ({ showMenu, isOpen }) => {
  const [state, setState] = useContext(UserContext);
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const getSubscriptions = async () => {
      const { data } = await axios.get(
        "https://pwo-mern-api.onrender.com/api/subscriptions"
      );
      setSubscriptions(data.data);
    };

    if (state && state.token) getSubscriptions();
  }, [state && state.token]);

  return (
    <div>
      <div className="flex justify-between items-center fixed top-0 py-5 w-screen text-white bg-zinc-900  z-[100] big-screen:px-8 laptop:px-6 mobile:px-2 ">
        <div>
          <NavLink to="/">
            <img
              src={Logo}
              className="big-screen:w-[80px] h-[40px] mobile:w-[60px] mobile:h-[30px] relative z-20"
              alt="Logo"
            />
          </NavLink>
        </div>
        <MenuMobile showMenu={showMenu} isOpen={isOpen} />

        <ul className="big-screen:flex big-screen:text-2xl big-screen:gap-8 big-screen:items-center big-screen:font-thick laptop:text-xl laptop:gap-5 screen:hidden">
          <li className="hover:opacity-50 transition ease-in-out delay-150">
            <NavLink to="/minecraft">Minecraft</NavLink>
          </li>
          <li className="hover:opacity-50 transition ease-in-out delay-150">
            <NavLink to="/fortnite">Fortnite</NavLink>
          </li>
          <li className="hover:opacity-50 transition ease-in-out delay-150">
            <NavLink to="/koding">Koding</NavLink>
          </li>
          <li className="hover:opacity-50 transition ease-in-out delay-150">
            <NavLink to="/roblox">Roblox</NavLink>
          </li>
          <li className="hover:opacity-50 transition ease-in-out delay-150">
            <a
              rel="noopener noreferrer"
              href="https://www.playwell.no"
              target="_blank"
            >
              Gaming center
            </a>
          </li>
          <li className="hover:opacity-50 transition ease-in-out delay-150">
            <NavLink to="/omoss">Om oss</NavLink>
          </li>
          {subscriptions.length >= 2 ? null : (
            <li className="hover:opacity-50 transition ease-in-out delay-150">
              <NavLink to="/subscription">Meld deg på</NavLink>
            </li>
          )}
        </ul>
        <ul className="big-screen:flex big-screen:gap-5 big-screen:text-2xl big-screen:items-center big-screen:font-thick laptop:text-xl laptop:gap-5 screen:hidden">
          {state && state.token ? (
            <>
              <Dropdown />
            </>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <button className="hover:opacity-50 transition ease-in-out delay-150 bg-red-700 px-2 py-1  rounded-lg ">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <button className="hover:opacity-50 transition ease-in-out delay-150 bg-red-700 px-2 py-1  rounded-lg">
                    Signup
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
