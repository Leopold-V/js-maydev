import { createSlice } from '@reduxjs/toolkit';
import { addNotification, fetchNotification } from '../actions/notifications.actions';

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
      console.log(action.payload);
      state.notifications.push(action.payload);
      state.loading = false;
    },
    [addNotification.rejected]: (state: any, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default notificationSlice.reducer;
