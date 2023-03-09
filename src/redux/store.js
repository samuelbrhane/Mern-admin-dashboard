import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modeSlice from "./slice/modeSlice";
import clientSlice from "./slice/clientSlice";
import saleSlice from "./slice/saleSlice";
import managementSlice from "./slice/managementSlice";

const rootReducer = combineReducers({
  background: modeSlice,
  client: clientSlice,
  sales: saleSlice,
  management: managementSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
