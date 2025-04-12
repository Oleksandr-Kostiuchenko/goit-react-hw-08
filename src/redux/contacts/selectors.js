// //* Redux
import { createSelector } from "@reduxjs/toolkit";

import { selectNameFilter } from "../filters/selectors";
export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectSelectedContact = (state) => state.contacts.selectedContact;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    const numFilter = Number(nameFilter);

    if (!isNaN(numFilter) && numFilter !== 0) {
      return contacts.filter((el) => el.number.includes(numFilter));
    } else {
      return contacts.filter((el) =>
        el.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }
  }
);
