import React, { useState, useContext, useRef, useEffect } from "react";
//React router
import { useNavigate, Link } from "react-router-dom";
//Context
import { UserContext } from "../../context/context";
//React Icons
import { BsChevronDown } from "react-icons/bs";

const Dropdown = () => {
  let menuRef = useRef();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [state, setState] = useContext(UserContext);

  //Open and Close Dropdown menu
  const handleOpen = () => {
    setOpen(!open);
  };

  //Logout
  const logout = () => {
    setState({ user: {}, token: "" });
    localStorage.removeItem("auth");
    navigate("/");
    console.log(state);
    window.location.reload();
    
  };

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="bg-red-700 p-2 rounded-xl text-xl screen:text-lg flex items-center gap-1"
        onClick={handleOpen}
      >
        Din Konto
        <BsChevronDown className="text-[15px]" />
      </button>
      {open ? (
        <ul className="absolute p-2 bg-zinc-900">
          <li className="py-2 hover:opacity-60">
            <Link to="/dashboard">
              <button onClick={handleClick}>Dashboard</button>
            </Link>
          </li>
          <li className="py-2 hover:opacity-60">
            <Link to="/dashboard-calendar">
              <button onClick={handleClick}>Kalendar</button>
            </Link>
          </li>
          <li className="py-2 hover:opacity-60">
            <Link to="/dashboard-subscription">
              {" "}
              <button onClick={handleClick}>Konto</button>
            </Link>
          </li>
          <li className="py-2 hover:opacity-60">
            <button onClick={logout}>Log ut</button>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
