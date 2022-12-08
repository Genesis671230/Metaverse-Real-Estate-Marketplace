const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    addInfoData:{}
}
export const addInfoHotspot = createSlice({
    name:"addInfoHotspot",
    initialState,
    reducers: {
        setInfoHotspot:(state,{payload}) => {
             state.addInfoData = {...state.addInfoData,...payload}
        },
       
    }
})

export const { setInfoHotspot } = addInfoHotspot.actions

export default addInfoHotspot.reducer

