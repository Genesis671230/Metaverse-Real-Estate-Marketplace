import React from 'react'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {BiImageAdd} from 'react-icons/bi'
import {AiOutlineGlobal} from 'react-icons/ai'
import { IconContext } from "react-icons"
import { Link } from 'react-router-dom'


function Layout(props) {

    
  return (
    <div className='w-full bg-white h-screen flex flex-row justify-around fixed top-0 left-0 right-0 bottom-0 ' >
      <div className='md:w-52 h-screen bg-white border-r border-temp-[#fafafa]' >
        <div className='h-16 px-4 flex flex-row w-full justify-between items-center' >
            <Link to="/home">
            <span className='font-extrabold text-base text-temp-red block' >
                B
            </span>
            </Link>
            <a className='cursor-pointer' >
                <span className='w-6 h-6 flex justify-center items-center'>
                    <IconContext.Provider value={{ color: "#000"}}>
                        <div>
                            <Link to="/home">
                        <HiOutlineMenuAlt3/>
                            </Link>
                        </div>
                    </IconContext.Provider>
                </span>
            </a>
        </div>
        <div className='my-4' >
            <div  >
                <a className='cursor-pointer block mb-3' >
                    <div className='px-4 py-3 bg-white group hover:bg-temp-gray2 flex flex-row justify-center w-full border-b border-t items-center ' >
                        <Link to="/home">
                        <span className='hover:text-white  group-hover:text-white text-temp-gray2 font-normal text-sm mr-2' >Website</span>
                        </Link>
                        <span className='flex justify-center items-center '>
                            <IconContext.Provider value={{ color: "#fff"}}>
                                <div>
                                    <AiOutlineGlobal/>
                                </div>
                            </IconContext.Provider>
                        </span>
                    </div>
                </a>
                
            </div>
        </div>
      </div>
      <div className='w-full h-screen ' >
        <div className='w-full h-16 bg-white  flex justify-end items-center px-3 ' >
            <a onClick={()=>window.history.push('/add')} className='cursor-pointer w-48' >
                <div className='px-4 py-2 bg-temp-red flex flex-row justify-center w-48 border items-center rounded-full' >
                    <span className='text-white font-normal text-xs' >Add 360° image</span>
                    <span className='flex justify-center items-center '>
                        <IconContext.Provider value={{ color: "#fff"}}>
                            <div>
                                <BiImageAdd/>
                            </div>
                        </IconContext.Provider>
                    </span>
                </div>
            </a>
        </div>
        <div className='mx-7 mt-3  mb-10 child overflow-y-auto ' >
            {props.children}
        </div>
      </div>
    </div>
  )
}

export default Layout