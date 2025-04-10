//* Redux
import { createSlice } from "@reduxjs/toolkit";

const saveGroups = (userEmail, groupObj) => {
  localStorage.setItem(`${userEmail}Groups`, JSON.stringify(groupObj));
};

const slice = createSlice({
  name: "category",
  initialState: {
    groups: {
      family: [],
      friends: [],
      job: [],
    },
    user: null,
  },
  reducers: {
    setGroupUser: (state, action) => {
      state.user = action.payload;
      state.groups.family = [];
      state.groups.friends = [];
      state.groups.job = [];
    },
    fetchGroups: (state, action) => {
      if (!state.user) return;

      const dataFromLS = JSON.parse(
        localStorage.getItem(`${state.user}Groups`)
      );

      if (dataFromLS === null) {
        return;
      }

      state.groups = dataFromLS;
    },

    toggleFam: (state, action) => {
      if (state.groups.family.some((item) => item.id === action.payload.id)) {
        state.groups.family = state.groups.family.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.groups.family.push(action.payload);
      }

      saveGroups(state.user, state.groups);
    },
    toggleFriend: (state, action) => {
      if (state.groups.friends.some((item) => item.id === action.payload.id)) {
        state.groups.friends = state.groups.friends.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.groups.friends.push(action.payload);
      }

      saveGroups(state.user, state.groups);
    },
    toggleJob: (state, action) => {
      if (state.groups.job.some((item) => item.id === action.payload.id)) {
        state.groups.job = state.groups.job.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.groups.job.push(action.payload);
      }

      saveGroups(state.user, state.groups);
    },
    removeFromAllCategories: (state, action) => {
      state.groups.family = state.groups.family.filter(
        (item) => item.id !== action.payload.id
      );
      state.groups.friends = state.groups.friends.filter(
        (item) => item.id !== action.payload.id
      );
      state.groups.job = state.groups.job.filter(
        (item) => item.id !== action.payload.id
      );

      saveGroups(state.user, state.groups);
    },
  },
});

export const {
  toggleFam,
  toggleFriend,
  toggleJob,
  removeFromAllCategories,
  setGroupUser,
  fetchGroups,
} = slice.actions;
export default slice.reducer;
