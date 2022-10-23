import { Pannellum } from "pannellum-react";
import myImage from "./milan.jpg";
import r1 from "./images/r1.jpg";
import { useEffect, useState } from "react";
import { urlFor } from "../lib/utils";

function PanoramaPanillum({ img }) {
  const [imagesArr, setImagesArr] = useState([]);
  const [panoImg, setPanoImg] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(img);

  useEffect(() => {
    setImagesArr(img?.image);
  }, [img]);


  return (
    <div>
      {img && imagesArr && (
        <div>
          <Pannellum
            width="auto"
            height="80vh"
            image={urlFor(imagesArr.at(currentIndex)?.image).url()}
            pitch={imagesArr.at(currentIndex)?.pitch}
            yaw={imagesArr.at(currentIndex)?.yaw}
            hfov={imagesArr.at(currentIndex)?.hfov}
            showFullscreenCtrl={false}
            autoLoad
            showZoomCtrl={false}
            autoRotate={5}
            autoRotateInactivityDelay={100}
            compass={true}
            sceneId="pakistan1"
            sceneFadeDuration={100}
            onLoad={() => {
              console.log("panorama loaded");
            }}
          >
            {imagesArr.at(currentIndex)?.hotspotsposition.map((item) => (
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
            ))}
          </Pannellum>
        </div>
      )}
    </div>
  );
}
export default PanoramaPanillum;
