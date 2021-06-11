import { createAsyncThunk } from "@reduxjs/toolkit";
import { commentType } from "../app/types";
import commentServices from "../services/comment.services";

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