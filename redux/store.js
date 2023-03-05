import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modeSlice from "./slice/modeSlice";

const rootReducer = combineReducers({
  background: modeSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
