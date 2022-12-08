import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParanoma } from "../../../../hooks/useParanoma";
import { PanoramaContext } from "../../../../states/panorama_context";


function CaseEdit() {
  const { datas, setDatas } = useContext(PanoramaContext);
  const { editParanoma } = useParanoma();

  const editParanomaData = useSelector(
    (state) => state.ParanomaEdit.editParanomaData
  );

  const [rooms, setRooms] = useState(editParanomaData.rooms);
  const [yes, setYes] = useState(editParanomaData.Yes||editParanomaData.yes);
  const [confort, setConfort] = useState(editParanomaData.Confort);
  const [usableSurface, setUsableSurface] = useState(
    editParanomaData.UsableSurface || editParanomaData.usableSurface
  );
  const [land, setLand] = useState(editParanomaData.Land||editParanomaData.land);
  const [Streetf, setstreatf] = useState(editParanomaData.Streetf);
  const [yearOfconstruction, setYearOfconstruction] = useState(
    editParanomaData.YearsOfConstruction||editParanomaData.yearOfconstruction
  );
  const [parkingType, setParkingType] = useState(editParanomaData.parkingType);
  const [constructionType, setConstructionType] = useState(
    editParanomaData.constructionType
  );
  const [altitudeRegime, setAltitudeRegime] = useState(
    editParanomaData.AltitudeRegime
  );
  useEffect(() => {
    // if (datas.estateType == "case" || constructionType !== "") {
    setDatas({
      ...datas,
      constructionType,
      rooms,
      yes,
      usableSurface,
      land,
      Streetf,
      yearOfconstruction,
      parkingType,
      altitudeRegime
    });
    editParanoma({
      constructionType: constructionType,
      rooms: rooms,
      Yes: yes,
      UsableSurface: usableSurface,
      Land: land,
      Streetf: Streetf,
      YearsOfConstruction: yearOfconstruction,
      parkingType: parkingType,
      AltitudeRegime: altitudeRegime
    });
    // }
  }, [
    rooms,
    yes,
    usableSurface,
    land,
    Streetf,
    yearOfconstruction,
    constructionType,
    parkingType,
    altitudeRegime
  ]);

  return (
    <>
      <div className="h-20 mt-4">
        <div className="mt-6 h-20">
          <span className="text-base font-medium text-temp-gray">
            CONSTRUCTION
          </span>
          <div className="h-12 grid  grid-cols-1 mt-4">
            <div className="flex flex-row gap-5 col-span-1">
              <a
                onClick={() => setConstructionType("nine")}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  constructionType != "nine" ? "bg-temp-gray2" : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                Nine
              </a>
              <a
                onClick={() => setConstructionType("old")}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  constructionType != "old" ? "bg-temp-gray2" : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                Old
              </a>
              <a
                onClick={() => setConstructionType("inconst")}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  constructionType != "inconst"
                    ? "bg-temp-gray2"
                    : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                In construction
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 h-20 ">
        <div className="h-12 grid  grid-cols-1">
          <div className="flex flex-row gap-5 col-span-1">
            <div
              className={`h-20 w-36 flex items-center bg-temp-gray2  flex-col justify-center text-white text-sm`}
            >
              <span className=" mb-2">Rooms</span>
              <div className="flex items-center justify-center">
                <a
                  onClick={() =>
                    rooms > 0 ? setRooms(rooms - 1) : setRooms(0)
                  }
                  className=" cursor-pointer hover:border-white hover:text-white w-6 h-6 border rounded-full border-cyan-900  text-cyan-900 font-medium flex items-center justify-center"
                >
                  -
                </a>
                <span className="w-10 flex items-center justify-center">
                  {rooms}
                </span>
                <a
                  onClick={() => setRooms(rooms + 1)}
                  className="w-6 h-6 border cursor-pointer hover:border-white hover:text-white rounded-full border-cyan-900  text-cyan-900 font-medium flex items-center justify-center"
                >
                  +
                </a>
              </div>
            </div>
            <div
              className={`h-20 w-36 flex items-center bg-temp-gray2  flex-col justify-center text-white text-sm`}
            >
              <span className=" mb-2">Yes</span>
              <div className="flex items-center justify-center">
                <a
                  onClick={() => (yes > 0 ? setYes(yes - 1) : setYes(0))}
                  className=" cursor-pointer hover:border-white hover:text-white w-6 h-6 border rounded-full border-cyan-900  text-cyan-900 font-medium flex items-center justify-center"
                >
                  -
                </a>
                <span className="w-10 flex items-center justify-center">
                  {yes}
                </span>
                <a
                  onClick={() => setYes(yes + 1)}
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
              <span className=" mb-2">Land area</span>
              <div className="flex items-center justify-center">
                <input
                  defaultValue={land}
                  onChange={(e) => setLand(e.target.value)}
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
                  defaultValue={Streetf}
                  onChange={(e) => setstreatf(e.target.value)}
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
          </div>
        </div>
      </div>

      <div className="mt-6 h-20">
        <span className="text-base font-medium text-temp-gray">PARKING</span>
        <div className="h-12 grid  grid-cols-1 mt-4">
          <div className="flex flex-row gap-5 col-span-1">
            <a
              onClick={() => setParkingType("go")}
              className={`cursor-pointer h-10 w-36 flex items-center ${
                parkingType != "go" ? "bg-temp-gray2" : "bg-cyan-900"
              } justify-center text-white text-sm hover:bg-cyan-700 `}
            >
              Go
            </a>
            <a
              onClick={() => setParkingType("garage")}
              className={`cursor-pointer h-10 w-36 flex items-center ${
                parkingType != "garage" ? "bg-temp-gray2" : "bg-cyan-900"
              } justify-center text-white text-sm hover:bg-cyan-700 `}
            >
              Garage
            </a>
            <a
              onClick={() => setParkingType("suppraterrnane")}
              className={`cursor-pointer h-10 w-36 flex items-center ${
                parkingType != "suppraterrnane"
                  ? "bg-temp-gray2"
                  : "bg-cyan-900"
              } justify-center text-white text-sm hover:bg-cyan-700 `}
            >
              Supraterrane
            </a>
            <a
              onClick={() => setParkingType("underground")}
              className={`cursor-pointer h-10 w-36 flex items-center ${
                parkingType != "underground" ? "bg-temp-gray2" : "bg-cyan-900"
              } justify-center text-white text-sm hover:bg-cyan-700 `}
            >
              underground
            </a>
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
              defaultValue={altitudeRegime}
              type="text"
              onChange={(e) => setAltitudeRegime(e.target.value)}
              className="w-full bg-[#eee] h-full outline-none col-span-1"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CaseEdit;
