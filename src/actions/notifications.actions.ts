import { createAsyncThunk } from '@reduxjs/toolkit';
import notificationServices from '../services/notification.services';

export const getUserNotifications: any = createAsyncThunk(
  'notifications/fetchNotifications',
  async (id: string, { rejectWithValue }) => {
    try {
      const notifications = await notificationServices.getUserNotifications(id);
      const formattedNotifications = notifications.map((notif: any) => ({
        ...notif,
        date: new Date(notif.date.seconds * 1000).toDateString(),
      }));
      return formattedNotifications;
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);

export const readNotification: any = createAsyncThunk(
  'notifications/readNotification',
  async (id: string, { rejectWithValue }) => {
    try {
      await notificationServices.updateOneNotification(id);
      return { id: id };
    } catch (error) {
      return rejectWithValue(error.code);
    }
  }
);
