import { createAsyncThunk } from '@reduxjs/toolkit';
import { questionType } from '../app/types';
import notificationServices from '../services/notification.services';
import questionServices from '../services/question.services';

export const fetchQuestions: any = createAsyncThunk(
  'questions/fetchQuestions',
  async (_, { rejectWithValue }) => {
    try {
      const questions = await questionServices.getAllQuestions();
      const formattedQuestion = questions.map((question: any) => ({
        ...question,
        date: new Date(question.date.seconds * 1000).toDateString(),
        edit_date: new Date(question.edit_date.seconds * 1000).toDateString(),
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
      return {
        ...data,
        id: questionId,
        date: new Date(Date.now()).toDateString(),
        edit_date: new Date(Date.now()).toDateString(),
      };
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

export const updateQuestion: any = createAsyncThunk(
  'questions/updateQuestion',
  async (data: questionType, { rejectWithValue }) => {
    try {
      await questionServices.updateOneQuestion(data);
      return { ...data, edit_date: new Date(Date.now()).toDateString() };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const addQuestionToRead: any = createAsyncThunk(
  'questions/addToReadQuestion',
  async (
    data: { userId: string; id: string; reading: string[]; notification: any },
    { rejectWithValue }
  ) => {
    const updatedList = [...data.reading, data.userId];
    try {
      await questionServices.updateReading({ id: data.id, reading: updatedList });
      await notificationServices.addOneNotification(data.notification);
      return { id: data.id, reading: updatedList };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const removeQuestionToRead: any = createAsyncThunk(
  'questions/removeQuestionToRead',
  async (data: { userId: string; id: string; reading: string[] }, { rejectWithValue }) => {
    const updatedList = data.reading.filter((ele) => ele !== data.userId);
    try {
      await questionServices.updateReading({ id: data.id, reading: updatedList });
      return { id: data.id, reading: updatedList };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const addLikeQuestion: any = createAsyncThunk(
  'questions/addLikeQuestion',
  async (
    data: { userId: string; id: string; likes: string[]; notification: any },
    { rejectWithValue }
  ) => {
    const updatedList = [...data.likes, data.userId];
    try {
      await questionServices.updateLikes({ id: data.id, likes: updatedList });
      await notificationServices.addOneNotification(data.notification);
      return { id: data.id, likes: updatedList };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const removeLikeQuestion: any = createAsyncThunk(
  'questions/removeLikeQuestion',
  async (data: { userId: string; id: string; likes: string[] }, { rejectWithValue }) => {
    const updatedList = data.likes.filter((ele) => ele !== data.userId);
    try {
      await questionServices.updateLikes({ id: data.id, likes: updatedList });
      return { id: data.id, likes: updatedList };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);
