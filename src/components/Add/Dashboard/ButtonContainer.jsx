import React from 'react'

const ButtonContainer = ({uploadToClient}) => {
  return (
    <div className="w-full h-14 my-10">
    <div className="h-12 grid  w-full grid-cols-2  my-3 relative">
      <div className="flex flex-row items-end justify-end  w-full gap-5 col-span-1 absolute right-0 ">
        <a
          onClick={uploadToClient}
          className={`cursor-pointer h-10 w-36 flex bg-green-900 items-center justify-center text-white text-sm hover:bg-cyan-700 `}
        >
          Add
        </a>
        <a
          className={`cursor-pointer h-10 w-36 flex items-center bg-red-900 justify-center text-white text-sm hover:bg-cyan-700 `}
        >
          Cancel
        </a>
      </div>
    </div>
  </div>
  )
}

export default ButtonContainer