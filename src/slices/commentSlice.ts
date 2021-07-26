import { createSlice } from '@reduxjs/toolkit';
import {
  addComment,
  addLikeComment,
  removeLikeComment
} from '../actions/comment.actions';
import { commentType } from '../app/types';

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
      console.log(action.payload);
      state.comments.push(action.payload);
      state.loading = false;
    },
    [addComment.rejected]: (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addLikeComment.pending]: (state: any) => {
      state.loading = true;
    },
    [addLikeComment.fulfilled]: (state: any, action) => {
      state.loading = false;
      const comment = state.comments.find((ele: commentType) => ele.id === action.payload.id);
      comment.likes = action.payload.likes;
    },
    [addLikeComment.rejected]: (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [removeLikeComment.pending]: (state: any) => {
      state.loading = true;
    },
    [removeLikeComment.fulfilled]: (state: any, action) => {
      state.loading = false;
      const comment = state.comments.find((ele: commentType) => ele.id === action.payload.id);
      comment.likes = action.payload.likes;
    },
    [removeLikeComment.rejected]: (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loadComments } = commentSlice.actions;

export default commentSlice.reducer;
