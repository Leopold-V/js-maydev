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
        date: new Date(question.date.seconds * 1000).toString(),
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
      console.log(questionId);
      return { ...data, id: questionId, date: new Date(Date.now()).toString() };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const addQuestionToRead: any = createAsyncThunk(
  'questions/addToReadQuestion',
  async (data: {userId: string, question: questionType}, { rejectWithValue }) => {
    const updatedList = [...data.question.reading, data.userId]
    try {
      await questionServices.updateReading({...data.question, reading: updatedList});
      return {...data.question, reading: updatedList};
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const removeQuestionToRead: any = createAsyncThunk(
  'questions/addToReadQuestion',
  async (data: {userId: string, question: questionType}, { rejectWithValue }) => {
    const updatedList = data.question.reading.filter((ele) => ele !== data.userId);
    try {
      await questionServices.updateReading({...data.question, reading: updatedList});
      return {...data.question, reading: updatedList};
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

