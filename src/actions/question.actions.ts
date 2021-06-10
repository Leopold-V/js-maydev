import { createAsyncThunk } from '@reduxjs/toolkit';
import { questionType } from '../app/types';
import questionServices from '../services/question.services';

export const fetchQuestions: any = createAsyncThunk(
  'questions/fetchQuestions',
  async (_, { rejectWithValue }) => {
    try {
      const questions = await questionServices.getAllQuestions();
      const formattedQuestion = questions.map((question: any) => ({
        ...question,
        date: new Date(question.date.seconds * 1000).toDateString(),
      }));
      return formattedQuestion;
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const addQuestion: any = createAsyncThunk(
  'questions/addQuestion',
  async (data: questionType, { rejectWithValue }) => {
    try {
      const questionId = await questionServices.addOneQuestion(data);
      return { ...data, id: questionId, date: new Date(Date.now()).toString() };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const deleteQuestion: any = createAsyncThunk(
  'questions/deleteQuestion',
  async (id: string, { rejectWithValue }) => {
    try {
      await questionServices.deleteQuestion(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const addQuestionToRead: any = createAsyncThunk(
  'questions/addToReadQuestion',
  async (data: { userId: string; question: questionType }, { rejectWithValue }) => {
    const updatedList = [...data.question.reading, data.userId];
    try {
      await questionServices.updateReading({ ...data.question, reading: updatedList });
      return { ...data.question, reading: updatedList };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const removeQuestionToRead: any = createAsyncThunk(
  'questions/removeQuestionToRead',
  async (data: { userId: string; question: questionType }, { rejectWithValue }) => {
    const updatedList = data.question.reading.filter((ele) => ele !== data.userId);
    try {
      await questionServices.updateReading({ ...data.question, reading: updatedList });
      return { ...data.question, reading: updatedList };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const addLikeQuestion: any = createAsyncThunk(
  'questions/addLikeQuestion',
  async (data: { userId: string; question: questionType }, { rejectWithValue }) => {
    const updatedList = [...data.question.likes, data.userId];
    try {
      await questionServices.updateLikes({ ...data.question, likes: updatedList });
      return { ...data.question, likes: updatedList };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const removeLikeQuestion: any = createAsyncThunk(
  'questions/removeLikeQuestion',
  async (data: { userId: string; question: questionType }, { rejectWithValue }) => {
    const updatedList = data.question.likes.filter((ele) => ele !== data.userId);
    try {
      await questionServices.updateLikes({ ...data.question, likes: updatedList });
      return { ...data.question, likes: updatedList };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);
