import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../states/user_context';

function Header() {
    const { user,dispatch } = useContext(UserContext);

  return (
    <div className='  h-32 flex flex-row justify-between items-center ' >
        <div>
            <span className='text-4xl font-extrabold text-temp-red' >BR</span>
        </div>
        {!user?
        <div className='flex flex-row  justify-between gap-3' >
            <a>
                <Link to="/client">
                <span className='border-temp-blue border-2 px-9 rounded-full py-3 text-base font-semibold text-black' > Login</span>
                </Link>
            </a>
            <a>
                <span className='bg-temp-red text-white  px-9 rounded-full py-3 text-base font-semibold whitespace-nowrap' > Sign Up</span>
            </a>
        </div>
        :
        <div className='flex flex-row  justify-between gap-3' >
            <a>
                <Link to="/client">
                <span className='border-temp-blue border-2 px-9 rounded-full py-3 text-base font-semibold text-black whitespace-nowrap' >Post Offer</span>
                </Link>
            </a>
            <a onClick={()=>dispatch({type:"LOGOUT"})} className="cursor-pointer">
                <span className='bg-temp-red  text-white  px-9 rounded-full py-3  font-semibold whitespace-nowrap' > Log out</span>
            </a>
            
        </div>
        }
    </div>
  )
}

export default Header