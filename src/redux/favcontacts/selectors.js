//* Redux
import { createSelector } from "@reduxjs/toolkit";

//* Selectors
import { selectNameFilter } from "../filters/selectors";
export const selectFavContacts = (state) => state.fav.items;

export const selectVisibleFavContacts = createSelector(
  [selectFavContacts, selectNameFilter],
  (favContacts, nameFilter) => {
    return favContacts.filter((el) => el.name.includes(nameFilter));
  }
);
