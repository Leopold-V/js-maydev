import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../app/firebase';
import { questionType } from '../app/types';
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

export const addQuestion: any = createAsyncThunk('questions/addQuestion', async (data: questionType, { rejectWithValue }) => {
  try {
    db.collection("questions").add(data);
    return {...data, date: new Date(Date.now()).toString() };
  } catch (error) {
    return rejectWithValue(error.code);
  }
});