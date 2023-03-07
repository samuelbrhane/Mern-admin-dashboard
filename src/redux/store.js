import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modeSlice from "./slice/modeSlice";
import clientSlice from "./slice/clientSlice";

const rootReducer = combineReducers({
  background: modeSlice,
  client: clientSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
