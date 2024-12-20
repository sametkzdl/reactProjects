import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 12,
  male: true,
  female: false,
  age: 24,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByPayload: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByPayload } =
  counterSlice.actions;

export default counterSlice.reducer;
