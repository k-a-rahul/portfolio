import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-between items-center ">
        <div
          className={`w-full h-10 mx-auto  flex justify-center items-center gap-4 md:gap-14  `}
        >
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? ` underline underline-offset-8 p-1 rounded-md  md:text-xl  md:font-semibold text-black flex flex-col justify-center items-center `
                : "group p-1 rounded-md text-black md:text-xl md:font-semibold transition-all delay-75 flex flex-col justify-center items-center "
            }
          >
            Home
            <span className="w-[45px] h-[1.5px] flex shadow-black group-hover:border-l-[45px] transition-all duration-300 delay-0 border-l-[0px]  border-mediumPurple"></span>
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8 p-1 rounded-md md:text-xl  md:font-semibold text-black flex flex-col justify-center items-center"
                : "group p-1 rounded-md text-black md:text-xl md:font-semibold transition-all delay-75 flex flex-col justify-center items-center "
            }
          >
            About
            <span className="w-[55px] h-[1.5px] flex shadow-black group-hover:border-l-[55px] transition-all duration-300 delay-0 border-l-[0px]  border-mediumPurple"></span>
          </NavLink>
          <NavLink
            to={"/reachme"}
            className={({ isActive }) =>
              isActive
                ? " underline underline-offset-8 p-1 rounded-md md:text-xl md:font-semibold text-black flex flex-col justify-center items-center"
                : "group p-1 rounded-md text-black md:text-xl md:font-semibold transition-all delay-75 flex flex-col justify-center items-center "
            }
          >
            Reach
            <span className="w-[55px] h-[1.5px] flex shadow-black group-hover:border-l-[55px] transition-all duration-300 delay-0 border-l-[0px]  border-mediumPurple"></span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
