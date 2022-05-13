import {createSlice} from "@reduxjs/toolkit"

const showEditSlice = createSlice({
    name: "showEdit",
    initialState: false,
    reducers: {
        showEdit: (state) => {
            return !state
        }
    }
})
export const  { showEdit }  = showEditSlice.actions
export default showEditSlice.reducer;
