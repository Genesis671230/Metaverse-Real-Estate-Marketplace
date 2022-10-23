import { Pannellum } from "pannellum-react";
import myImage from "./milan.jpg";
import r1 from "./images/r1.jpg";
import { useEffect, useRef, useState } from "react";
import { createObjectURL } from "blob-util";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { motion, useDragControls } from "framer-motion";
import HiveIcon from "@mui/icons-material/Hive";
import CheckboxList from "./CheckboxList";
import NavigationIcon from "@mui/icons-material/Navigation";
import SelectedHotspotList from "./SelectedHotspotList";
function PanoramaPanillumUpload({
  index,
  uploadImg,
  addHotspot,
  setInitialView,
  paranomaForUploading,
  paranomaImageDataToSanity,
  setParanomaImageDataToSanity,
}) {
  const [imgUrl, setImgUrl] = useState();
  const [paranomaCheckbox, setParanomaCheckbox] = useState();
  const [linkedHotpsotCounter, setLinkedHotpsotCounter] = useState();
  const [singleHotspotLink, setSingleHotspotLink] = useState(0);
 
  const currentDate = new Date();

  const PanRef = useRef();
  useEffect(() => {
    if (paranomaForUploading) {
      const img = URL.createObjectURL(paranomaForUploading);
      setImgUrl(img);
    }
  }, [paranomaForUploading]);
  const num = paranomaImageDataToSanity?.filter((item) => item.id === index);
  const getLength = num?.length;
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
          <div className="relative">
            <Pannellum
              ref={PanRef}
              width="100%"
              height="568px"
              image={imgUrl}
              pitch={10}
              yaw={180}
              hfov={110}
              autoLoad
              showFullscreenCtrl={false}
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
              onMouseup={() => {}}
              onTouchstart={(evt) => {}}
              onTouchend={(evt) => {}}
              onScenechangefadedone={() => {
                console.log("panorama loaded");
              }}
            ></Pannellum>
          </div>

          <div className="absolute right-[200px] top-4   text-sm rounded-md text-white cursor-pointer bg-slate-400">
            <SelectedHotspotList num={num}/>
              </div>
          <div
            className="absolute right-[400px] top-4 px-4 py-2 text-sm rounded-md text-white cursor-pointer bg-slate-400"
            onClick={() => {
              if (PanRef.current.getViewer()) {
                setInitialView((prev) => {
                  const present = prev.find((item) => item.id === index);
                  const presentIndex = prev.findIndex(
                    (item) => item.id === index
                  );

                  if (!!present) {
                    prev.splice(presentIndex, 1);
                    return [
                      ...prev,
                      {
                        id: index,
                        pitch: PanRef.current.getViewer().getPitch(),
                        yaw: PanRef.current.getViewer().getYaw(),
                        hfov: PanRef.current.getViewer().getHfov(),
                      },
                    ];
                  } else {
                    return [
                      ...prev,
                      {
                        id: index,
                        pitch: PanRef.current.getViewer().getPitch(),
                        yaw: PanRef.current.getViewer().getYaw(),
                        hfov: PanRef.current.getViewer().getHfov(),
                      },
                    ];
                  }
                });
              }
            }}
          >
            <div className="flex gap-5 text-black items-center">
              <RemoveRedEyeOutlinedIcon />
              <p> Initial View</p>
            </div>
            
          </div>

          {uploadImg?.length > 1 && (
            <motion.div
              drag
              dragConstraints={{ left: 20, right: 1020, top: 0, bottom: 400 }}
              dragElastic={0.1}
              onDragEnd={(event, info) => {
                setParanomaCheckbox({
                  _key: currentDate.getTime(),
                  linkedScene: singleHotspotLink,
                  id: index,
                  pitch: PanRef.current.getViewer().getPitch(),
                  yaw: PanRef.current.getViewer().getYaw(),
                  hfov: PanRef.current.getViewer().getHfov(),
                });

                console.log(
                  PanRef.current.getViewer().getPitch(),
                  PanRef.current.getViewer().getYaw(),
                  PanRef.current.getViewer().getHfov()
                );
              }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
              className="absolute left-12 top-0"
            >
              <div>
                <button className="p-2 px-5 bg-blue-400 relative my-3 rounded-full h-10 flex items-center justify-center w-10">
                  {paranomaCheckbox?.linkedScene ? (
                    <div   onClick={() => {
                      if (getLength === uploadImg?.length - 1) return;
                      setParanomaImageDataToSanity((prev) => [
                        ...prev,
                        paranomaCheckbox,
                      ]);
                    }}
                     className="absolute w-5 h-5 -bottom-5 -right-8 hover:border-2 hover:rounded-full flex items-center justify-center hover:p-4 hover:border-fuchsia-800 ">
                      <NavigationIcon />
                    </div>
                  ):null}
                  <div className="absolute w-5 h-5 -bottom-5 -left-8">
                    <CheckboxList setParanomaCheckbox={setParanomaCheckbox} linkedHotpsotCounter={linkedHotpsotCounter} />
                  </div>
                  <HiveIcon />
                </button>
              </div>

           
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}
export default PanoramaPanillumUpload;
