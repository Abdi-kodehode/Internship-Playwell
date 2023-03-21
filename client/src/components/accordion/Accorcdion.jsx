import React, { useState } from "react";

//React Icons
import { FaPlus, FaMinus } from "react-icons/fa";

const Accorcdion = (props) => {
  const [expanded, setExpanded] = useState(false);
  //Open and close accordion
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div className="my-1">
      <div
        className={
          " shadow-sm cursor-pointer bg-zinc-900 w-2/4 m-auto tablet:w-2/3 mobile:w-[90%] " +
          props.border
        }
        onClick={toggleExpanded}
      >
        <div className="flex justify-between items-center  text-left  h-20 select-none px-6 screen:px-2 mobile:h-14 ">
          <h5 className="flex-1 text-4xl laptop:text-3xl screen:text-3xl tablet:text-2xl mobile:text-xl">
            {props.title}
          </h5>
          <div className="flex-none pl-2  m-auto duration-500 ease-in">
            {expanded ? <FaMinus /> : <FaPlus />}
          </div>
        </div>
      </div>
      <div
        className={` ${
          props.border
        } w-2/4 border m-auto px-6  bg-zinc-700/20 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in screen:px-2 tablet:w-2/3 mobile:w-[90%] ${
          expanded ? "max-h-60" : "max-h-0"
        } `}
      >
        <p className=" text-left py-4 text-3xl laptop:text-2xl screen:text-xl mobile:text-lg">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Accorcdion;
