import { Backdrop, CircularProgress } from "@mui/material";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { app } from "../../firebase/firebase";
import { client } from "../../lib/utils";
import { setParanomaData } from "../../redux/paranomaSlice";
import { PanoramaContext } from "../../states/panorama_context";
import { UserContext } from "../../states/user_context";
import ButtonContainer from "./Dashboard/ButtonContainer";
import ParanomaSelectionPanel from "./Dashboard/ParanomaSelectionPanel";
import SelectParanomaType from "./Dashboard/SelectParanomaType";
import PanoramaPanillumUpload from "./panellum/PanoramaPanillumUpload";

function Uploads() {
  const [image, setImage] = useState(null);
  const [uploadImg, setuploadImg] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fileType, setfileType] = useState(1);
  const [open, setOpen] = useState(false);
  const [uploadedImagesLinks, setUploadedImagesLinks] = useState([]);
  const [paranomaImageDataToSanity, setParanomaImageDataToSanity] = useState(
    []
  );
  const [addHotspot, setAddHotspot] = useState([]);
  const [activeParanoma, setActiveParanoma] = useState(0);
  const [initialView, setInitialView] = useState([]);

  const { datas, setDatas } = useContext(PanoramaContext);
  const dispatch = useDispatch();
  
  const {paranoma} = useSelector((state) => state.ParanomaData);
 
  const { user } = useContext(UserContext);


  const working = async () => {
    if (uploadImg) {
      setOpen(true);
      for (const listImg of uploadImg) {
        const runFunEach = async () => {
          const type = listImg.type;
          if (
            type === "image/png" ||
            type === "image/svg" ||
            type === "image/jpeg" ||
            type === "image/gif" ||
            type === "image/tiff"
          ) {
            const res = await client.assets.upload("image", listImg, {
              contentType: type,
              filename: listImg.name,
            });
            const passCheckpoint = !!paranomaImageDataToSanity.filter(
              (item) => item.id === uploadImg.indexOf(listImg)
            );
            const initialViewPosition = initialView.find(
              (item) => item.id === uploadImg.indexOf(listImg)
            );
            
            const pureName = listImg?.name.toString().replace(/(.jpg|.jpeg)/, "");

            if (passCheckpoint) {
              const doc = {
                _type: "photo",
                image: {
                  _type: "image",
                  asset: {
                    _type: "reference",
                    _ref: res?._id,
                  },
                },

                title: pureName,
                pitch: initialViewPosition?.pitch,
                yaw: initialViewPosition?.yaw,
                hfov: initialViewPosition?.hfov,
                hotspotsposition: paranomaImageDataToSanity.filter(
                  (item) => item.id == uploadImg.indexOf(listImg)
                ),
              };

              const waitToGetUrl = await client.create(doc);
              console.log(waitToGetUrl);
              setUploadedImagesLinks((prev) => [...prev, waitToGetUrl]);
            }

          }
          setOpen(false);
          setuploadImg([]);
        };
        await runFunEach();
      }
    }
  };

  const notify = () =>
    toast.error("Please complete the form first!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const uploadToClient = async () => {
    if (!title || !description || !uploadedImagesLinks || !datas.coordinates)
      return notify();
    const dbRef = collection(getFirestore(app), "offers");
    try {
      const res = await addDoc(dbRef, datas);
      console.log("Document has been added successfully", res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setDatas({
      ...datas,
      title: title,
      description: description,
      image: uploadedImagesLinks,
      owner:(user?.uid)?.toString(),
    });
  }, [title, description, uploadedImagesLinks]);

  useEffect(() => {
    console.log(datas);
  }, [datas]);


  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const removeImgFromArr = (index) => {
    const newArr = uploadImg.filter((prev, indexItem) => indexItem !== index);
    const newInitialViews = initialView.filter((item) => item.id !== index);
    setInitialView(newInitialViews);
    setuploadImg(newArr);
    if (uploadImg.length == 1) {
      setParanomaImageDataToSanity([]);
      setInitialView([]);
    }

    if (paranomaImageDataToSanity?.length > 0) {
      const newParanomaImageData = paranomaImageDataToSanity.filter(
        (prev, indexItemPara) => indexItemPara !== index
      );
      setParanomaImageDataToSanity(newParanomaImageData);
    }

    const newHotspotArr = addHotspot.filter((item) => item.index !== index);
    setAddHotspot(newHotspotArr);
  };

  console.log(uploadImg, addHotspot, paranomaImageDataToSanity, initialView);
  return (
    <>
      <div className="mt-4">
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
        {/* Same as */}
        <ToastContainer />

        <span className="text-base font-medium text-temp-gray">TITLE</span>
        <div className="mt-3 w-full h-10 px-4 bg-[#eee]">
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
              dispatch(setParanomaData({ title: e.target.value }));
            }}
            className="w-full bg-[#eee] h-full outline-none col-span-1"
          />
        </div>
      </div>
      <div className="mt-4">
        <span className="text-base font-medium text-temp-gray">
          DESCRIPTION
        </span>
        <div className="mt-3 w-full h-80 p-4 bg-[#eee]">
          <textarea
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
              dispatch(setParanomaData({ description: e.target.value }));
            }}
            className="w-full h-full bg-[#eee] outline-none col-span-1"
          />
        </div>
      </div>

      <div className="mt-4">
        <span className="text-base font-medium text-temp-gray">
          ADD PANORAMA PICTURE
        </span>

        <SelectParanomaType
          setfileType={setfileType}
          uploadImg={uploadImg}
          fileType={fileType}
          working={working}
        />

        {fileType != 2 && (
          <div className="mt-3  rounded-2xl flex relative  w-full h-full p-4 bg-[#eee]">
            <ParanomaSelectionPanel
              setuploadImg={setuploadImg}
              uploadImg={uploadImg}
              activeParanoma={activeParanoma}
              setActiveParanoma={setActiveParanoma}
            />

            <div className="w-full h-full flex flex-3 flex-col  overflow-y-scroll  items-start justify-center ">
              {uploadImg.map((item, index) => {
                if (activeParanoma !== index) return;

                return (
                  <div className="w-full h-auto  relative">
                    <button
                      className="px-5 py-2 font-bold text-white  absolute top-4 right-10 z-10  rounded-lg bg-red-800 "
                      onClick={() => removeImgFromArr(index)}
                    >
                      Remove
                    </button>
                    <PanoramaPanillumUpload
                      addHotspot={addHotspot}
                      uploadImg={uploadImg}
                      index={index}
                      setInitialView={setInitialView}
                      paranomaForUploading={item}
                      paranomaImageDataToSanity={paranomaImageDataToSanity}
                      setParanomaImageDataToSanity={
                        setParanomaImageDataToSanity
                      }
                      setActiveParanoma={setActiveParanoma}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {fileType != 1 && (
          <div className="mt-3 w-full h-12">
            <div className="mt-3 w-full h-10 px-4 bg-[#eee]">
              <input
                type="text"
                onChange={(e) => setImage(e.target.value)}
                className="w-full bg-[#eee] h-full outline-none col-span-1"
              />
            </div>
          </div>
        )}
        {image != null && (
          <iframe className=" w-full h-96" src={image}></iframe>
        )}
      </div>

      <ButtonContainer uploadToClient={uploadToClient} />
    </>
  );
}

export default Uploads;
