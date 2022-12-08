const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    editParanomaData:{}
}
export const editParanomaDataSlice = createSlice({
    name:"addInfoHotspot",
    initialState,
    reducers: {
        setEditParanomaData:(state,{payload}) => {
             state.editParanomaData = {...state.editParanomaData,...payload}
        },
       
    }
})

export const { setEditParanomaData } = editParanomaDataSlice.actions

export default editParanomaDataSlice.reducer

