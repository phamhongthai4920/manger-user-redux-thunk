import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../../services/api/userApi";
import { deleteUserId, user } from "./declareUser";

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
  async ( {id}: deleteUserId) => {

    const res = await userApi.remove(id)
    return {id}
    }

)

// export const deleteAllTutorials = createAsyncThunk(
//   "tutorials/deleteAll",
//   async () => {
//     const res = await userApi.removeAll();
//     return res.data;
//   }
// );
// export const findTutorialsByTitle = createAsyncThunk(
//   "tutorials/findByTitle",
//   async ({ title }) => {
//     const res = await userApi.findByTitle(title);
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
      addCase(getAllUser.pending, (state, _) => {
        state.status = "loading"
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.status = "success"
        state.user = [...action.payload]
      })
      .addCase(getAllUser.rejected, (state, _) => {
        state.status = "fail"
      })
      .addCase(deleteUser.pending, (state, _) => {
        state.status = "loading"
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = "success"
        const indexDelete = state.user.findIndex((item: user) => item.id === action.payload.id)
        state.user.splice(indexDelete, 1)
      })
      .addCase(deleteUser.rejected, (state, _) => {
        
        state.status = "fail"
      })
      .addCase(createUser.pending, (state, _) => {
        state.status = "loading"
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "success"
        const newUser = {
          username: action.payload.username,
          email: action.payload.email,
          role: action.payload.role,
        }
        state.user.push(newUser)
      })

      .addCase(createUser.rejected, (state, _) => {
        state.status = "fail"
      })
      .addCase(updateUser.pending, (state, _) => {
        state.status = "loading"
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "success"
        
        const index = state.user.findIndex(item => item.id === action.payload.id);
        state.user[index] = {
          ...state.user[index],
          ...action.payload
        }
      })
      .addCase(updateUser.rejected, (state, _) => {
        state.status = "fail"
      })     
  }

})

export default userSlice.reducer