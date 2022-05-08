import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userListReducer from "./usersSlice/usersSlice";
import departmentListReducer from "./usersSlice/departmentSlice";

const store = configureStore({
  reducer: {
    userList: userListReducer,
    departmentList: departmentListReducer,
  },
});
export default store;
