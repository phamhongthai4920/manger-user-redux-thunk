import { createSlice } from "@reduxjs/toolkit";
export const departmentListReducer = createSlice({
  name: "department",
  initialState: {},
  reducers: {
    department_list_request: (state) => {
      return { loading: true, departments: [] };
    },
    department_list_fail: (state, action) => {
      return { loading: false, error: action.payload };
    },
    department_list_success: (state, action) => {
      return { loading: false, departments: action.payload };
    },
  },
});
export const {
  department_list_request,
  department_list_fail,
  department_list_success,
} = departmentListReducer.actions;
export default departmentListReducer.reducer;
