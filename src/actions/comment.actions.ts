import { createAsyncThunk } from '@reduxjs/toolkit';
import { commentType } from '../app/types';
import commentServices from '../services/comment.services';

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
  async (data: { userId: string; id: string; likes: string[] }, { rejectWithValue }) => {
    const updatedList = [...data.likes, data.userId];
    try {
      await commentServices.updateLikes({ id: data.id, likes: updatedList });
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
