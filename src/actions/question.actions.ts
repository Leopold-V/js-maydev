import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllQuestions } from "../services/question.services";

export const fetchQuestions: any = createAsyncThunk('questions/fetchQuestions', async (_, { rejectWithValue }) => {
    try {
        return getAllQuestions();
    } catch (error) {
      return rejectWithValue(error.code);
    }
});