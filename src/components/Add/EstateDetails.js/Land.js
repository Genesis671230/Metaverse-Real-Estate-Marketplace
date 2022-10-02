import React, { useContext, useEffect, useState } from "react";
import { PanoramaContext } from "../../../states/panorama_context";

function Land() {
  const [classification, setClassification] = useState();
  const [landarea, setLandArea] = useState();
  const [streetFront, setStreetFront] = useState();
  const [terrainType, SetTerrainType] = useState();
  const [features, setFeatures] = useState();
  const { datas, setDatas } = useContext(PanoramaContext);
  useEffect(() => {
    setDatas({
      ...datas,
      landarea,
      streetFront,
      terrainType,
      features,
    });
    // }
  }, [landarea, streetFront, terrainType, features]);

  useEffect(() => {
    console.log(datas);
  }, [datas]);

  return (
    <>
      <div className="mt-6 h-20 ">
        <div className="h-12 grid  grid-cols-1">
          <div className="flex flex-row gap-5 col-span-1">
            <div
              className={`h-20 w-36 flex items-center bg-temp-gray2  flex-col justify-center text-white text-sm`}
            >
              <span className=" mb-2">Land area</span>
              <div className="flex items-center justify-center">
                <input
                  onChange={(e) => setLandArea(e.target.value)}
                  type={"text"}
                  className="w-14 text-center outline-none text-white border-b bg-temp-gray2 border-b-cyan-900 border-dashed"
                />
              </div>
            </div>
            <div
              className={`h-20 w-36 flex items-center bg-temp-gray2  flex-col justify-center text-white text-sm`}
            >
              <span className=" mb-2">Street front</span>
              <div className="flex items-center justify-center">
                <input
                  onChange={(e) => setStreetFront(e.target.value)}
                  type={"text"}
                  className="w-14 text-center outline-none text-white border-b bg-temp-gray2 border-b-cyan-900 border-dashed"
                />
              </div>
            </div>

            <div
              className={`h-20 w-36 flex items-center bg-temp-gray2  flex-col justify-center text-white text-sm`}
            >
              <span className=" mb-2">Terrain type</span>
              <div className="flex items-center justify-center">
                <select
                  name="terrain-type"
                  onChange={(e) => SetTerrainType(e.target.value)}
                  value={terrainType}
                  id="confort"
                  className="w-24 text-center outline-none text-black"
                >
                  <option
                    selected={terrainType != 0 ? true : false}
                    value=""
                  ></option>
                  <option value="mixt">mixt</option>
                  <option value="agricultural">agricultural</option>
                  <option value="residential">residential</option>
                  <option value="commercial">commercial</option>
                  <option value="industrial">industrial</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 mt-4">
        <div className="mt-6 h-20">
          <span className="text-base font-medium text-temp-gray">FEATURES</span>
          <div className="h-12 grid  grid-cols-1 mt-4">
            <div className="flex flex-row gap-5 col-span-1">
              <a
                onClick={() => setFeatures("current")}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  features != "current" ? "bg-temp-gray2" : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                Current
              </a>
              <a
                onClick={() => setFeatures("what")}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  features != "what" ? "bg-temp-gray2" : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                What
              </a>
              <a
                onClick={() => setFeatures("gas")}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  features != "gas" ? "bg-temp-gray2" : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                Gas
              </a>
              <a
                onClick={() => setFeatures("sewerage")}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  features != "sewerage" ? "bg-temp-gray2" : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                Sewerage
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Land;
