import { Pannellum } from "pannellum-react";
import myImage from "./milan.jpg";
import r1 from "./images/r1.jpg";
import { useEffect, useRef, useState } from "react";
import { createObjectURL } from "blob-util";

function PanoramaPanillumUpload({
  index,
  uploadImg,
  addHotspot,
  paranomaForUploading,
  paranomaImageDataToSanity,
  setParanomaImageDataToSanity,
}) {
  const [imgUrl, setImgUrl] = useState();
  const [paranomaCheckbox, setParanomaCheckbox] = useState();
  const [linkedHotpsotCounter, setLinkedHotpsotCounter] = useState();
  const [singleHotspotLink, setSingleHotspotLink] = useState(0);
  const PanRef = useRef();
  useEffect(() => {
    if (paranomaForUploading) {
      const img = URL.createObjectURL(paranomaForUploading);
      setImgUrl(img);
    }
  }, [paranomaForUploading]);
  const num = paranomaImageDataToSanity?.filter((item) => item.id == index);
  const getLength = num?.length;
  // console.log(getLength && getLength, "this is greSt");
  useEffect(() => {
    const specificItem = uploadImg.map(
      (item, itemIndex) => itemIndex !== index && itemIndex
    );

    const filterFine = specificItem.filter((item) => typeof item == "number");
    setLinkedHotpsotCounter(filterFine);
  }, [uploadImg]);



  console.log(paranomaCheckbox);
  return (
    <div>
      {imgUrl && (
        <div>
          <Pannellum
            ref={PanRef}
            width="100%"
            height="500px"
            image={imgUrl}
            pitch={10}
            yaw={180}
            hfov={110}
            autoLoad
            showZoomCtrl={false}
            autoRotate={5}
            autoRotateInactivityDelay={100}
            compass={true}
            sceneFadeDuration={100}
            onLoad={() => console.log("panorama loaded")}
            onError={(err) => {
              console.log("Error", err);
            }}
            onErrorcleared={() => {
              console.log("Error Cleared");
            }}
            onMouseup={() => {
              console.log(
                PanRef.current.getViewer().getPitch(),
                PanRef.current.getViewer().getYaw(),
                PanRef.current.getViewer().getHfov(),
              );
              const currentDate = new Date();
              setParanomaCheckbox({
                _key: currentDate.getTime(),
                linkedScene: singleHotspotLink,
                id: index,
                pitch: PanRef.current.getViewer().getPitch(),
                yaw: PanRef.current.getViewer().getYaw(),
                hfov: PanRef.current.getViewer().getHfov(),
              });
            }}
            onTouchstart={(evt) => {
              console.log("Touch Start", singleHotspotLink, evt);
            }}
            onTouchend={(evt) => {
              console.log("Touch End", evt);
            }}
            onScenechangefadedone={() => {
              console.log("panorama loaded");
            }}
          >
            <Pannellum.Hotspot
              type="info"
              pitch={11}
              yaw={-167}
              text="Info Hotspot Text 3"
              URL="https://github.com/farminf/pannellum-react"
            />
          </Pannellum>
          {uploadImg?.length > 1 && (
            <div>
              <div>
                <button
                  onClick={() => {
                    if (getLength == uploadImg?.length - 1) return;
                    setParanomaImageDataToSanity((prev) => [
                      ...prev,
                      paranomaCheckbox,
                    ]);
                  }}
                  className="p-5 bg-blue-400  my-3 rounded-md "
                >
                  Add Hotspot
                </button>
              </div>
              <div className="flex gap-5 text-black">
                connect To{" "}
                {linkedHotpsotCounter.map((item, index) => {
                  return (
                    <div>
                      <input
                        onChange={() => setParanomaCheckbox((prev)=>({...prev,linkedScene:Number(item)}))}
                        type="checkbox"
                        name="1"
                        id={item.toString()}
                      />
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
              <div>
                {num.map((item) => (
                  <div className="p-5 text-black">
                    <div className="">Id: {item.id}</div>
                    <div>Linked Scene: {item.linkedScene}</div>
                    <div>Pitch: {Math.floor(item.pitch)}</div>
                    <div>Yaw: {Math.floor(item.yaw)}</div>
                    <div>Hfov: {Math.floor(item.hfov)}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default PanoramaPanillumUpload;
