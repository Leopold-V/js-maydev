import { createSlice } from '@reduxjs/toolkit';
import { validateComment } from '../actions/comment.actions';
import {
  fetchQuestions,
  addQuestion,
  addQuestionToRead,
  removeQuestionToRead,
  addLikeQuestion,
  removeLikeQuestion,
  deleteQuestion,
  updateQuestion,
} from '../actions/question.actions';
import { questionType } from '../app/types';

export const questionSlice = createSlice({
  name: 'questions',
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
    [updateQuestion.pending]: (state: any) => {
      state.loading = true;
    },
    [updateQuestion.fulfilled]: (state: any, action) => {
      state.loading = false;
      const question = state.questions.find((ele: questionType) => ele.id === action.payload.id);
      question.title = action.payload.title;
      question.content = action.payload.content;
      question.tags = action.payload.tags;
      question.edit_date = action.payload.edit_date;
    },
    [updateQuestion.rejected]: (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteQuestion.pending]: (state: any) => {
      state.loading = true;
    },
    [deleteQuestion.fulfilled]: (state: any, action) => {
      state.loading = false;
      const questions = state.questions.filter((ele: questionType) => ele.id !== action.payload);
      state.questions = questions;
    },
    [deleteQuestion.rejected]: (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addQuestionToRead.pending]: (state: any) => {
      state.loading = true;
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
    [removeQuestionToRead.pending]: (state: any) => {
      state.loading = true;
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
    [addLikeQuestion.pending]: (state: any) => {
      state.loading = true;
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
    [removeLikeQuestion.pending]: (state: any) => {
      state.loading = true;
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
    [validateComment.pending]: (state: any) => {
      state.loading = true;
    },
    [validateComment.fulfilled]: (state: any, action) => {
      state.loading = false;
      const question = state.questions.find((ele: questionType) => ele.id === action.payload.questionId);
      question.isSolved = true;
    },
    [validateComment.rejected]: (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default questionSlice.reducer;
