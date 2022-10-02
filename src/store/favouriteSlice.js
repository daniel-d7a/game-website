import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    remove: (state, action) => {
      const index = state.value.findIndex((ele) => ele.id === action.payload.id);
      state.value.splice(index, 1);
    },
  },
});

export const { add, remove } = favouriteSlice.actions;
export default favouriteSlice.reducer;
