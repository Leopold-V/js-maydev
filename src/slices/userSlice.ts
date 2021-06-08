import { createSlice } from '@reduxjs/toolkit';
import { addQuestionToRead, removeQuestionToRead } from '../actions/user.actions';

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
    [addQuestionToRead.pending]: (state: any, action) => {
      state.loading = false;
    },
    [addQuestionToRead.fulfilled]: (state: any, action) => {
      state.loading = false;
      state.user.reading = action.payload;
    },
    [addQuestionToRead.rejected]: (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [removeQuestionToRead.pending]: (state: any, action) => {
      state.loading = false;
    },
    [removeQuestionToRead.fulfilled]: (state: any, action) => {
      state.loading = false;
      state.user.reading = action.payload;
    },
    [removeQuestionToRead.rejected]: (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loadUser, noUser } = userSlice.actions;

export default userSlice.reducer;
