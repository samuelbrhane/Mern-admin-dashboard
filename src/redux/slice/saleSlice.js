import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalSales: [],
};

const saleSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    GET_SALES: (state, action) => {
      state.totalSales = action.payload;
    },
  },
});

export const { GET_SALES } = saleSlice.actions;
export const selectTotalSales = (state) => state.sales.totalSales;

export default saleSlice.reducer;
