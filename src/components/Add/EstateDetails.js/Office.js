import React, { useContext, useEffect, useState } from "react";
import { PanoramaContext } from "../../../states/panorama_context";

function Office() {
  const { datas, setDatas } = useContext(PanoramaContext);

  const [premises, setPremises] = useState(0);
  const [parkingSpaces, setParkingSpaces] = useState(0);
  const [toilets, setToilets] = useState("");
  const [usableSurface, setUsableSurface] = useState("");
  const [landarea, setLandArea] = useState("");
  const [yearOfconstruction, setYearOfconstruction] = useState("");
  const [officerealEstate, setOfficerealEstate] = useState("");
  const [officeClass, setOfficeClass] = useState("");
  const [rooms, setrooms] = useState();
  const [altitudeRegime, setAltitudeRegime] = useState();
  const [peopertyAvailability, setPeopertyAvailability] = useState();
  useEffect(() => {
    setDatas({
      ...datas,
      premises,
      parkingSpaces,
      toilets,
      usableSurface,
      land: landarea,
      altitudeRegime,
      officeClass,
      officerealEstate,
      yearOfconstruction,
      peopertyAvailability,
    });
    // }
  }, [
    premises,
    parkingSpaces,
    peopertyAvailability,
    toilets,
    officeClass,
    officerealEstate,
    usableSurface,
    landarea,
    yearOfconstruction,
    altitudeRegime,
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
              <span className=" mb-2">Premises</span>
              <div className="flex items-center justify-center">
                <a
                  onClick={() =>
                    premises > 0 ? setPremises(premises - 1) : setPremises(0)
                  }
                  className=" cursor-pointer hover:border-white hover:text-white w-6 h-6 border rounded-full border-cyan-900  text-cyan-900 font-medium flex items-center justify-center"
                >
                  -
                </a>
                <span className="w-10 flex items-center justify-center">
                  {premises}
                </span>
                <a
                  onClick={() => setPremises(premises + 1)}
                  className="w-6 h-6 border cursor-pointer hover:border-white hover:text-white rounded-full border-cyan-900  text-cyan-900 font-medium flex items-center justify-center"
                >
                  +
                </a>
              </div>
            </div>
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
                  onChange={(e) => setUsableSurface(e.target.value)}
                  type={"text"}
                  className="w-14 text-center outline-none text-white border-b bg-temp-gray2 border-b-cyan-900 border-dashed"
                />
              </div>
            </div>

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
              <span className=" mb-2">Year of construction</span>
              <div className="flex items-center justify-center">
                <input
                  type={"text"}
                  onChange={(e) => setYearOfconstruction(e.target.value)}
                  className="w-14 text-center outline-none text-white border-b bg-temp-gray2 border-b-cyan-900 border-dashed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 h-20">
        <div>
          <span className="text-base font-medium text-temp-gray">
            ALTITUDE REGIME
          </span>
          <div className="mt-3 w-40 h-10 px-4 bg-[#eee]">
            <input
              type="text"
              onChange={(e) => setAltitudeRegime(e.target.value)}
              className="w-full bg-[#eee] h-full outline-none col-span-1"
            />
          </div>
        </div>
      </div>

      <div className="h-20 mt-4">
        <div className="mt-6 h-20">
          <span className="text-base font-medium text-temp-gray">
            OFFICE REAL ESTATE TYPE
          </span>
          <div className="h-12 grid  grid-cols-1 mt-4">
            <div className="flex flex-row gap-5 col-span-1">
              <a
                onClick={() => setOfficerealEstate("building-offcice")}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  officerealEstate != "building-offcice"
                    ? "bg-temp-gray2"
                    : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                Office building
              </a>
              <a
                onClick={() => setOfficerealEstate("House")}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  officerealEstate != "house" ? "bg-temp-gray2" : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                House
              </a>
              <a
                onClick={() => setOfficerealEstate("Block of Flates")}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  officerealEstate != "block-of-flats"
                    ? "bg-temp-gray2"
                    : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                Block of flats
              </a>
              <a
                onClick={() => setOfficerealEstate("Mixed Building")}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  officerealEstate != "mixed-building"
                    ? "bg-temp-gray2"
                    : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                Mixed building
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 h-20">
        <span className="text-base font-medium text-temp-gray">
          PROPERTY AVAILABILITY
        </span>
        <div className="mt-3 w-40 h-10 px-4 bg-[#eee]">
          <input
            onChange={(e) => setPeopertyAvailability(e.target.value)}
            type="text"
            className="w-full bg-[#eee] h-full outline-none col-span-1"
          />
        </div>
      </div>

      <div className="h-20 mt-4">
        <div className="mt-6 h-20">
          <span className="text-base font-medium text-temp-gray">
            OFFICE CLASS
          </span>
          <div className="h-12 grid  grid-cols-1 mt-4">
            <div className="flex flex-row gap-5 col-span-1">
              <a
                onClick={() => setOfficeClass("a")}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  officeClass != "a"
                    ? "bg-temp-gray2"
                    : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                A
              </a>
              <a
                onClick={() => setOfficeClass("b")}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  officeClass != "b" ? "bg-temp-gray2" : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                B
              </a>
              <a
                onClick={() => setOfficeClass("vs")}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  officeClass != "vs"
                    ? "bg-temp-gray2"
                    : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                VS
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Office;
