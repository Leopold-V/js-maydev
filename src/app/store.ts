import { configureStore } from '@reduxjs/toolkit';
import questionReducer from '../slices/questionSlice';

const store = configureStore({
  reducer: {
    questions: questionReducer,
  },
});

export default store;