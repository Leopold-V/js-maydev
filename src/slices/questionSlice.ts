import { createSlice } from '@reduxjs/toolkit';
import { fetchQuestions, addQuestion } from '../actions/question.actions';

export const questionSlice = createSlice({
  name: 'project',
  initialState: {
    questions: [],
    loading: true,
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
    [addQuestion.pending]: (state) => {
      state.loading = true;
    },
    [addQuestion.fulfilled]: (state: any, action) => {
      console.log(action.payload);
      state.questions.push(action.payload);
      state.loading = false;
    },
    [addQuestion.rejected]: (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default questionSlice.reducer;
