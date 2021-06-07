import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import questionReducer from '../slices/questionSlice';

const store = configureStore({
  reducer: {
    questions: questionReducer,
    user: userReducer,
  },
});

export default store;
