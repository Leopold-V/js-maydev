import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllQuestions } from "../services/question.services";

export const fetchQuestions: any = createAsyncThunk('questions/fetchQuestions', async (_, { rejectWithValue }) => {
    try {
        const questions = await getAllQuestions();
        const formattedQuestion = questions.map((question: any) => ({...question, date: new Date(question.date.seconds * 1000).toString()}));
        return formattedQuestion;
    } catch (error) {
      return rejectWithValue(error.code);
    }
});