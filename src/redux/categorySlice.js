//* Redux
import { createSelector, createSlice } from "@reduxjs/toolkit";

//* Slice
const slice = createSlice({
  name: "category",
  initialState: {
    family: [],
    friends: [],
    job: [],
  },
  reducers: {
    toggleFam: (state, action) => {
      if (state.family.some((item) => item.id === action.payload.id)) {
        state.family = state.family.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.family.push(action.payload);
      }
    },
    toggleFriend: (state, action) => {
      if (state.friends.some((item) => item.id === action.payload.id)) {
        state.friends = state.friends.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.friends.push(action.payload);
      }
    },
    toggleJob: (state, action) => {
      if (state.job.some((item) => item.id === action.payload.id)) {
        state.job = state.job.filter((item) => item.id !== action.payload.id);
      } else {
        state.job.push(action.payload);
      }
    },
    removeFromAllCategories: (state, action) => {
      state.family = state.family.filter(
        (item) => item.id !== action.payload.id
      );
      state.friends = state.friends.filter(
        (item) => item.id !== action.payload.id
      );
      state.job = state.job.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { toggleFam, toggleFriend, toggleJob, removeFromAllCategories } =
  slice.actions;
export default slice.reducer;

//* Selectors
export const selectFam = (state) => state.groups.family;
export const selectFriends = (state) => state.groups.friends;
export const selectJob = (state) => state.groups.job;
