import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import * as React from "react";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function CheckboxList({
  uploadImg,
  linkedHotpsotCounter,
  setParanomaCheckbox,
  setSingleHotspotLink
}) {
  const [personName, setPersonName] = React.useState([]);
  const [isSingleParaChecked, setIsSingleParaChecked] = useState(false);

  return (
    <div>
      <Select
        className="w-8 h-8"
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={personName}
        onChange={() => {}}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {linkedHotpsotCounter.map((name, index) => {
          const linkableHotpsotName = uploadImg.find((_, ind) => ind === name);
          const namePretty = linkableHotpsotName?.name
            .toString()
            .replace(/(.jpg|.jpeg)/, "");

          return (
            <label htmlFor="getHotpsot">
              <MenuItem key={name} value={name} >
                <input
                  className="mr-3"
                  onChange={() => {
                    setSingleHotspotLink(Number(name));
                    setIsSingleParaChecked(true);
                  }}
                  type="radio"
                  value={index}
                  name="hotspotsposition"
                  id="getHotpsot"
                />
                <ListItemText
                  sx={{ textTransform: "capitalize" }}
                  primary={namePretty}
                />
              </MenuItem>
            </label>
          );
        })}
      </Select>
    </div>
  );
}
