import React from "react";
import { useSelector } from "react-redux";

const ParanomaSelectionPanel = ({
  setuploadImg,
  uploadImg,
  activeParanoma,
  setActiveParanoma,
}) => {

  const  editParanomaData  = useSelector(
    (state) => state.ParanomaEdit.editParanomaData
  );
 
  return (
    <div className=" border-tl-2 rounded-tl-3xl flex-1 min-h-[568px] max-h-[568px] flex flex-col   bg-[#94979b]   border-r-cyan-200 border-r-2 pt-6  ">
      <label htmlFor="upload-img" className="w-full">
        <div className="whitespace-nowrap bg-[#2693ff] w-full mb-5 px-10 py-2 text-white text-center  hover:bg-[#e6e6e6]  hover:text-black ">
          Load paranoma
        </div>
      </label>

      <input
        onChange={(e) => {
          if(e.target.files[0]){
            setuploadImg((prev) => [...(prev ?? ""), e?.target?.files[0]]);
          }
        }}
        className="opacity-0"
        type="file"
        id="upload-img"
      />

      <div>
        {uploadImg.map((item, index) => {
          const name = (item?.name?.toString().replace(/(.jpg|.jpeg)/, "").slice(0,20));

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
    </div>
  );
};

export default ParanomaSelectionPanel;
