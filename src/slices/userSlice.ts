import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    user: null,
    loading: true,
    error: '',
  },
  reducers: {
    loadUser: (state, action: any) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    noUser: (state) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: {
  },
});

export const { loadUser, noUser } = userSlice.actions;

export default userSlice.reducer;