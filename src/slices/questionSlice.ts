import { createSlice } from '@reduxjs/toolkit';
import { fetchQuestions, addQuestion, addQuestionToRead, removeQuestionToRead, addLikeQuestion, removeLikeQuestion } from '../actions/question.actions';
import { questionType } from '../app/types';

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
      state.questions.push(action.payload);
      state.loading = false;
    },
    [addQuestion.rejected]: (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addQuestionToRead.pending]: (state: any, action) => {
      state.loading = false;
    },
    [addQuestionToRead.fulfilled]: (state: any, action) => {
      state.loading = false;
      const question = state.questions.find((ele: questionType) => ele.id === action.payload.id);
      question.reading = action.payload.reading;
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
      const question = state.questions.find((ele: questionType) => ele.id === action.payload.id);
      question.reading = action.payload.reading;
    },
    [removeQuestionToRead.rejected]: (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addLikeQuestion.pending]: (state: any, action) => {
      state.loading = false;
    },
    [addLikeQuestion.fulfilled]: (state: any, action) => {
      state.loading = false;
      const question = state.questions.find((ele: questionType) => ele.id === action.payload.id);
      question.likes = action.payload.likes;
    },
    [addLikeQuestion.rejected]: (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [removeLikeQuestion.pending]: (state: any, action) => {
      state.loading = false;
    },
    [removeLikeQuestion.fulfilled]: (state: any, action) => {
      state.loading = false;
      const question = state.questions.find((ele: questionType) => ele.id === action.payload.id);
      question.likes = action.payload.likes;
    },
    [removeLikeQuestion.rejected]: (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default questionSlice.reducer;
