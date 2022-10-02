import React from 'react'
import {ImLocation2} from 'react-icons/im'
import { IconContext } from "react-icons"

function Footer() {
  return (
    <div className="mt-12 h-[400px] w-full border-t border-t-slate-200 md:px-36 pt-12" >
        <div className='flex flex-col gap-10 md:grid grid-cols-2 gap-20' >
            <div className='col-span-1' >
                <div>
                  <span className='text-4xl font-extrabold text-temp-red' >BR</span>
                </div>
                <div className='mt-4' >
                  <span className='text-lg font-extrabold text-temp-gray2 text-left' >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer et consectetur sem, in commodo neque. Nullam vel pretium diam. Ut vitae rhoncus augue.
                    Duis luctus vulputate turpis, eget auctor massa placerat tincidunt. 
                  </span>
                </div>
            </div>
            <div className='col-span-1 grid grid-cols-2' >
              <div className='col-span-1 flex flex-col item-center '>
                <span className='text-2xl font-bold text-temp-gray mb-5' >Contact Us</span>
                <div className='w-full h-6 flex flex-row justify-start items-center mb-4' >
                  <span className='block w-5 h-5 '>
                      <IconContext.Provider value={{ color: "#000000"}}>
                        <div>
                          <ImLocation2/>
                        </div>
                      </IconContext.Provider>
                  </span>
                <span className=' ml-2 text-LG font-bold text-temp-gray' >25 Avenu lost blablabla</span>
                </div>
                <div className='w-full h-6 flex flex-row justify-start items-center mb-4' >
                  <span className='block w-5 h-5 '>
                      <IconContext.Provider value={{ color: "#000000"}}>
                        <div>
                          <ImLocation2/>
                        </div>
                      </IconContext.Provider>
                  </span>
                <span className=' ml-2 text-LG font-bold text-temp-gray' >25 Avenu lost blablabla</span>
                </div>
                <div className='w-full h-6 flex flex-row justify-start items-center mb-4' >
                  <span className='block w-5 h-5 '>
                      <IconContext.Provider value={{ color: "#000000"}}>
                        <div>
                          <ImLocation2/>
                        </div>
                      </IconContext.Provider>
                  </span>
                <span className=' ml-2 text-LG font-bold text-temp-gray' >25 Avenu lost blablabla</span>
                </div>
                <div className='w-full h-6 flex flex-row justify-start items-center mb-4' >
                  <span className='block w-5 h-5 '>
                      <IconContext.Provider value={{ color: "#000000"}}>
                        <div>
                          <ImLocation2/>
                        </div>
                      </IconContext.Provider>
                  </span>
                <span className=' ml-2 text-LG font-bold text-temp-gray' >25 Avenu lost blablabla</span>
                </div>
              </div>
              <div className='col-span-1 flex flex-col item-center '>
                <span className='text-2xl font-bold text-temp-gray mb-5' >Social Media</span>
                <div className='w-full h-6 flex flex-row justify-start items-center mb-4' >
                  <span className='block w-5 h-5 '>
                      <IconContext.Provider value={{ color: "#000000"}}>
                        <div>
                          <ImLocation2/>
                        </div>
                      </IconContext.Provider>
                  </span>
                <span className=' ml-2 text-LG font-bold text-temp-gray' >25 Avenu lost blablabla</span>
                </div>
                <div className='w-full h-6 flex flex-row justify-start items-center mb-4' >
                  <span className='block w-5 h-5 '>
                      <IconContext.Provider value={{ color: "#000000"}}>
                        <div>
                          <ImLocation2/>
                        </div>
                      </IconContext.Provider>
                  </span>
                <span className=' ml-2 text-LG font-bold text-temp-gray' >25 Avenu lost blablabla</span>
                </div>
                <div className='w-full h-6 flex flex-row justify-start items-center mb-4' >
                  <span className='block w-5 h-5 '>
                      <IconContext.Provider value={{ color: "#000000"}}>
                        <div>
                          <ImLocation2/>
                        </div>
                      </IconContext.Provider>
                  </span>
                <span className=' ml-2 text-LG font-bold text-temp-gray' >25 Avenu lost blablabla</span>
                </div>
                <div className='w-full h-6 flex flex-row justify-start items-center mb-4' >
                  <span className='block w-5 h-5 '>
                      <IconContext.Provider value={{ color: "#000000"}}>
                        <div>
                          <ImLocation2/>
                        </div>
                      </IconContext.Provider>
                  </span>
                <span className=' ml-2 text-LG font-bold text-temp-gray' >25 Avenu lost blablabla</span>
                </div>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default Footer