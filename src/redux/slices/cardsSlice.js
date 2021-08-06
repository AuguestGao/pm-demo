import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    createCard: {
      reducer: (state, action) => {
        const { id, data } = action.payload;
        return { ...state, [id]: data };
      },
      prepare: (profile) => {
        const id = nanoid();
        return {
          payload: {
            id,
            data: {
              createdAt: new Date().toISOString(),
              profile: profile,
              todos: [],
            },
          },
        };
      },
    },
  },
});

export const { createCard } = cardsSlice.actions;

export default cardsSlice.reducer;
