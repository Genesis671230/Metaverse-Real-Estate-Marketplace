import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";
import Room2 from "../kit/Room2";
import { database } from "../../../api/firebase";
import { client, urlFor } from "../../../lib/utils";
function Rooms({fetchedData}) {
 console.log(fetchedData,"this is from rooms")
  return (
    <div className="md:w-full md:mt-20 pt-12 pb-20 bg-[#f9fafb] md:px-36 ">
      <div className="border-b  md:w-96 border-temp-border-gray py-3">
        <span className="text-4xl font-bold text-temp-gray">OUR ROOMS</span>
      </div>
      <div className="py-3 flex flex-row justify-between md:w-full">
        <span className="text-temp-gray2 font-bold text-2xl">
          Find the best room and Book Quickly!
        </span>
      </div>
      <div className="xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-3   md:grid md:grid-cols-3  lg:grid lg:grid-cols-4  gap-4 pt-4">
        {
          fetchedData?.map((item)=>(
            <Room2 itemData={item}/>

          ))
        }
 
      </div>
    </div>
  );
}

export default Rooms;
