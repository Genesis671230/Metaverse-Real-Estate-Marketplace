import React from "react";
import Header from "../kit/Header";
import { IconContext } from "react-icons";
import { ImLocation2 } from "react-icons/im";
import { CgCalendarDates } from "react-icons/cg";

function Hero() {
  return (
    <div className="">
      <Header />
      <div className="flex justify-center  items-center h-[70vh] bg-gradient-to-r from-slate-900 to-indigo-600">
       <div className="">

        <div className="mb-4  text-[2rem] md:text-[4rem] text-slate-300 font-unbounded">
          {" "}
          Welcome to <span className="text-red-600 font-unbounded"> Homaverse</span>
        </div>
        <div className=" text-center text-lg flex justify-center   text-slate-200 font-mono">
        <span className="w-[80%]">
          Step inside your dream home before you even visit in person with our
          immersive 3D tours.
        </span>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Hero;
