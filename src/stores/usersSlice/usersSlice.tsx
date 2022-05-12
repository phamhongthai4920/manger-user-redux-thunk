import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import userApi from "../../services/api/userApi"
import {RootState} from "../reducerConfig"
import { deleteUserId } from "./declareUser"

interface user {
  username: string,
  email: string,
  role: string,
  id?: number
}

interface initialStateUser {
  status: 'success' | 'loading' | "fail",
  error: string | null,
  user: user[]
}


export const createUser = createAsyncThunk(
  "users/create",
  async ({ username, email, role }: user) => {
    const res = await userApi.add({ username, email, role })
    return res.data;
  }
)

export const getAllUser = createAsyncThunk(
  "users/getAll",
  async () => {
    
    const res = await userApi.getAll();
    return res.data
  }
)
export const updateUser = createAsyncThunk(
  "users/update",
  async (data: user) => {
    const res = await userApi.update(data)
    return res.data
  }
)

export const deleteUser = createAsyncThunk(
  "users/delete",
  async ( id: deleteUserId) => {

    const res = await userApi.remove(id)
     return id
    }

    // const res = await userApi.remove(id)
    // return id
)


// export const deleteAllTutorials = createAsyncThunk(
//   "tutorials/deleteAll",
//   async () => {
//     const res = await TutorialDataService.removeAll();
//     return res.data;
//   }
// );
// export const findTutorialsByTitle = createAsyncThunk(
//   "tutorials/findByTitle",
//   async ({ title }) => {
//     const res = await TutorialDataService.findByTitle(title);
//     return res.data;
//   }
// );

const initialState = {
  status: 'success',
  error: null,
  user: []

} as initialStateUser


 const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: { 
  },
  extraReducers: (builder) => {
    builder.
      addCase(getAllUser.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.status = "success"
        state.user = [...action.payload]
      })
      .addCase(getAllUser.rejected, (state, action) => {
        state.status = "fail"
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = "success"
        let index = state.user.findIndex(({ id }) => id === action.payload.id);
        state.user.splice(index, 1);
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "success"
        const newUser = {
          id: Date.now(),
          username: action.payload.username,
          email: action.payload.email,
          role: action.payload.role,
        }
        state.user.push(newUser)
      }
      )

  }

})

export default userSlice.reducer