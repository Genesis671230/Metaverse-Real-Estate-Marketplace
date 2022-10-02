import React, { useEffect } from 'react'
import { IconContext } from "react-icons"
import {ImLocation2} from 'react-icons/im'
import {AiOutlineWifi} from 'react-icons/ai'
import {CgScreen} from 'react-icons/cg'

function Room1(props) {
  useEffect(()=>{}, [props.url])
  return (
    <div className='bg-white w-[350px] -[350px] border border-[#00000017] ' >
      <div className={`h-[300px] w-full bg-slate-500 bg-center bg-no-repeat relative  bg-cover bg-[url('/assets/images/r2.jpg')]`} >
          <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#00000040] flex items-end' >
          </div>
          <div className='absolute left-0 top-0 bottom-0 w-20 p-5 flex items-center justify-end flex-col'>
              <a className='mb-2' >
                 <span className=' p-2 bg-white flex items-center justify-center h-8 w-8' >
                    <span className='block'>
                      <IconContext.Provider value={{ color: "#000"}}>
                        <div>
                          <AiOutlineWifi/>
                        </div>
                      </IconContext.Provider>
                  </span>
                 </span>
              </a>
              <a>
                 <span className=' p-2 bg-white flex items-center justify-center h-8 w-8' >
                    <span className='block'>
                      <IconContext.Provider value={{ color: "#000"}}>
                        <div>
                          <CgScreen/>
                        </div>
                      </IconContext.Provider>
                  </span>
                 </span>
              </a>
          </div>
          <div className='absolute bottom-0 right-0 w-32 h-10 bg-[#52ad59] flex items-center justify-center svg ' > <span className='block text-bold text-white' >30% Offres</span></div>
      </div>
      <div className='p-5 flex flex-row justify-between items-center'  >
        <div>
            <span className='block  text-slate-800 font-extrabold text-xl' >Single Room</span>
            <div className='flex flex-row mt-1' >
              <span className='block w-4 h-4 '>
                <IconContext.Provider value={{ color: "#afafaf"}}>
                  <div>
                    <ImLocation2/>
                  </div>
                </IconContext.Provider>
              </span>
              <span className='block  text-temp-gray font-medium text-' >Kodambakkam</span>
            </div>
        </div>
        <div>
          <span className='block text-temp-red font-extrabold text-base' >$899/ per day</span>
        </div>
      </div>
    </div>
  )
}

export default Room1