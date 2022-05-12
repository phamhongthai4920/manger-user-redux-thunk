import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userListReducer from "./usersSlice/usersSlice";
import departmentListReducer from "./usersSlice/departmentSlice";
import { useDispatch } from 'react-redux'
import thunkMiddleware from 'redux-thunk';


const store = configureStore({
  reducer: {
    userList: userListReducer,
    departmentList: departmentListReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export default store;
