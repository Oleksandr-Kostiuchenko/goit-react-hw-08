//* Redux
import { createSlice } from "@reduxjs/toolkit";

//* Slice
const slice = createSlice({
  name: "fav",
  initialState: {
    items: [],
  },
  reducers: {
    addFav: (state, action) => {
      state.items.push(action.payload);
    },
    deleteFav: (state, action) => {
      state.items = state.items.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addFav, deleteFav } = slice.actions;
export default slice.reducer;
