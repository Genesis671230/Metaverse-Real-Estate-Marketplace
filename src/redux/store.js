import { configureStore } from "@reduxjs/toolkit";
import addInfoHotspot from "./addInfoHotspot";
import editParanomaDataSlice from "./editParanoma";

import paranomaDataSlice from "./paranomaSlice";

export const store = configureStore({
  reducer: {
    ParanomaData: paranomaDataSlice,
    ParanomaEdit: editParanomaDataSlice,
    InfoHotspot: addInfoHotspot,
  },
});
