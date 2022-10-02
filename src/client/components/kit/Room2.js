import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineWifi } from "react-icons/ai";
import { CgScreen } from "react-icons/cg";
import { Link } from "react-router-dom";
import { urlFor } from "../../../lib/utils";
function Room2({ itemData,snImg }) {
  const [imgFront, setImgFront] = useState();
  useEffect(() => {
    if (itemData) {
      const res = itemData.image[0]?.image;
      setImgFront(res);
      console.log(res,snImg);
    }
  }, []);
  console.log(itemData);
  return (
    <div className="bg-white w-[270px]  border border-[#00000017] ">
      {imgFront && (
        <Link to={`/tour/${itemData?.title}`} state={{ itemData: itemData,snImg:snImg }}>
          <img
            src={urlFor(imgFront).url()}
            width="full"
            style={{ objectFit: "cover", height: "250px" }}
          />
          <div className="p-3 flex flex-row justify-between items-center">
            <div>
              <span className="block  text-slate-800 font-extrabold text-lg">
                Single Room
              </span>
              <div className="flex flex-row mt-1">
                <span className="block text-temp-red font-extrabold text-xs">
                  {" "}
                  Start from $899
                </span>
              </div>
            </div>
            <div></div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default Room2;
