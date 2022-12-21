import * as cors from "cors";
import axios from "axios";
import { imgSrcToDataURL } from "blob-util";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PanoramaPanillum from "../panellum/PanoramaPanillum";
import { urlFor } from "../lib/utils";
import MapView from "../components/Map";
import { Map, Marker } from "react-map-gl";

const TourDetails = () => {
  const [tourDetails, setTourDetails] = useState();
  const [catchSnImg, setCatchSnImg] = useState();
  const [data, setData] = useState();
  const location = useLocation();

  useEffect(() => {
    {
      location.state?.itemData?.image[0] &&
        setTourDetails(location.state?.itemData);
        const dataOBJ = Object.entries(location.state?.itemData);
        setData(dataOBJ)
      setCatchSnImg(urlFor(location.state?.itemData.image[0].image).url());
    }
  }, []);

  const initialViewState = {
    latitude: Number(
      (tourDetails?.coordinates && tourDetails?.coordinates[1]) || 120
    ),
    longitude: Number(
      (tourDetails?.coordinates && tourDetails?.coordinates[0]) || 120
    ),
    zoom: 11,
    bearing: 0,
    pitch: 0,
  };

 

  return (
    <div>
      <div className=" ">
        <PanoramaPanillum img={tourDetails} />
      </div>
      {tourDetails && (
        <div className="bg-purple-700  ">
          <div className="p-5 pb-5  md:text-[3rem] shadow-sm min-h-screen text-black  backdrop-blur-sm bg-white ">
            <div className="my-5 xs:text-xl font-bold ">
              <p>{tourDetails?.title}</p>
            </div>
            <div className="md:text-[2rem] w-[50%] tracking-wide ml-10">
              <h6>{tourDetails?.description}</h6>
            </div>
            {data?.map((item,index) => {
              if(( typeof(item[1]) !== "string" || item[0] === "uid") ){
                return;
              }
              return (
                <div key={index} className="text-[2rem] mt-20 capitalize w-[50%] tracking-wide ml-10">
                  <div className="tracking-normal border-b-2 border-neutral-400 border- ">
                        {item[0]} 
                  </div>
                  <h6 className="text-[2.6rem]">{item[1]}</h6>
                </div>
              );
            })}
     

            <div className="text-[2rem]  md:flex justify-around align-center mt-20 capitalize md:w-[100%] tracking-wide ml-10">
              <div>
                <div className="tracking-normal border-b-2 border-neutral-400 border- ">
                  {" "}
                  Confort
                </div>
                <h6 className="text-[2.6rem]">{tourDetails?.Confort}</h6>
              </div>
              {/* <div>
                <div className="tracking-normal border-b-2 border-neutral-400 border- ">
                  {" "}
                  Transaction Type
                </div>
                <h6 className="text-[2.6rem]">
                  {tourDetails?.transactionType.type}
                </h6>
              </div> */}
              <div>
                <div className="tracking-normal border-b-2 border-neutral-400 border- ">
                  {" "}
                  Partitioning
                </div>
                <h6 className="text-[2.6rem]">{tourDetails?.partitioning}</h6>
              </div>
            </div>
            {tourDetails?.coordinates && (
              <>
                {tourDetails?.coordinates[0] && tourDetails?.coordinates[1] && (
                  <div className="h-[50vh] w-full mt-20">
                    <Map
                      className="overflow-hidden "
                      initialViewState={initialViewState}
                      mapboxAccessToken="pk.eyJ1Ijoic21hcnRkZXYxMjMiLCJhIjoiY2t5bGZvODhyMDAxMjJwcGE2Yzhrc25kayJ9.-UYwiZVX6ombKhaev9cryQ"
                      mapStyle="mapbox://styles/smartdev123/ckylt6sik7d7a15pwv030u2sd"
                    >
                      <Marker
                        longitude={tourDetails?.coordinates[0]??initialViewState.longitude}
                        anchor="bottom"
                        latitude={tourDetails?.coordinates[1] ??initialViewState.latitude}
                      >
                        <span className="block w-5 h-5 ">
                          <img
                            src={require("../assets/pin.png")}
                            style={{
                              width: 20,
                              height: 30,
                              resizeMode: "contain",
                            }}
                            alt="good"
                          />
                        </span>
                      </Marker>
                    </Map>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TourDetails;
