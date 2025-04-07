//* Redux
import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./contactsOps";

//* Slice
const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    // Fetch contacts
    builder.addCase(fetchContacts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Add contact
    builder.addCase(addContact.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Delete contact
    builder.addCase(deleteContact.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter((el) => el.id !== action.payload.id);
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    //Edit Contact
    builder.addCase(editContact.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(editContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    });
    builder.addCase(editContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default slice.reducer;

//* Selectors
import { selectNameFilter } from "./filtersSlice";
export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts.filter((el) => el.name.includes(nameFilter));
  }
);
