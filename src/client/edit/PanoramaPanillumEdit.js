import { Pannellum } from "pannellum-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { urlFor } from "../../lib/utils";

function PanoramaPanillumEdit({ img }) {
  

  return (
    <div>
      {img &&  (
        <div>
          <Pannellum
            width="30vw"
            height="30vh"
            image={urlFor(img).url()}
            // pitch={imagesArr.at(currentIndex)?.pitch}
            // yaw={imagesArr.at(currentIndex)?.yaw}
            // hfov={imagesArr.at(currentIndex)?.hfov}
            showFullscreenCtrl={false}
            autoLoad
            showZoomCtrl={false}
            autoRotate={5}
            autoRotateInactivityDelay={100}
            // compass={true}
            sceneId="pakistan1"
            sceneFadeDuration={100}
            onLoad={() => {
              console.log("panorama loaded");
            }}
          >
            {/* {imagesArr.at(currentIndex)?.hotspotsposition.map((item) => (
              <Pannellum.Hotspot
                type="custom"
                pitch={item.pitch}
                sceneId="pakistan"
                yaw={item.yaw}
                hfov={item.hfov}
                handleClick={(evt, args) => {
                  setCurrentIndex(item?.linkedScene);
                }}
                handleClickArg={{ name: currentIndex }}
              />
            ))} */}
          </Pannellum>
        </div>
      )}
    </div>
  );
}
export default PanoramaPanillumEdit;
