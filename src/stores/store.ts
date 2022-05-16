import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../reducers/index";

const store = configureStore({
  reducer: {
    root: reducer,
  },
});

export default store;
