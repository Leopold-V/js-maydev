import { createAsyncThunk } from '@reduxjs/toolkit';
import { userType } from '../app/types';
import userServices from '../services/user.services';

export const addQuestionToRead: any = createAsyncThunk(
  'questions/addToReadQuestion',
  async (data: {questionId: string, user: userType}, { rejectWithValue }) => {
    const updatedList = [...data.user.reading, data.questionId]
    try {
      await userServices.updateReading({...data.user, reading: updatedList});
      return updatedList;
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const removeQuestionToRead: any = createAsyncThunk(
  'questions/addToReadQuestion',
  async (data: {questionId: string, user: userType}, { rejectWithValue }) => {
    const updatedList = data.user.reading.filter((ele) => ele !== data.questionId);
    try {
      await userServices.updateReading({...data.user, reading: updatedList});
      return updatedList;
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);