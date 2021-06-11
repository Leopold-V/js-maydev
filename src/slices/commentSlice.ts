import { createSlice } from '@reduxjs/toolkit';
import {
  addComment,
} from '../actions/comment.actions';

export const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    comments: [],
    loading: true,
    error: '',
  },
  reducers: {
    loadComments: (state, action: any) => {
      state.loading = false;
      state.comments = action.payload;
    },
  },
  extraReducers: {
    [addComment.pending]: (state) => {
      state.loading = true;
    },
    [addComment.fulfilled]: (state: any, action) => {
      state.comments.push(action.payload);
      state.loading = false;
    },
    [addComment.rejected]: (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loadComments } = commentSlice.actions;

export default commentSlice.reducer;
