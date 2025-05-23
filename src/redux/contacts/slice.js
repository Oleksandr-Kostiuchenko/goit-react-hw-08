//* Redux
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";
import { logout } from "../auth/operations";

//* Handlers
const handlePending = (state, action) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

//* Slice
const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    selectedContact: null,
    deleteModalIsOpen: false,
  },
  reducers: {
    setSelectedContact: (state, action) => {
      state.selectedContact = action.payload;
    },
    setDeleteModalIsOpen: (state, action) => {
      state.deleteModalIsOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Fetch contacts
    builder.addCase(fetchContacts.pending, handlePending);
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected, handleRejected);

    // Add contact
    builder.addCase(addContact.pending, handlePending);
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    });
    builder.addCase(addContact.rejected, handleRejected);

    // Delete contact
    builder.addCase(deleteContact.pending, handlePending);
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter((el) => el.id !== action.payload.id);
    });
    builder.addCase(deleteContact.rejected, handleRejected);

    //Edit Contact
    builder.addCase(editContact.pending, handlePending);
    builder.addCase(editContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    });
    builder.addCase(editContact.rejected, handleRejected);

    // Logout
    builder.addCase(logout.fulfilled, (state, action) => {
      state.items = [];
      state.isLoading = false;
      state.error = null;
    });
  },
});

export const { setSelectedContact, setDeleteModalIsOpen } = slice.actions;
export default slice.reducer;
