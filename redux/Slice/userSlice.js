import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  selectedUserPosts: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setSelectedUserPosts: (state, action) => {
      state.selectedUserPosts = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUsers, setSelectedUserPosts, setLoading, setError } =
  userSlice.actions;

export default userSlice.reducer;
