import { createAsyncThunk } from '@reduxjs/toolkit';
import { commentType, questionType, userType } from '../app/types';
import commentServices from '../services/comment.services';
import notificationServices from '../services/notification.services';
import questionServices from '../services/question.services';
import userServices from '../services/user.services';

export const addComment: any = createAsyncThunk(
  'comments/addComment',
  async (data: commentType, { rejectWithValue }) => {
    try {
      const commentId = await commentServices.addOneComment(data);
      return {
        ...data,
        date: new Date(Date.now()).toDateString(),
        id: commentId,
      };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const addLikeComment: any = createAsyncThunk(
  'comments/addLikeComment',
  async (
    data: { userId: string; id: string; likes: string[]; notification: any },
    { rejectWithValue }
  ) => {
    const updatedList = [...data.likes, data.userId];
    try {
      await commentServices.updateLikes({ id: data.id, likes: updatedList });
      await notificationServices.addOneNotification(data.notification);
      return { id: data.id, likes: updatedList };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const removeLikeComment: any = createAsyncThunk(
  'comments/removeLikeComment',
  async (data: { userId: string; id: string; likes: string[] }, { rejectWithValue }) => {
    const updatedList = data.likes.filter((ele) => ele !== data.userId);
    try {
      await commentServices.updateLikes({ id: data.id, likes: updatedList });
      return { id: data.id, likes: updatedList };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const validateComment: any = createAsyncThunk(
  'comments/validateComment',
  async (
    data: { id: string; question: questionType; author: userType; notification: any },
    { rejectWithValue }
  ) => {
    try {
      await commentServices.validateComment(data.id);
      await questionServices.updateOneQuestion(data.question);
      await userServices.updateOneUser({ ...data.author, score: data.author.score + 1 });
      await notificationServices.addOneNotification(data.notification);
      return { id: data.id, questionId: data.question.id };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);
