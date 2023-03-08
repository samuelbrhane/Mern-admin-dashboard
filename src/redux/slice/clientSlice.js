import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  customers: [],
  transactions: [],
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
    GET_TRANSACTIONS: (state, action) => {
      state.transactions = action.payload;
    },
  },
});

export const { GET_PRODUCTS, GET_CUSTOMERS, GET_TRANSACTIONS } =
  clientSlice.actions;
export const selectProducts = (state) => state.client.products;
export const selectCustomers = (state) => state.client.customers;
export const selectTransactions = (state) => state.client.transactions;

export default clientSlice.reducer;
