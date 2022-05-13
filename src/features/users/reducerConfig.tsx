import { configureStore } from "@reduxjs/toolkit";
import departmentListReducer from "./usersSlice/departmentSlice";
import userListReducer from "./usersSlice/usersSlice";
import showEditReducer from "./usersSlice/showEditSlice";
import authReducer from "./usersSlice/authSlice"

const store = configureStore({
  reducer: {
    userList: userListReducer,
    departmentList: departmentListReducer,
    showEdit: showEditReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export default store;
