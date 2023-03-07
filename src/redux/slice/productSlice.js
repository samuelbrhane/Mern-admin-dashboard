import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    GET_PRODUCTS: (state, action) => {
      state.productList = action.payload;
    },
  },
});

export const { GET_PRODUCTS } = productSlice.actions;
export const selectProductList = (state) => state.products.productList;

export default productSlice.reducer;
