import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    createCard(state, action) {
      return state;
    },
  },
});

export const { createCard } = cardsSlice.actions;

export default cardsSlice.reducer;
