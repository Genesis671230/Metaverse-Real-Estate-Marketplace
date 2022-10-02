import React from 'react'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import { IconContext } from "react-icons"
import Room1 from '../kit/Room1'


function Deals() {
  return (
    <div className='w-full pt-16 ' >
       <div className='border-b  md:w-96 border-temp-border-gray py-3' >
          <span className='text-4xl font-bold text-temp-gray' >BEST DEALS</span>
        </div>
        <div className='py-3 flex flex-row justify-between w-full' >
            <span className='text-temp-gray2 font-bold text-2xl' >Find the best room and Book Quickly!</span>
            <div className='md:w-[90px] flex flex-row justify-between ' >
                <span className='md:w-10 h-10 flex items-center justify-center bg-[#e9e9e9]' >
                  <IconContext.Provider value={{ color: "#868ea6", size:"30px"}}>
                    <div>
                      <IoIosArrowBack/>
                    </div>
                  </IconContext.Provider>
                </span>
                <span className='md:w-10 h-10 flex items-center justify-center bg-temp-red' >
                  <IconContext.Provider value={{ color: "#ffffff", size:"30px"}}>
                    <div>
                      <IoIosArrowForward/>
                    </div>
                  </IconContext.Provider>
                </span>
            </div>
        </div>
        <div className='xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1   md:grid md:grid-cols-3  lg:grid lg:grid-cols-2 gap-15 pt-4' >
            <Room1 url="1" />
            <Room1 url="3" />
            <Room1 url="2" />
            <Room1 url="3" />
            <Room1 url="2"/>
            <Room1 url="1" />
        </div>
    </div>
  )
}

export default Deals