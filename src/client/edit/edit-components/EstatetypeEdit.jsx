import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParanoma } from "../../../hooks/useParanoma";
import { PanoramaContext } from "../../../states/panorama_context";
import AppartementsEdit from "./EstateDetails.js/AppartementsEdit";
import CaseEdit from "./EstateDetails.js/CaseEdit";
import CommercialEdit from "./EstateDetails.js/CommercialEdit";
import IndustrialSpaceEdit from "./EstateDetails.js/IndustrialSpaceEdit";
import LandEdit from "./EstateDetails.js/LandEdit";
import OfficeEdit from "./EstateDetails.js/OfficeEdit";

function EstatetypeEdit() {
  const [estateType, setEstateType] = useState("");
  const { datas, setDatas } = useContext(PanoramaContext);

  const editParanomaData = useSelector(
    (state) => state.ParanomaEdit.editParanomaData
  );

  const { editParanoma } = useParanoma();

  const selectEstateType = (type) => {
    setEstateType(type);
  };

  useEffect(() => {
    setDatas({
      ...datas,
      estateType: estateType,
    });
    editParanoma({ estateType: estateType });
  }, [estateType]);

  return (
    <div className="mt-10">
      <span className="text-base font-medium text-temp-gray">
        REAL ESTATE TYPE
      </span>
      <div className="h-12 grid  grid-cols-1  mt-6">
        <div className="flex flex-row gap-5 col-span-1">
          <a
            onClick={() => selectEstateType("apartements")}
            className={`cursor-pointer h-10 w-36 flex items-center ${
              editParanomaData.estateType != "apartements"
                ? "bg-temp-gray2"
                : "bg-cyan-900"
            } justify-center text-white text-sm hover:bg-cyan-700 `}
          >
            Apartements
          </a>
          <a
            onClick={() => selectEstateType("case")}
            className={`cursor-pointer h-10 w-36 flex items-center ${
              editParanomaData.estateType != "case"
                ? "bg-temp-gray2"
                : "bg-cyan-900"
            } justify-center text-white text-sm hover:bg-cyan-700 `}
          >
            Case
          </a>
          <a
            onClick={() => {
              selectEstateType("office");
            }}
            className={`cursor-pointer h-10 w-36 flex items-center ${
              editParanomaData.estateType != "office"
                ? "bg-temp-gray2"
                : "bg-cyan-900"
            } justify-center text-white text-sm  hover:bg-cyan-700`}
          >
            Office
          </a>
          <a
            onClick={() => selectEstateType("commercial")}
            className={`cursor-pointer h-10 w-36 flex items-center ${
              editParanomaData.estateType != "commercial"
                ? "bg-temp-gray2"
                : "bg-cyan-900"
            } justify-center text-white text-sm  hover:bg-cyan-700`}
          >
            Commercial
          </a>
          <a
            onClick={() => selectEstateType("industrial")}
            className={`cursor-pointer h-10 w-36 flex items-center ${
              editParanomaData.estateType != "industrial"
                ? "bg-temp-gray2"
                : "bg-cyan-900"
            } justify-center text-white text-sm  hover:bg-cyan-700`}
          >
            Industrial space
          </a>
          <a
            onClick={() => selectEstateType("land")}
            className={`cursor-pointer h-10 w-36 flex items-center ${
              editParanomaData.estateType != "land"
                ? "bg-temp-gray2"
                : "bg-cyan-900"
            } justify-center text-white text-sm  hover:bg-cyan-700`}
          >
            Land
          </a>
        </div>
      </div>
      <div className="mt-10">
        {(editParanomaData.estateType == "apartements" && (
          <AppartementsEdit />
        )) ||
          (editParanomaData.estateType == "case" && <CaseEdit />) ||
          (editParanomaData.estateType == "office" && <OfficeEdit />) ||
          (editParanomaData.estateType == "commercial" && <CommercialEdit />) ||
          (editParanomaData.estateType == "industrial" && (
            <IndustrialSpaceEdit />
          )) ||
          (editParanomaData.estateType == "land" && <LandEdit />)}
      </div>
    </div>
  );
}

export default EstatetypeEdit;
