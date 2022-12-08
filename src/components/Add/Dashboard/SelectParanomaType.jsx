import React from 'react'

const SelectParanomaType = ({setfileType,uploadImg,fileType,working}) => {
  return (
    <div className="my-4">
    <div className="h-12 grid  grid-cols-1  my-3">
      <div className="flex flex-row gap-5 col-span-1">
        <a
          onClick={() => setfileType(1)}
          className={`cursor-pointer h-10 w-36 flex items-center ${
            fileType != 1 ? "bg-temp-gray2" : "bg-cyan-900"
          } justify-center text-white text-sm hover:bg-cyan-700 `}
        >
          360° File
        </a>
        <a
          onClick={() => setfileType(2)}
          className={`cursor-pointer h-10 w-36 flex items-center ${
            fileType != 2 ? "bg-temp-gray2" : "bg-cyan-900"
          } justify-center text-white text-sm hover:bg-cyan-700 `}
        >
          360° Url
        </a>
        {uploadImg && (
          <a
            onClick={() => working()}
            className={`cursor-pointer h-10 w-36  flex items-center ${
              fileType != 2 ? "bg-green-600" : "bg-cyan-900"
            } justify-center text-white text-sm hover:bg-cyan-700 `}
          >
            Upload
          </a>
        )}
      </div>
    </div>
  </div>
  )
}

export default SelectParanomaType