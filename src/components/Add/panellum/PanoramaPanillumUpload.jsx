import {
  ArrowCircleDown,
  BlurOn,
  Check,
  CloudUpload,
  Delete,
  HelpOutline,
  Hive,
  InsertLink,
} from "@mui/icons-material";
import NavigationIcon from "@mui/icons-material/Navigation";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { motion } from "framer-motion";
import { Pannellum } from "pannellum-react";
import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer, toast } from "react-toastify";
import CheckboxList from "./CheckboxList";
import SelectedHotspotList from "./SelectedHotspotList";
import { useSanity } from "../../../hooks/useSanity";
import { Backdrop, CircularProgress } from "@mui/material";
import { urlFor } from "../../../lib/utils";
function PanoramaPanillumUpload({
  index,
  uploadImg,
  setInitialView,
  setActiveParanoma,
  paranomaForUploading,
  paranomaImageDataToSanity,
  setParanomaImageDataToSanity,
}) {
  const [imgUrl, setImgUrl] = useState();
  const [open, setOpen] = useState(false);
  const [uploadToSanity, setUploadToSanity] = useState();
  const [customHotspot, setCustomHotspot] = useState(true);
  const [infoHotspotUrl, setInfoHotspotUrl] = useState({});
  const [paranomaCheckbox, setParanomaCheckbox] = useState();
  const [singleHotspotLink, setSingleHotspotLink] = useState(0);
  const [infoHotspotImage, setInfoHotspotImage] = useState(null);
  const [linkedHotpsotCounter, setLinkedHotpsotCounter] = useState();
  const [hotspotUploadSuccess, sethotspotUploadSuccess] = useState(false);
  const [toggleUploadFilesType, setToggleUploadFilesType] = useState(true);

  const { uploadToGetLink } = useSanity();
  const PanRef = useRef();
  const hotRef = useRef();
  console.log(hotRef);

  const num = paranomaImageDataToSanity?.filter((item) => item.id === index);
  const getLength = num?.length;

  const currentDate = new Date();
  console.log(paranomaCheckbox, "goody");

  const handleClose = () => {
    setOpen(false);
  };

  const notify = () =>
    toast.success("Hotspot added!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const uploadHotspotFileToSanity = async () => {
    try {
      setOpen(true);
      const uploadedFile = await uploadToGetLink(uploadToSanity);

      if (uploadedFile._type === "hotspotImages") {
        setInfoHotspotUrl((prev) => ({
          ...prev,
          url: urlFor(uploadedFile?.image)?.url(),
        }));
        sethotspotUploadSuccess(true);
      }

      if (uploadedFile._type === "hotspotVideos") {
        setInfoHotspotUrl((prev) => ({
          ...prev,
          url: uploadedFile?.url,
        }));
        sethotspotUploadSuccess(true);
      }

      setOpen(false);
      setUploadToSanity([]);
    } catch (error) {
      console.log(error);
      setOpen(false);
      setUploadToSanity([]);
    }
  };
  console.log(infoHotspotUrl);

  useEffect(() => {
    if (paranomaForUploading) {
      const img = URL.createObjectURL(paranomaForUploading);
      setImgUrl(img);
    }
  }, [paranomaForUploading]);

  useEffect(() => {
    const specificItem = uploadImg.map(
      (item, itemIndex) => itemIndex !== index && itemIndex
    );

    const filterFine = specificItem.filter((item) => typeof item == "number");
    setLinkedHotpsotCounter(filterFine);
  }, [uploadImg]);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
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
              // autoRotate={5}
              autoRotateInactivityDelay={100}
              compass={true}
              sceneFadeDuration={100}
              onLoad={() => console.log("panorama loaded")}
            >
              {num.map((hotspot, index) => {
                if (hotspot.type === "customHotspot") {
                  return (
                    <Pannellum.Hotspot
                      type="custom"
                      pitch={hotspot.pitch}
                      sceneId="pakistan"
                      yaw={hotspot.yaw}
                      cssClass="cssCustomArrow"
                      hfov={hotspot.hfov}
                      handleClick={(evt, args) => {
                        setActiveParanoma(hotspot?.linkedScene);
                      }}
                    />
                  );
                }

                if (hotspot.type === "infoHotspot") {
                  const dynamicTooltip =
                    document.getElementsByClassName("pnlm-pointer");

                  console.log(dynamicTooltip);

                  const renderTooltips = () => {
                    if (dynamicTooltip.length) {
                      const urlPattern =
                        /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})?$/;

                      const validVideoUrl = urlPattern.test(hotspot.url);
                      console.log(hotspot);
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
                        root.render(youtubeVideo, dynamicTooltip[index]);
                      } else if (hotspot.url.includes("files")) {
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
                              src={hotspot.url}
                            ></iframe>
                          </>
                        );
                        const root = ReactDOM.createRoot(dynamicTooltip[index]);
                        root.render(youtubeVideo, dynamicTooltip[index]);
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
                        const root = ReactDOM.createRoot(dynamicTooltip[index]);
                        root.render(newImg, dynamicTooltip[index]);
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

          <div className="absolute right-[200px] top-4   text-sm rounded-md text-white cursor-pointer bg-slate-400">
            <SelectedHotspotList
              num={num}
              setParanomaImageDataToSanity={setParanomaImageDataToSanity}
              paranomaImageDataToSanity={paranomaImageDataToSanity}
            />
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
                <button>
                  {customHotspot ? (
                    <ArrowCircleDown onClick={() => setCustomHotspot(false)} />
                  ) : (
                    <HelpOutline onClick={() => setCustomHotspot(true)} />
                  )}
                </button>

                <button
                  className="p-2 px-5 bg-blue-400 relative my-3 
                rounded-full h-10 flex items-center justify-center w-10"
                >
                  {!!paranomaCheckbox && customHotspot ? (
                    <div
                      onClick={() => {
                        setParanomaImageDataToSanity((prev) => [
                          ...prev,
                          {
                            ...paranomaCheckbox,
                            linkedScene: singleHotspotLink,
                            type: "customHotspot",
                          },
                        ]);
                        notify();
                      }}
                      className="absolute w-5 h-5 -bottom-5 -right-8 hover:border-2
                      hover:rounded-full flex items-center justify-center hover:p-4 
                      hover:border-fuchsia-800 "
                    >
                      <NavigationIcon />
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        setParanomaImageDataToSanity((prev) => [
                          ...prev,
                          {
                            ...paranomaCheckbox,
                            type: "infoHotspot",
                            url: infoHotspotUrl.url,
                            hotspotDescription:
                              infoHotspotUrl.hotspotDescription,
                          },
                        ]);
                        notify();
                      }}
                      className="absolute w-5 h-5 -bottom-5 -right-8 hover:border-2
                  hover:rounded-full flex items-center justify-center hover:p-4 
                  hover:border-fuchsia-800 "
                    >
                      <BlurOn />
                    </div>
                  )}
                  <>
                    {customHotspot ? (
                      <div className="absolute w-5 h-5 -bottom-5 -left-8">
                        <CheckboxList
                          uploadImg={uploadImg}
                          setParanomaCheckbox={setParanomaCheckbox}
                          linkedHotpsotCounter={linkedHotpsotCounter}
                          setSingleHotspotLink={setSingleHotspotLink}
                        />
                      </div>
                    ) : (
                      <div className="absolute -z-10  -top-32 -left-60 flex items-start flex-col gap-5">
                        <div className="flex gap-4">
                          {toggleUploadFilesType ? (
                            <input
                              type="text"
                              name="link"
                              onChange={(e) =>
                                setInfoHotspotUrl((prev) => ({
                                  ...prev,
                                  url: e.target.value,
                                }))
                              }
                            />
                          ) : (
                            <>
                              <label className="flex" for="upload-file">
                                <CloudUpload />
                                {!!uploadToSanity && (
                                  <div>
                                    {uploadToSanity?.name?.slice(0, 16)}
                                  </div>
                                )}
                              </label>
                              {hotspotUploadSuccess && (
                                <div className="text-green-800">
                                  <Check />
                                </div>
                              )}
                              <input
                                type="file"
                                id="upload-file"
                                className="invisible"
                                name="uploadFile"
                                onChange={(e) =>
                                  e.target.files.length > 0
                                    ? setUploadToSanity(e.target.files[0])
                                    : null
                                }
                              />
                            </>
                          )}
                          {toggleUploadFilesType ? (
                            <div
                              onClick={() => setToggleUploadFilesType(false)}
                            >
                              <CloudUpload className="text-red-700 rounded-full  flex justify-center hover:text-red-400 transition-all " />
                            </div>
                          ) : (
                            <div className="flex gap-4">
                              <div
                                onClick={() => {
                                  setUploadToSanity([]);
                                  sethotspotUploadSuccess(false);
                                }}
                                className=" hover:animate-bounce "
                              >
                                <Delete className="text-red-800 " />
                              </div>
                              <div
                                className=" hover:animate-bounce"
                                onClick={uploadHotspotFileToSanity}
                              >
                                {" "}
                                <CloudUpload className="text-green-700  " />
                              </div>
                              <div
                                onClick={() => setToggleUploadFilesType(true)}
                              >
                                <InsertLink className="text-green-600 rounded-full flex justify-center hover:text-blue-700 transition-all " />
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="flex gap-4">
                          <input
                            type="text"
                            name="hotspotDescription"
                            onChange={(e) =>
                              setInfoHotspotUrl((prev) => ({
                                ...prev,
                                hotspotDescription: e.target.value,
                              }))
                            }
                          />
                          <span className="capitalize">Description</span>
                        </div>
                      </div>
                    )}
                  </>
                  <Hive />
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
