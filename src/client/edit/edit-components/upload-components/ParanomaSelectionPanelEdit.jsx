import React, { useState } from "react";
import { useSelector } from "react-redux";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import DeleteIcon from '@mui/icons-material/Delete';
import { useSanity } from "../../../../hooks/useSanity";
import { useParanoma } from "../../../../hooks/useParanoma";
const ParanomaSelectionPanelEdit = ({
  setuploadImg,
  uploadImg,
  activeParanoma,
  setActiveParanoma,
}) => {
  const [loadImg, setLoadImg] = useState();
  const { uploadToGetLink } = useSanity();
  console.log(loadImg, uploadImg);
 const {addNewImage} = useParanoma()

  const upload = async () => {
   const response = await uploadToGetLink(loadImg);
   console.log(response);
   addNewImage(response)
   setLoadImg(undefined)
  };
  return (
    <div className=" border-tl-2 rounded-tl-3xl flex-1 min-h-[568px] max-h-[568px] flex flex-col   bg-[#94979b]   border-r-cyan-200 border-r-2 pt-6  ">
      <label htmlFor="upload-img" className="w-full">
        <div className="whitespace-nowrap bg-[#2693ff] w-full mb-5 px-10 py-2 text-white text-center  hover:bg-[#e6e6e6]  hover:text-black ">
          Load paranoma
        </div>
      </label>

      <input
        onChange={(e) => {
          if (e.target.files[0]) {
            setLoadImg(e?.target?.files[0]);
          }
        }}
        className="opacity-0"
        type="file"
        id="upload-img"
      />

      <div>
        {uploadImg?.map((item, index) => {
          const name = item?.title
            ?.toString()
            .replace(/(.jpg|.jpeg)/, "")
            .slice(0, 20);

          return (
            <div
              key={index}
              className={`w-full cursor-pointer capitalize flex justify-center text-white my-3 py-3 ${
                activeParanoma === index ? " bg-slate-800" : "bg-slate-600"
              }`}
              onClick={() => setActiveParanoma(index)}
            >
              {name}
            </div>
          );
        })}
      </div>
      {loadImg && (
        <div
         
          className="w-full cursor-pointer  capitalize flex gap-5 justify-center text-white my-3 py-3  bg-red-900"
        >
          <span> {loadImg?.name?.toString().slice(0, 20)} </span>{" "}
          <div className="flex gap-5">
          <span  onClick={upload}>
            <ArrowCircleUpIcon />{" "}
          </span>
          <span  onClick={()=>setLoadImg(undefined)}>
            <DeleteIcon />{" "}
          </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParanomaSelectionPanelEdit;
