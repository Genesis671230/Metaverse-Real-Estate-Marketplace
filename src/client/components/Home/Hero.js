import React from 'react'
import Header from '../kit/Header'
import { IconContext } from "react-icons"
import {ImLocation2} from 'react-icons/im'
import {CgCalendarDates} from 'react-icons/cg'

function Hero() {
  return (
    <div className="bg-[url('/assets/images/hero.jpg')] w-full h-screen bg-center bg-no-repeat relative">
      
      <div className='w-full h-screen bg-black bg-opacity-10 ' >
        <div className='md:mx-36' >
          <Header/>
          {/* <div className='bg-white w-[420px] h-[480px] p-6' >
            <div className='border-b  border-temp-border-gray py-3' >
              <span className='text-2xl font-medium text-temp-gray' >BOOK NOW</span>
            </div>
            <div className='pt-3' >
              <span className='text-temp-gray2 font-semibold' >Lorem ipsum dolor si amet, consectetur adipiscing elit sed do eiusmod</span>
            </div>
            <div className='py-6' >
              <form>
                  <div>
                    <label className='font-bold text-gray-700  ' >Where</label>
                    <div className='w-full mt-1 border border-temp-gray2  rounded-md px-2 flex flex-row justify-between items-center' >
                      <input className='bg-transparent w-full outline-none  h-9' type='text' required name='where' placeholder='Location' />
                      <span className='block w-4 h-4 '>
                        <IconContext.Provider value={{ color: "#afafaf"}}>
                          <div>
                            <ImLocation2/>
                          </div>
                        </IconContext.Provider>
                      </span>
                    </div>
                  </div>
                  <div className='flex flex-row justify-between my-3' >
                    <div>
                      <label className='font-bold text-gray-700  ' >Check In</label>
                      <div className='w-full mt-1 border border-temp-gray2  rounded-md px-2 flex flex-row justify-between items-center' >
                        <input className='bg-transparent w-full outline-none text-temp-gray2  h-9' type='date' required name='where' placeholder='Location' />
                        <span className='block w-4 h-4 '>
                          <IconContext.Provider value={{ color: "#afafaf"}}>
                            <div>
                              <CgCalendarDates/>
                            </div>
                          </IconContext.Provider>
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className='font-bold text-gray-700  ' >Check Out</label>
                      <div className='w-full mt-1 border border-temp-gray2  rounded-md px-2 flex flex-row justify-between items-center' >
                        <input className='bg-transparent w-full outline-none text-temp-gray2  h-9' type='date' required name='where' placeholder='Location' />
                        <span className='block w-4 h-4 '>
                          <IconContext.Provider value={{ color: "#afafaf"}}>
                            <div>
                              <CgCalendarDates/>
                            </div>
                          </IconContext.Provider>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-row justify-between my-3' >
                    <div>
                      <label className='font-bold text-gray-700  ' >Adult</label>
                      <div className='w-full mt-1 border border-temp-gray2  rounded-md px-2 flex flex-row justify-between items-center' >
                        <input className='bg-transparent w-full outline-none  h-9' type='text' required name='where' placeholder='Location' />
                      </div>
                    </div>
                    <div>
                      <label className='font-bold text-gray-700  ' >Children</label>
                      <div className='w-full mt-1 border border-temp-gray2  rounded-md px-2 flex flex-row justify-between items-center' >
                        <input className='bg-transparent w-full outline-none  h-9' type='text' required name='where' placeholder='Location' />
                      </div>
                    </div>
                  </div>
                  <div className='w-full mt-6'>
                      <input type='submit' className='bg-temp-red w-full h-10 font-bold'  value="Check Availaibility" />
                  </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Hero