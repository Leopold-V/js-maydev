import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import questionReducer from '../slices/questionSlice';
import commentReducer from '../slices/commentSlice';
import notificationReducer from '../slices/notificationSlice';

const store = configureStore({
  reducer: {
    questions: questionReducer,
    user: userReducer,
    comments: commentReducer,
    notifications: notificationReducer,
  },
});

export default store;
