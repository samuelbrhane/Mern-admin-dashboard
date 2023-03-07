import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  customers: [],
};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    GET_PRODUCTS: (state, actions) => {
      state.products = actions.payload;
    },
    GET_CUSTOMERS: (state, action) => {
      state.customers = action.payload;
    },
  },
});

export const { GET_PRODUCTS, GET_CUSTOMERS } = clientSlice.actions;
export const selectProducts = (state) => state.client.products;
export const selectCustomers = (state) => state.client.customers;

export default clientSlice.reducer;
