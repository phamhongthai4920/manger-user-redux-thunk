import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import authApi from "../../../services/api/authApi"
import { login } from "./declareUser"

export const loginUser = createAsyncThunk(
    "auth/login",
    async(data:login) => {
       const response =  await authApi.login(data)
        return response.data
    }
)

export const logoutUser = createAsyncThunk(
    "auth/logout",
    async() => {
        await authApi.logout()
    }
)

const initialState = {
    user: [],
    status: "success",
    error: null,

}

const authSlice = createSlice({
    name: "authen",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state, _) => {
                    state.status = 'loading'
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                    state.status = 'success'
                    state.user = action.payload
            })
            .addCase(loginUser.rejected, (state, _) => {
                    state.status = 'fail'
            })
            .addCase(logoutUser.fulfilled, (state, _) => {
                    state.user = []
            })
    },
})
export default authSlice.reducer