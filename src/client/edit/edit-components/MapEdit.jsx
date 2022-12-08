import React, {
  useContext, useEffect, useRef
} from "react";
import Map, { Marker } from "react-map-gl";
import { useDispatch, useSelector } from "react-redux";
import { setEditParanomaData } from "../../../redux/editParanoma";
import { ViewPortContext } from "../../../states/viewport_context";
function MapViewEdit() {
  const { viewport, setViewport } = useContext(ViewPortContext);

  const editParanomaData = useSelector(
    (state) => state.ParanomaEdit.editParanomaData
  );

  const mapRef = useRef();
  const dispatch = useDispatch();

  const initialViewState = {
    latitude: 37.7751,
    longitude: -122.4193,
    zoom: 11,
    bearing: 0,
    pitch: 0,
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 3.5,
        bearing: 30,
        pitch: 10,
      });
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      onSelectCity({
        longitude: viewport?.longitude,
        latitude: viewport?.latitude,
      });
    }, 1000);
    dispatch(
      setEditParanomaData({
        ...editParanomaData,
        coordinates: [viewport?.longitude, viewport?.latitude],
      })
    );
  }, [viewport]);

  const onSelectCity = ({ longitude, latitude }) => {
    if ((longitude, latitude)) {
      mapRef?.current?.flyTo({ center: [longitude, latitude], duration: 3000 });
    }
  };

  return (
    <div className="h-80 w-full bg-black relative">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Map
          className="overflow-hidden"
          ref={mapRef}
          initialViewState={initialViewState}
          mapboxAccessToken="pk.eyJ1Ijoic21hcnRkZXYxMjMiLCJhIjoiY2t5bGZvODhyMDAxMjJwcGE2Yzhrc25kayJ9.-UYwiZVX6ombKhaev9cryQ"
          mapStyle="mapbox://styles/smartdev123/ckylt6sik7d7a15pwv030u2sd"
        >
          <Marker
            longitude={
              viewport.longitude
                ? viewport.longitude
                : initialViewState.longitude
            }
            anchor="bottom"
            latitude={
              viewport.latitude ? viewport.latitude : initialViewState.latitude
            }
          >
            <span className="block w-5 h-5 ">
              <img
                src={require("./pin.png")}
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
    </div>
  );
}

export default MapViewEdit;
