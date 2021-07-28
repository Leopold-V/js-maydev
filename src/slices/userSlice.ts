import { createSlice } from '@reduxjs/toolkit';
import { updateUser } from '../actions/user.actions';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    user: null,
    users: null,
    loading: true,
    loadingData: false,
    loadingUsers: true,
    error: '',
  },
  reducers: {
    loadUser: (state, action: any) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    loadAllUsers: (state, action: any) => {
      state.loadingUsers = false;
      state.users = action.payload;
    },
    noUser: (state) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: {
    [updateUser.pending]: (state: any) => {
      state.loadingData = true;
    },
    [updateUser.fulfilled]: (state: any, action) => {
      state.loadingData = false;
      const user = state.user;
      user.username = action.payload.username;
      user.email = action.payload.email;
      user.bio = action.payload.bio;
      user.location = action.payload.location;
      user.website_url = action.payload.website_url;
      user.dev_profile = action.payload.dev_profile;
      user.tags = action.payload.tags;
    },
    [updateUser.rejected]: (state: any, action) => {
      state.loadingData = false;
      state.error = action.payload;
    },
  },
});

export const { loadUser, noUser, loadAllUsers } = userSlice.actions;

export default userSlice.reducer;
