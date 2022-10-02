import React from 'react'

function Loader() {
  return (
    <div className='w-full h-screen bg-white flex items-center justify-center' >
        <div className="lds-ripple"><div></div><div></div></div>
    </div>
  )
}

export default Loader