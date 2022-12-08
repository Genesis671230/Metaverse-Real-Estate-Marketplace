import {
  addDoc,
  collection,
  getDoc,
  doc as docMain,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ButtonContainer from "../../../components/Add/Dashboard/ButtonContainer";
import SelectParanomaType from "../../../components/Add/Dashboard/SelectParanomaType";
import { app } from "../../../firebase/firebase";
import { useParanoma } from "../../../hooks/useParanoma";
import { client } from "../../../lib/utils";
import { PanoramaContext } from "../../../states/panorama_context";
import { UserContext } from "../../../states/user_context";
import TItleDescriptionEdit from "./TItleDescriptionEdit";
import PanoramaPanillumUploadEdit from "./upload-components/PanoramaPanillumUploadEdit";
import ParanomaSelectionPanelEdit from "./upload-components/ParanomaSelectionPanelEdit";

function UploadsEdit() {
  const editParanomaData = useSelector(
    (state) => state.ParanomaEdit.editParanomaData
  );

  const { editHotspots, deleteImage } = useParanoma();
  const { user } = useContext(UserContext);

  const [image, setImage] = useState(null);
  const [uploadImg, setuploadImg] = useState(editParanomaData?.image);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fileType, setfileType] = useState(1);
  const [open, setOpen] = useState(false);
  const [uploadedImagesLinks, setUploadedImagesLinks] = useState([]);

  const [addHotspot, setAddHotspot] = useState([]);
  const [activeParanoma, setActiveParanoma] = useState(0);
  const [initialView, setInitialView] = useState([]);

  const [paranomaImageDataToSanity, setParanomaImageDataToSanity] = useState(
    editParanomaData?.image
  );
  const { datas, setDatas } = useContext(PanoramaContext);

  useMemo(() => setuploadImg(editParanomaData?.image), [editParanomaData]);

  useMemo(
    () => setParanomaImageDataToSanity(editParanomaData?.image),
    [editParanomaData]
  );

  const working = async () => {
    if (uploadImg?.newImages) {
      setOpen(true);
      for (const listImg of uploadImg.newImages?.newImages) {
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
              (item) => item.id === uploadImg.newImages?.indexOf(listImg)
            );
            const initialViewPosition = initialView.find(
              (item) => item.id === uploadImg.newImages?.indexOf(listImg)
            );

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
                pitch: initialViewPosition?.pitch,
                yaw: initialViewPosition?.yaw,
                hfov: initialViewPosition?.hfov,
                hotspotsposition: paranomaImageDataToSanity.filter(
                  (item) => item.id == uploadImg.newImages?.indexOf(listImg)
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

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const removeImgFromArr = (index) => {
    deleteImage(index);
  };

  const uploadToClient = async () => {
    if (
      !editParanomaData.title ||
      !editParanomaData.description ||
      !editParanomaData.coordinates
    ) {
      return notify();
    }


    try {
      const querySnapshot = await getDocs(
        collection(getFirestore(app), "offers")
      );
      querySnapshot.forEach(async (doc) => {
        const docUid = doc.data().uid;
        console.log(docUid===editParanomaData.uid);
        if (docUid === editParanomaData.uid) {
          const washingtonRef = docMain(getFirestore(app), "offers", doc.id);
          const res = await updateDoc(washingtonRef, editParanomaData);
          console.log("Document has been added successfully", res);
        }

      });
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
      owner: user?.uid?.toString(),
    });
  }, [title, description, uploadedImagesLinks]);

  return (
    <>
      <TItleDescriptionEdit
        open={open}
        handleClose={handleClose}
        setTitle={setTitle}
        setDescription={setDescription}
      />

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
            <ParanomaSelectionPanelEdit
              setuploadImg={setuploadImg}
              uploadImg={uploadImg}
              activeParanoma={activeParanoma}
              setActiveParanoma={setActiveParanoma}
            />

            <div className="w-full h-full flex flex-3 flex-col  overflow-y-scroll  items-start justify-center ">
              {uploadImg?.map((item, index) => {
                if (activeParanoma !== index) return;

                return (
                  <div className="w-full h-auto  relative">
                    <button
                      className="px-5 py-2 font-bold text-white  absolute top-4 right-10 z-10  rounded-lg bg-red-800 "
                      onClick={() => removeImgFromArr(index)}
                    >
                      Remove
                    </button>
                    <PanoramaPanillumUploadEdit
                      addHotspot={addHotspot}
                      uploadImg={uploadImg}
                      index={index}
                      setInitialView={setInitialView}
                      paranomaForUploading={item}
                      paranomaImageDataToSanity={paranomaImageDataToSanity}
                      setParanomaImageDataToSanity={
                        setParanomaImageDataToSanity
                      }
                      activeParanoma={activeParanoma}
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

export default UploadsEdit;
