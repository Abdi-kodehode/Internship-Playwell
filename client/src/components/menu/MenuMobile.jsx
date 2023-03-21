import React, { useRef, useEffect, useState, useContext } from "react";
//React Router
import { Link, useNavigate } from "react-router-dom";

//axios
import axios from "axios";

//Gsap Library
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//React Icons
import { FaTimes } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

//Image
import Image from "../../assets/menu-mobile.webp";
//Context
import { UserContext } from "../../context/context";
//Register Plugin
gsap.registerPlugin(ScrollTrigger);

const MenuMobile = () => {
  //Navigate
  const navigate = useNavigate();
  //Context
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

  //Logout

  const logout = () => {
    setState({ user: {}, token: "" });
    localStorage.removeItem("auth");
    navigate("/");
    window.scrollTo(0, 0);
    window.location.reload();
  };

  const [isOpen, setIsOpen] = useState(false);
  //Refs
  const toggle = useRef(null);
  const menuIcon = useRef(null);
  const link = useRef(null);
  const tl = useRef();

  //Open and Close Menu
  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  //Menu Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({ paused: true })
        .to("path", {
          y: (i, b, c) => {
            if (i === 0) return 2;
            if (i === 2) return -2;
            return 0;
          },
        })
        .to(
          toggle.current,
          { height: "100%", ease: "none", duration: 0.15, zIndex: 200 },
          0
        )
        .to(link.current, { delay: 0.01, opacity: 1, zIndex: 200 })
        .reverse();
    }, menuIcon);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    tl.current.reversed(!isOpen);
  }, [isOpen]);

  return (
    <>
      <div className="absolute right-6  screen:block top-6 scale-150 big-screen:hidden">
        <svg
          onClick={() => setIsOpen(!isOpen)}
          width="47"
          height="20"
          viewBox="0 0 47 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={menuIcon}
          className="cursor-pointer"
        >
          <path d="M20 3H46.5" stroke="#fff" strokeWidth="2" />
          <path d="M30 13H46.5" stroke="#fff" strokeWidth="2" />
          <path d="M20 23H46.5" stroke="#fff" strokeWidth="2" />
        </svg>
      </div>
      <div className="relative z-50">
        <div
          className=" flex justify-between items-center w-full h-0 bg-black  overflow-hidden fixed top-0 left-0 z-50 mobile:w-screen"
          ref={toggle}
        >
          <img
            src={Image}
            alt="joystic"
            className="h-full screen:w-1/2 mobile:absolute mobile:w-full "
          />
          <ul
            className="flex flex-col justify-center items-center relative w-full h-full gap-5 text-4xl opacity-0 screen:w-1/2 mobile:w-full z-50 "
            onClick={() => showMenu((prevState) => !prevState)}
            ref={link}
          >
            <FaTimes
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer absolute top-6 right-6 w-[30px] h-[30px]"
            />
            <li className="hover:opacity-50 transition ease-in-out delay-150">
              <Link to="/minecraft">Minecraft</Link>
            </li>
            <li className="hover:opacity-50 transition ease-in-out delay-150">
              <Link to="/fortnite">Fortnite</Link>
            </li>
            <li className="hover:opacity-50 transition ease-in-out delay-150">
              <Link to="/koding">Koding</Link>
            </li>
            <li className="hover:opacity-50 transition ease-in-out delay-150">
              <Link to="/roblox">Roblox</Link>
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
              <Link to="/omoss">Om oss</Link>
            </li>
            {subscriptions.length >= 2 ? null : (
              <li className="hover:opacity-50 transition ease-in-out delay-150">
                <Link to="/subscription">Meld deg på</Link>
              </li>
            )}
            {state && state.token ? (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button
                    className="hover:opacity-50 transition ease-in-out delay-150 bg-red-700 px-2 py-1  rounded-lg"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <button className="hover:opacity-50 transition ease-in-out delay-150 bg-red-700 px-2 py-1  rounded-lg">
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
            <div className="absolute bottom-5 pt-5">
              <a
                rel="noopener noreferrer"
                href="https://discord.gg/cUjtqQ6p8p"
                target="_blank"
              >
                {" "}
                <FaDiscord className="hover:opacity-20 text-7xl" />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuMobile;
