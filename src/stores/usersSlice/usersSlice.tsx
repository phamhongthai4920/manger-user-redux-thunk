import { createSlice } from "@reduxjs/toolkit";
export const userListReducer = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    user_list_request: (state) => {
      return { loading: true, users: [] };
    },
    user_username_update: (state, action) => {
      console.log("ACTION PAYLOAD ==>", action.payload, state);
      return { loading: true, users: action.payload.username };
    },
    user_list_fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
    user_list_success: (state, action) => {
      return { loading: false, users: action.payload };
    },
    user_delete_success: (state) => {
      return { loading: false, success: true };
    },
    user_create_success: (state) => {
      return { loading: false, success: true };
    },
    user_edit_request: (state, action) => {
      return { ...state, loading: true };
    },
    user_edit_success: (state, action) => {
      return { loading: false, success: true, users: action.payload };
    },
    user_update_success: (state, action) => {
      return { loading: false, success: true, users: action.payload };
    },
    user_update_reset: (state, action) => {
      return { user: {} };
    },
  },
});
export const {
  user_list_request,
  user_list_success,
  user_list_fail,
  user_delete_success,
  user_create_success,
  user_edit_request,
  user_edit_success,
  user_update_success,
  user_username_update,
  user_update_reset,
} = userListReducer.actions;
export default userListReducer.reducer;
