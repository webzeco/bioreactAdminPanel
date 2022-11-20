import { createSlice } from '@reduxjs/toolkit';
import { login, register } from '../Thunk/auth.js';
import { addStore, getAllStores } from '../Thunk/store.js';

export const userSlice = createSlice({
  name: 'store',
  initialState: {
    stores: [],
    pending: false,
    error: null,
  },
  extraReducers: {
    [getAllStores.pending]: (state) => {
      state.pending = true;
    },
    [getAllStores.fulfilled]: (state, action) => {
      state.pending = false;
      state.stores = action.payload.data;
    },
    [getAllStores.rejected]: (state, action) => {
      console.log('Error Payload:', action.payload);
      state.pending = false;
      state.error = action.payload.message;
    },
    [addStore.pending]: (state) => {
      state.pending = true;
    },
    [addStore.fulfilled]: (state, action) => {
      state.pending = false;
      state.stores.push(action.payload.data);
    },
    [addStore.rejected]: (state, action) => {
      console.log('Error Payload:', action.payload);
      state.pending = false;
      state.error = action.payload.message;
    },
  },
  reducers: {
    resetStore: (state, action) => {
      state.stores = [];
      state.pending = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { resetUser, setError } = userSlice.actions;

export default userSlice.reducer;

// {
//   title: '',
//   location: {
//     address: '',
//     coordinates: [0, 0],
//   },
//   active: true,
//   bestSeller: false,
//   images: ['', '', ''],
//   description: '',
//   createdAt: '',
//   _id: '',
//   info: [],
//   __v: 0,
//   id: '',
// },
