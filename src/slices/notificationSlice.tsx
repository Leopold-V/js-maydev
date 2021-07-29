import { createSlice } from '@reduxjs/toolkit';
import {
  addNotification,
  fetchNotification,
  readNotification,
} from '../actions/notifications.actions';
import { notificationType } from '../app/types';

export const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
    loading: true,
    error: '',
  },
  reducers: {},
  extraReducers: {
    [fetchNotification.pending]: (state) => {
      state.loading = true;
    },
    [fetchNotification.fulfilled]: (state, action) => {
      state.loading = false;
      state.notifications = action.payload;
    },
    [fetchNotification.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addNotification.pending]: (state) => {
      state.loading = true;
    },
    [addNotification.fulfilled]: (state: any, action) => {
      state.notifications.push(action.payload);
      state.loading = false;
    },
    [addNotification.rejected]: (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [readNotification.pending]: (state) => {
      state.loading = true;
    },
    [readNotification.fulfilled]: (state: any, action) => {
      const notif = state.notifications.find(
        (notif: notificationType) => notif.id === action.payload.id
      );
      notif.isRead = true;
      state.loading = false;
    },
    [readNotification.rejected]: (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default notificationSlice.reducer;
