import { createSlice } from '@reduxjs/toolkit';
import { fetchQuestions } from '../actions/question.actions';

export const questionSlice = createSlice({
  name: 'project',
  initialState: {
    questions: [],
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: {
    [fetchQuestions.pending]: (state) => {
      state.loading = true;
    },
    [fetchQuestions.fulfilled]: (state, action) => {
      state.loading = false;
      state.questions = action.payload;
    },
    [fetchQuestions.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default questionSlice.reducer;