import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PanoramaContext } from "../../states/panorama_context";
import Appartements from "./EstateDetails.js/Appartements";
import Case from "./EstateDetails.js/Case";
import Commercial from "./EstateDetails.js/Commercial";
import IndustrialSpace from "./EstateDetails.js/IndustrialSpace";
import Land from "./EstateDetails.js/Land";
import Office from "./EstateDetails.js/Office";
import { setParanomaData } from "../../redux/paranomaSlice";

function Estatetype() {
  const [estateType, setEstateType] = useState("");
  const { datas, setDatas } = useContext(PanoramaContext);

  const dispatch = useDispatch();
  useEffect(() => {
    setDatas({
      ...datas,
      estateType: estateType,
    });
  }, [estateType]);
  useEffect(() => {
    console.log(datas);
  }, [datas]);
  return (
    <div className="mt-10">
      <span className="text-base font-medium text-temp-gray">
        REAL ESTATE TYPE
      </span>
      <div className="h-12 grid  grid-cols-1  mt-6">
        <div className="flex flex-row gap-5 col-span-1">
          <a
            onClick={() => {
              setEstateType("apartements");
              dispatch(setParanomaData({ estateType: "apartements" }));
            }}
            className={`cursor-pointer h-10 w-36 flex items-center ${
              estateType != "apartements" ? "bg-temp-gray2" : "bg-cyan-900"
            } justify-center text-white text-sm hover:bg-cyan-700 `}
          >
            Apartements
          </a>
          <a
            onClick={() => {
              setEstateType("case");
              dispatch(setParanomaData({ estateType: "case" }));
            }}
            className={`cursor-pointer h-10 w-36 flex items-center ${
              estateType != "case" ? "bg-temp-gray2" : "bg-cyan-900"
            } justify-center text-white text-sm hover:bg-cyan-700 `}
          >
            Case
          </a>
          <a
            onClick={() => {
              setEstateType("office");
              dispatch(setParanomaData({ estateType: "office" }));
            }}
            className={`cursor-pointer h-10 w-36 flex items-center ${
              estateType != "office" ? "bg-temp-gray2" : "bg-cyan-900"
            } justify-center text-white text-sm  hover:bg-cyan-700`}
          >
            Office
          </a>
          <a
            onClick={() => {
              setEstateType("commercial");
              dispatch(setParanomaData({ estateType: "commercial" }));
            }}
            className={`cursor-pointer h-10 w-36 flex items-center ${
              estateType != "commercial" ? "bg-temp-gray2" : "bg-cyan-900"
            } justify-center text-white text-sm  hover:bg-cyan-700`}
          >
            Commercial
          </a>
          <a
            onClick={() => {
              setEstateType("industrial");
              dispatch(setParanomaData({ estateType: "industrial" }));
            }}
            className={`cursor-pointer h-10 w-36 flex items-center ${
              estateType != "industrial" ? "bg-temp-gray2" : "bg-cyan-900"
            } justify-center text-white text-sm  hover:bg-cyan-700`}
          >
            Industrial space
          </a>
          <a
            onClick={() => {
              setEstateType("land");
              dispatch(setParanomaData({ estateType: "land" }));
            }}
            className={`cursor-pointer h-10 w-36 flex items-center ${
              estateType != "land" ? "bg-temp-gray2" : "bg-cyan-900"
            } justify-center text-white text-sm  hover:bg-cyan-700`}
          >
            Land
          </a>
        </div>
      </div>
      <div className="mt-10">
        {(estateType == "apartements" && <Appartements />) ||
          (estateType == "case" && <Case />) ||
          (estateType == "office" && <Office />) ||
          (estateType == "commercial" && <Commercial />) ||
          (estateType == "industrial" && <IndustrialSpace />) ||
          (estateType == "land" && <Land />)}
      </div>
    </div>
  );
}

export default Estatetype;
