import { combineReducers, configureStore } from "@reduxjs/toolkit";
import saleSlice from "./slice/saleSlice";
import modeSlice from "./slice/modeSlice";

const rootReducer = combineReducers({
  background: modeSlice,
  sales: saleSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
