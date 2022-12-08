import React, { useState, useEffect, useContext,useRef, useCallback } from 'react'
import Map, { Marker, MapRef } from "react-map-gl";
import { ViewPortContext } from '../states/viewport_context';

function MapView() {
  const mapRef = useRef();

  const {viewport, setViewport} = useContext(ViewPortContext);
  const [isBrowser, setIsBrowser] = useState(false);

  
  const initialViewState = {
    latitude: 37.7751,
    longitude: -122.4193,
    zoom: 11,
    bearing: 0,
    pitch: 0
  };
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {      
      onSelectCity({longitude:viewport?.longitude, latitude:viewport?.latitude})
    }, 1000);
  }, [viewport])

  const onSelectCity = ({longitude, latitude}) => {
    if(longitude, latitude){
      mapRef?.current?.flyTo({center: [longitude, latitude], duration: 3000});
    }
  };

  if (!isBrowser) {
    return null;
  }
  return (
      <div className='h-80 w-full bg-black relative' >
          {viewport.latitude && viewport.longitude && (
            <div className='absolute top-0 left-0 right-0 bottom-0' >
              
              <Map className="overflow-hidden"
                  ref={mapRef}
                  initialViewState={initialViewState}
                  
                  mapboxAccessToken="pk.eyJ1Ijoic21hcnRkZXYxMjMiLCJhIjoiY2t5bGZvODhyMDAxMjJwcGE2Yzhrc25kayJ9.-UYwiZVX6ombKhaev9cryQ"
                  mapStyle="mapbox://styles/smartdev123/ckylt6sik7d7a15pwv030u2sd"
              >
                    <Marker
                      longitude={viewport.longitude}
                      anchor="bottom"
                      latitude={viewport.latitude}>
                        <span className='block w-5 h-5 ' >
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
      </div>
  )
}

export default MapView