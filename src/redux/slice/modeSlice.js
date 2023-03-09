import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

const modeSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    CHANGE_MODE: (state, action) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export const { CHANGE_MODE } = modeSlice.actions;
export const selectMode = (state) => state.background.mode;

export default modeSlice.reducer;
