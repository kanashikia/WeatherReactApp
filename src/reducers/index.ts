import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const rootReducer = createSlice({
  name: "root",
  initialState: {},
  reducers: {
    addData: (
      state: any,
      action: PayloadAction<{ lat: number; current: {}; daily: [] }>
    ) => {
      if (state) {
        state.value = action.payload;
      }
    },
  },
});

export const { actions, reducer } = rootReducer;
