import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationType } from '../app/types';
import notificationServices from '../services/notification.services';

// TODO :
// Update isRead notification
// Clean notification

export const fetchNotification: any = createAsyncThunk(
  'notifications/fetchNotifications',
  async (id: string, { rejectWithValue }) => {
    try {
      const notifications = await notificationServices.getNotificationsOfOneUser(id);
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

export const addNotification: any = createAsyncThunk(
  'notifications/addNotifications',
  async (data: notificationType, { rejectWithValue }) => {
    try {
      const notificationId = await notificationServices.addOneNotification(data);
      return {
        ...data,
        date: new Date(Date.now()).toDateString(),
        id: notificationId,
      };
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
