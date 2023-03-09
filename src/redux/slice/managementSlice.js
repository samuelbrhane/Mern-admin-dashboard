import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admins: [],
};

const managementSlice = createSlice({
  name: "management",
  initialState,
  reducers: {
    GET_ADMINS: (state, action) => {
      state.admins = action.payload;
    },
  },
});

export const { GET_ADMINS } = managementSlice.actions;
export const selectAdmins = (state) => state.management.admins;

export default managementSlice.reducer;
