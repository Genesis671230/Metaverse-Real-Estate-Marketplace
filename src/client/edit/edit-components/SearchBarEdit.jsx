import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PanoramaContext } from "../../../states/panorama_context";
import { ViewPortContext } from "../../../states/viewport_context";

function SearchBarEdit() {
  const [focus, setFocus] = useState(false);
  const [values, setValues] = useState([]);
  const [street, setstreet] = useState();
  const [StreeNumber, setStreetNumber] = useState();

  const { datas, setDatas } = useContext(PanoramaContext);
  const { viewport, setViewport } = useContext(ViewPortContext);

  const startSearch = async (val1, val2, val3) => {
    const baseUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
    const accessToken =
      "pk.eyJ1Ijoic21hcnRkZXYxMjMiLCJhIjoiY2t5bGZvODhyMDAxMjJwcGE2Yzhrc25kayJ9.-UYwiZVX6ombKhaev9cryQ";
    const url = `${baseUrl + val1 + ".json?access_token=" + accessToken}`;
    setTimeout(async () => {
      var res = await fetch(url);
      var data = await res.json();
      setValues(data.features);
    }, 1000);
  };

  const listItems = values.map((item, index) => (
    <a
      onClick={() => {
        setDatas({
          uid: uuidv4(),
          coordinates: [
            item.geometry.coordinates[0],
            item.geometry.coordinates[1],
          ],
        });
        setFocus(false);
        setViewport({
          ...viewport,
          latitude: item.geometry.coordinates[1],
          longitude: item.geometry.coordinates[0],
          zoom: 30.5,
          bearing: 70,
          pitch: 40,
        });
      }}
      className="cursor-pointer"
      key={index}
    >
      <li className="list-none text-cyan-900 py-2 hover:bg-temp-gray2 hover:text-white">
        {item.place_name}
      </li>
    </a>
  ));
  return (
    <ViewPortContext.Provider value={viewport}>
      <div className="h-12 w-full -translate-y-[102px] flex-col flex items-center justify-center">
        <a className="block cursor-pointer ">
          <div className="w-[33pc] h-16 bg-white border px-4 shadow-sm flex items-center justify-end">
            <input
              onFocus={() => setFocus(true)}
              onChange={(e) => {
                startSearch(e.target.value);
              }}
              className="w-full h-full outline-none bg-white text-center"
              type="text"
              placeholder="Type city"
            />
            <input
              onFocus={() => setFocus(true)}
              onChange={(e) => setstreet(e.target.value)}
              className="w-full h-full outline-none bg-white text-center"
              type="text"
              placeholder="Street"
            />
            <input
              onFocus={() => setFocus(true)}
              onChange={(e) => setStreetNumber(e.target.value)}
              className="w-full h-full outline-none bg-white text-center"
              type="text"
              placeholder="Number"
            />
          </div>
        </a>
        {focus && (
          <div className="absolute bg-white top-14 w-[33pc] h-32 overflow-y-auto p-4">
            {listItems}
          </div>
        )}
      </div>
    </ViewPortContext.Provider>
  );
}

export default SearchBarEdit;
