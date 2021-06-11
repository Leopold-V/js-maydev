import { createSlice } from '@reduxjs/toolkit';
import {
  addComment,
} from '../actions/comment.actions';

export const commentSlice = createSlice({
  name: 'project',
  initialState: {
    comments: [],
    loading: true,
    error: '',
  },
  reducers: {},
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

export default commentSlice.reducer;
