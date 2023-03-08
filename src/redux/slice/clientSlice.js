import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  customers: [],
  transactions: [],
  geography: [],
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
    GET_GEOGRAPHY: (state, action) => {
      state.geography = action.payload;
    },
  },
});

export const { GET_PRODUCTS, GET_CUSTOMERS, GET_TRANSACTIONS, GET_GEOGRAPHY } =
  clientSlice.actions;
export const selectProducts = (state) => state.client.products;
export const selectCustomers = (state) => state.client.customers;
export const selectTransactions = (state) => state.client.transactions;
export const selectGeography = (state) => state.client.geography;

export default clientSlice.reducer;
