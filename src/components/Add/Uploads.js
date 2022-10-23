import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import React, { useContext, useEffect, useState } from "react";
import { app, database } from "../../api/firebase";
import { v4 as uuidv4 } from "uuid";
import PanoramaPanillum from "../../panellum/PanoramaPanillum";
import { Backdrop, CircularProgress } from "@mui/material";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { PanoramaContext } from "../../states/panorama_context";
import { client } from "../../lib/utils";
import PanoramaPanillumUpload from "./panellum/PanoramaPanillumUpload";

function Uploads() {
  const [image, setImage] = useState(null);
  const [uploadImg, setuploadImg] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { datas, setDatas } = useContext(PanoramaContext);
  const [fileType, setfileType] = useState(1);
  const [open, setOpen] = useState(false);
  const [uploadedImagesLinks, setUploadedImagesLinks] = useState([]);
  const [paranomaImageDataToSanity, setParanomaImageDataToSanity] = useState(
    []
  );
  const [addHotspot, setAddHotspot] = useState([]);
  const [activeParanoma, setActiveParanoma] = useState(0);
  const [initialView, setInitialView] = useState([]);


console.log(initialView,"this is initalview")
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
            const initialViewPosition = initialView.find((item)=>item.id === uploadImg.indexOf(listImg))

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

                title: "shan",
                pitch:initialViewPosition?.pitch,
                yaw:initialViewPosition?.yaw,
                hfov:initialViewPosition?.hfov,
                hotspotsposition: paranomaImageDataToSanity.filter(
                  (item) => item.id == uploadImg.indexOf(listImg)
                ),
              };

              const waitToGetUrl = await client.create(doc);
              console.log(waitToGetUrl);
              setUploadedImagesLinks((prev) => [...prev, waitToGetUrl]);
            }

            setOpen(false);
          }
          setuploadImg([]);
        };
        await runFunEach();
      }
    }
  };

  const uploadToClient = async () => {
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
    const newInitialViews = initialView.filter((item)=>item.id !== index); 
    setInitialView(newInitialViews);
    setuploadImg(newArr);
    if (uploadImg.length == 1){
       setParanomaImageDataToSanity([]);
         setInitialView([])
        };

    if (paranomaImageDataToSanity?.length > 0) {
      const newParanomaImageData = paranomaImageDataToSanity.filter(
        (prev, indexItemPara) => indexItemPara !== index
      );
      setParanomaImageDataToSanity(newParanomaImageData);
    }

    const newHotspotArr = addHotspot.filter((item) => item.index !== index);
    setAddHotspot(newHotspotArr);
  };

  console.log(uploadImg, addHotspot, paranomaImageDataToSanity,initialView);
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
        <span className="text-base font-medium text-temp-gray">TITLE</span>
        <div className="mt-3 w-full h-10 px-4 bg-[#eee]">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
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
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-full bg-[#eee] outline-none col-span-1"
          />
        </div>
      </div>

      <div className="mt-4">
       
        <span className="text-base font-medium text-temp-gray">
          ADD PANORAMA PICTURE
        </span>
        <div className="my-4">
          <div className="h-12 grid  grid-cols-1  my-3">
            <div className="flex flex-row gap-5 col-span-1">
              <a
                onClick={() => setfileType(1)}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  fileType != 1 ? "bg-temp-gray2" : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                360° File
              </a>
              <a
                onClick={() => setfileType(2)}
                className={`cursor-pointer h-10 w-36 flex items-center ${
                  fileType != 2 ? "bg-temp-gray2" : "bg-cyan-900"
                } justify-center text-white text-sm hover:bg-cyan-700 `}
              >
                360° Url
              </a>
              {uploadImg[0] && (
                <a
                  onClick={() => working()}
                  className={`cursor-pointer h-10 w-36  flex items-center ${
                    fileType != 2 ? "bg-green-600" : "bg-cyan-900"
                  } justify-center text-white text-sm hover:bg-cyan-700 `}
                >
                  Upload
                </a>
              )}
            </div>
          </div>
        </div>
        {fileType != 2 && (
          <div className="mt-3  rounded-2xl flex relative  w-full h-full p-4 bg-[#eee]">
            <div className=" border-tl-2 rounded-tl-3xl flex-1 min-h-[568px] max-h-[568px] flex flex-col   bg-[#94979b]   border-r-cyan-200 border-r-2 pt-6  ">
              <label htmlFor="upload-img" className="w-full">
                <div className="whitespace-nowrap bg-[#2693ff] w-full mb-5 px-10 py-2 text-white text-center  hover:bg-[#e6e6e6]  hover:text-black ">
                  Load paranoma
                </div>
              </label>

              <input
                onChange={(e) => {
                  setuploadImg((prev) => [
                    ...(prev ?? ""),
                    e?.target?.files[0],
                  ]);
                  console.log("this should work", uploadImg && uploadImg);
                }}
                className="opacity-0"
                type="file"
                id="upload-img"
              />
              <div>
              {uploadImg.map((item,index)=>(
                <div className="w-full cursor-pointer flex justify-center text-white my-3 py-3 bg-slate-600" onClick={()=>setActiveParanoma(index)}>{index}</div>
              ))}
              </div>
            </div>
            <div className="w-full h-full flex flex-3 flex-col  overflow-y-scroll  items-start justify-center ">
              {uploadImg.map((item, index) => {
                if(activeParanoma !== index) return;
                
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
                    setParanomaImageDataToSanity={setParanomaImageDataToSanity}
                  />
                </div>
              )})}
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

      <div className="w-full h-14 my-10">
        <div className="h-12 grid  w-full grid-cols-2  my-3 relative">
          <div className="flex flex-row items-end justify-end  w-full gap-5 col-span-1 absolute right-0 ">
            <a
              onClick={uploadToClient}
              className={`cursor-pointer h-10 w-36 flex bg-green-900 items-center justify-center text-white text-sm hover:bg-cyan-700 `}
            >
              Add
            </a>
            <a
              className={`cursor-pointer h-10 w-36 flex items-center bg-red-900 justify-center text-white text-sm hover:bg-cyan-700 `}
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Uploads;
