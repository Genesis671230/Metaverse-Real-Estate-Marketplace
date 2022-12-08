const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    paranoma:{}
}
export const paranomaDataSlice = createSlice({
    name:"paranomaDataSlice",
    initialState,
    reducers: {
        setParanomaData:(state,{payload}) => {
            state.paranoma = {...state.paranoma, ...payload}
        },
       
    }
})

export const { setParanomaData } = paranomaDataSlice.actions

export default paranomaDataSlice.reducer

