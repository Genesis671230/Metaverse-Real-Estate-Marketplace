import { Pannellum } from "pannellum-react";
import { useEffect, useState } from "react";
import { urlFor } from "../lib/utils";
import ReactDOM from "react-dom/client";

function PanoramaPanillum({ img }) {
  const [imagesArr, setImagesArr] = useState([]);
  const [panoImg, setPanoImg] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
            {imagesArr
              .at(currentIndex)
              ?.hotspotsposition.map((hotspot, index) => {
                if (hotspot.type === "customHotspot") {
                  return (
                    <Pannellum.Hotspot
                      type="custom"
                      pitch={hotspot.pitch}
                      sceneId="pakistan"
                      yaw={hotspot.yaw}
                      hfov={hotspot.hfov}
                      cssClass="cssCustomArrow"
                      handleClick={(evt, args) => {
                        setCurrentIndex(hotspot?.linkedScene);
                      }}
                      handleClickArg={{ name: currentIndex }}
                    />
                  );
                }
                if (hotspot.type === "infoHotspot") {
                  const dynamicTooltip =
                    document.getElementsByClassName("pnlm-pointer");

                  const renderTooltips = () => {
                    if (dynamicTooltip.length) {
                      const urlPattern =
                        /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})?$/;
                      const validVideoUrl = urlPattern.test(hotspot.url);

                      if (validVideoUrl) {
                        const youtubeVideoId = hotspot.url.split("=")[1];
                        const youtubeVideo = (
                          <>
                            <div className="w-[15.6rem] text-center bg-black">
                              {hotspot.hotspotDescription}
                            </div>
                            <iframe
                              frameborder="0"
                              scrolling="no"
                              marginheight="0"
                              marginwidth="0"
                              width="250"
                              height="140"
                              type="text/html"
                              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=http://youtubeembedcode.com`}
                            ></iframe>
                          </>
                        );
                        const root = ReactDOM.createRoot(dynamicTooltip[index]);
                        return root.render(youtubeVideo, dynamicTooltip[index]);
                      }
                      if (
                        hotspot.url.startsWith("https://cdn.sanity.io/files")
                      ) {
                        const uploadedVideo = (
                          <>
                            <div className="w-[15.6rem] text-center bg-black">
                              {hotspot.hotspotDescription}
                            </div>
                            <iframe
                              frameborder="0"
                              scrolling="no"
                              marginheight="0"
                              marginwidth="0"
                              width="250"
                              height="140"
                              type="text/html"
                              src={hotspot.url}
                            ></iframe>
                          </>
                        );
                        const root = ReactDOM.createRoot(dynamicTooltip[index]);
                        return root.render(
                          uploadedVideo,
                          dynamicTooltip[index]
                        );
                      } else if (
                        hotspot.url.startsWith("https://cdn.sanity.io/images")
                      ) {
                        const newImg = (
                          <div className="dynamic-tooltip-img-box">
                            <img
                              src={hotspot.url}
                              width={200}
                              objectFit="contain"
                              className="dynamic-tooltip-img"
                            />
                            <span>{hotspot.hotspotDescription}</span>
                          </div>
                        );
                        setTimeout(() => {
                          const root = ReactDOM.createRoot(dynamicTooltip[index]);
                          return root.render(newImg, dynamicTooltip[index]);
                        }, 2000);

                      } else {
                        const newImg = (
                          <div className="dynamic-tooltip-img-box">
                            <img
                              src={hotspot.url}
                              width={200}
                              objectFit="contain"
                              className="dynamic-tooltip-img"
                            />
                            <span>{hotspot.hotspotDescription}</span>
                          </div>
                        );
                        setTimeout(() => {
                          const root = ReactDOM.createRoot(dynamicTooltip[index]);
                          return root.render(newImg, dynamicTooltip[index]);
                        }, 2000);
                      }
                    }
                  };

                  setTimeout(() => {
                    renderTooltips();
                  }, 3000);

                  return (
                    <Pannellum.Hotspot
                      type="info"
                      pitch={hotspot.pitch}
                      yaw={hotspot.yaw}
                      text={hotspot.url}
                      cssClass="cssCustomArrow"
                      URL={hotspot.url}
                    />
                  );
                }
              })}
          </Pannellum>
        </div>
      )}
    </div>
  );
}
export default PanoramaPanillum;
