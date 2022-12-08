import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useParanoma } from "../../../hooks/useParanoma";
import { setEditParanomaData } from "../../../redux/editParanoma";

const TItleDescriptionEdit = ({open,handleClose,setTitle,setDescription}) => {
  const editParanomaData = useSelector(
    (state) => state.ParanomaEdit.editParanomaData
  );
  
  const { editHotspots } = useParanoma();

    const dispatch = useDispatch()
  return (
    <>
      {" "}
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
          defaultValue={editParanomaData.title}
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
            dispatch(setEditParanomaData({ title: e.target.value }));
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
          defaultValue={editParanomaData.description}
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
              dispatch(setEditParanomaData({ description: e.target.value }));
            }}
            className="w-full h-full bg-[#eee] outline-none col-span-1"
          />
        </div>
      </div>
    </>
  );
};

export default TItleDescriptionEdit;
