import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modeSlice from "./slice/modeSlice";
import clientSlice from "./slice/clientSlice";
import saleSlice from "./slice/saleSlice";

const rootReducer = combineReducers({
  background: modeSlice,
  client: clientSlice,
  sales: saleSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
