//* Redux
import { createSelector, createSlice } from "@reduxjs/toolkit";

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

//* Selectors
import { selectNameFilter } from "./filtersSlice";
export const selectFavContacts = (state) => state.fav.items;

export const selectVisibleFavContacts = createSelector(
  [selectFavContacts, selectNameFilter],
  (favContacts, nameFilter) => {
    return favContacts.filter((el) => el.name.includes(nameFilter));
  }
);
