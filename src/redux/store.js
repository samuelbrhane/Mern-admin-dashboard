import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modeSlice from "./slice/modeSlice";
import productSlice from "./slice/productSlice";

const rootReducer = combineReducers({
  background: modeSlice,
  products: productSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
