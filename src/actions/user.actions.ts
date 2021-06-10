import { createAsyncThunk } from '@reduxjs/toolkit';
import { userType } from '../app/types';
import userServices from '../services/user.services';

export const updateUser: any = createAsyncThunk(
  'users/updateUser',
  async (data: userType, { rejectWithValue }) => {
    try {
      await userServices.updateOneUser(data);
      return { ...data };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);
