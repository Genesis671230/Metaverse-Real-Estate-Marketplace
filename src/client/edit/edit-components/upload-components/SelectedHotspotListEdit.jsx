import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { toast, ToastContainer } from "react-toastify";
import { useParanoma } from "../../../../hooks/useParanoma";

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;

export default function SelectedHotspotListEdit({
  num,
  activeParanoma,
  setParanomaImageDataToSanity,
  paranomaImageDataToSanity,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);



  const {deleteHotspots}  = useParanoma()


  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }



  const notify = () =>
    toast.success("Hotspot deleted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });


  return (
    <div>
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
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {num?.hotspotsposition?.map((item, index) => {
          // const filteredParanomaHotspots = paranomaImageDataToSanity[activeParanoma]?.hotspotsposition?.filter(
          //   (paranoma) => paranoma._key !== item._key
          //   )
          //   let paraArr = [...paranomaImageDataToSanity]
            
          //   const filtered = {...paranomaImageDataToSanity[activeParanoma],hotspotsposition:filteredParanomaHotspots}

          //   paraArr[activeParanoma] = filtered

          //   console.log(paraArr)

          return (
            <MenuItem key={item._key} onClick={handleClose}>
              <div key={item} className="p-5 pl-0 text-black">
                <div className="flex justify-between">
                  <span className="mr-3"> Id: {index}</span>
                  <span
                    onClick={() => {
                      setParanomaImageDataToSanity(deleteHotspots(activeParanoma,item._key))
                      notify();
                    }}
                  >
                    Delete
                  </span>{" "}
                </div>
                <div>Linked Scene: {item.linkedScene}</div>
                <div>Pitch: {Math.floor(item.pitch)}</div>
                <div>Yaw: {Math.floor(item.yaw)}</div>
                <div>Hfov: {Math.floor(item.hfov)}</div>
              </div>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
