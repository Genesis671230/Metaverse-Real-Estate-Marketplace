import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParanoma } from "../../../../hooks/useParanoma";
import { PanoramaContext } from "../../../../states/panorama_context";


function CommercialEdit() {
  const { datas, setDatas } = useContext(PanoramaContext);
  const { editParanoma } = useParanoma();
  
  const editParanomaData = useSelector(
    (state) => state.ParanomaEdit.editParanomaData
  );
  

  const [parkingSpaces, setParkingSpaces] = useState(editParanomaData.parkingSpaces);
  const [toilets, setToilets] = useState(editParanomaData.toilets);
  const [usableSurface, setUsableSurface] = useState(editParanomaData.UsableSurface);
  const [CommercialArea, setCommercialArea] = useState(editParanomaData.CommercialArea);
  const [storageArea, setStorageArea] = useState(editParanomaData.storageArea);
  const [spaceHeight, setSpaceHeight] = useState(editParanomaData.spaceHeight);
  const [yearOfconstruction, setYearOfconstruction] = useState(editParanomaData.YearsOfConstruction);
  
  const [officerealEstateGuy, setOfficerealEstateGuy] = useState(editParanomaData.officerealEstateGuy);
  
  useEffect(() => {
    setDatas({
      ...datas,
      parkingSpaces,
      toilets,
      usableSurface,
      CommercialArea,
      storageArea,
      yearOfconstruction,
      spaceHeight,
      officerealEstateGuy

    });
    editParanoma({
      parkingSpaces: parkingSpaces,
      toilets: toilets,
      UsableSurface: usableSurface,
      CommercialArea: CommercialArea,
      storageArea: storageArea,
      YearsOfConstruction: yearOfconstruction,
      spaceHeight: spaceHeight,
      officerealEstateGuy: officerealEstateGuy,
    })

    // }
  }, [
    officerealEstateGuy,
    parkingSpaces,
    toilets,
    usableSurface,
    CommercialArea,
    storageArea,
    yearOfconstruction,
    spaceHeight,
  ]);

  useEffect(() => {
    console.log(datas);
  }, [datas]);

  return (
    <>
      <div className="mt-4 h-20 ">
        <div className="h-12 grid  grid-cols-1">
          <div className="flex flex-row gap-5 col-span-1">
            <div
              className={`h-20 w-36 flex items-center bg-temp-gray2  flex-col justify-center text-white text-sm`}
            >
              <span className=" mb-2">Parking spaces</span>
              <div className="flex items-center justify-center">
                <a
                  onClick={() =>
                    parkingSpaces > 0
                      ? setParkingSpaces(parkingSpaces - 1)
                      : setParkingSpaces(0)
                  }
                  className=" cursor-pointer hover:border-white hover:text-white w-6 h-6 border rounded-full border-cyan-900  text-cyan-900 font-medium flex items-center justify-center"
                >
                  -
                </a>
                <span className="w-10 flex items-center justify-center">
                  {parkingSpaces}
                </span>
                <a
                  onClick={() => setParkingSpaces(parkingSpaces + 1)}
                  className="w-6 h-6 border cursor-pointer hover:border-white hover:text-white rounded-full border-cyan-900  text-cyan-900 font-medium flex items-center justify-center"
                >
                  +
                </a>
              </div>
            </div>

            <div
              className={`h-20 w-36 flex items-center bg-temp-gray2  flex-col justify-center text-white text-sm`}
            >
              <span className=" mb-2">Toilets</span>
              <div className="flex items-center justify-center">
                <a
                  onClick={() =>
                    toilets > 0 ? setToilets(toilets - 1) : setToilets(0)
                  }
                  className=" cursor-pointer hover:border-white hover:text-white w-6 h-6 border rounded-full border-cyan-900  text-cyan-900 font-medium flex items-center justify-center"
                >
                  -
                </a>
                <span className="w-10 flex items-center justify-center">
                  {toilets}
                </span>
                <a
                  onClick={() => setToilets(toilets + 1)}
                  className="w-6 h-6 border cursor-pointer hover:border-white hover:text-white rounded-full border-cyan-900  text-cyan-900 font-medium flex items-center justify-center"
                >
                  +
                </a>
              </div>
            </div>

            <div
              className={`h-20 w-36 flex items-center bg-temp-gray2  flex-col justify-center text-white text-sm`}
            >
              <span className=" mb-2">Usable surface</span>
              <div className="flex items-center justify-center">
                <input
                defaultValue={usableSurface}
                  onChange={(e) => setUsableSurface(e.target.value)}
                  type={"text"}
                  className="w-14 text-center outline-none text-white border-b bg-temp-gray2 border-b-cyan-900 border-dashed"
                />
              </div>
            </div>

            <div
              className={`h-20 w-36 flex items-center bg-temp-gray2  flex-col justify-center text-white text-sm`}
            >
              <span className=" mb-2">Commercial area</span>
              <div className="flex items-center justify-center">
                <input
                defaultValue={CommercialArea}
                  onChange={(e) => setCommercialArea(e.target.value)}
                  type={"text"}
                  className="w-14 text-center outline-none text-white border-b bg-temp-gray2 border-b-cyan-900 border-dashed"
                />
              </div>
            </div>

            <div
              className={`h-20 w-36 flex items-center bg-temp-gray2  flex-col justify-center text-white text-sm`}
            >
              <span className=" mb-2">Storage area</span>
              <div className="flex items-center justify-center">
                <input
                defaultValue={storageArea}
                  onChange={(e) => setStorageArea(e.target.value)}
                  type={"text"}
                  className="w-14 text-center outline-none text-white border-b bg-temp-gray2 border-b-cyan-900 border-dashed"
                />
              </div>
            </div>

            <div
              className={`h-20 w-36 flex items-center bg-temp-gray2  flex-col justify-center text-white text-sm`}
            >
              <span className=" mb-2">Year of construction</span>
              <div className="flex items-center justify-center">
                <input
                defaultValue={yearOfconstruction}
                  type={"text"}
                  onChange={(e) => setYearOfconstruction(e.target.value)}
                  className="w-14 text-center outline-none text-white border-b bg-temp-gray2 border-b-cyan-900 border-dashed"
                />
              </div>
            </div>
            <div
              className={`h-20 w-36 flex items-center bg-temp-gray2  flex-col justify-center text-white text-sm`}
            >
              <span className=" mb-2">Space height (m)</span>
              <div className="flex items-center justify-center">
                <input
                defaultValue={spaceHeight}
                  type={"text"}
                  onChange={(e) => setSpaceHeight(e.target.value)}
                  className="w-14 text-center outline-none text-white border-b bg-temp-gray2 border-b-cyan-900 border-dashed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-20 mt-4">
        <div className="mt-6 h-20">
          <span className="text-base font-medium text-temp-gray">
            REAL ESTATE GUY
          </span>
          <div className="h-12 grid  grid-cols-1 mt-4">
            <div className="flex flex-row gap-5 col-span-1">
              <a
                onClick={() => setOfficerealEstateGuy("Office Building")}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  officerealEstateGuy != "Office Building"
                    ? "bg-temp-gray2"
                    : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                Office building
              </a>
              <a
                onClick={() => setOfficerealEstateGuy("House")}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  officerealEstateGuy != "House"
                    ? "bg-temp-gray2"
                    : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                House
              </a>
              <a
                onClick={() => setOfficerealEstateGuy("Block")}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  officerealEstateGuy != "Block"
                    ? "bg-temp-gray2"
                    : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                Block of flats
              </a>
              <a
                onClick={() => setOfficerealEstateGuy("Mixed Building")}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  officerealEstateGuy != "Mixed Building"
                    ? "bg-temp-gray2"
                    : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                Mixed building
              </a>
              <a
                onClick={() => setOfficerealEstateGuy("Mall")}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  officerealEstateGuy != "Mall"
                    ? "bg-temp-gray2"
                    : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
               Mall
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommercialEdit;
