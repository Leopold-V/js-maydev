import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import questionReducer from '../slices/questionSlice';
import commentReducer from '../slices/commentSlice';

const store = configureStore({
  reducer: {
    questions: questionReducer,
    user: userReducer,
    comments: commentReducer
  },
});

export default store;
