import { createSlice } from '@reduxjs/toolkit';
import { login, register } from '../Thunk/auth.js';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: {
      _id: '',
      firstName: '',
      lastName: '',
      email: '',
      email_verified: false,
      image: '',
      role: '',
      isAdmin: false,
      active: false,
      followers: [],
      following: [],
      wishList: [],
    },
    isLoggedIn: false,
    pending: false,
    error: null,
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.pending = true;
    },
    [login.fulfilled]: (state, action) => {
      state.pending = false;
      state.isLoggedIn = true;
      state.error = null;
      localStorage.setItem('jwt', action.payload.data.token);
      state.info = action.payload.data.user;
      state.info.isAdmin =
        action.payload.data?.user?.role === 'admin';
    },
    [login.rejected]: (state, action) => {
      console.log('Error Payload:', action.payload);
      state.pending = false;
      state.error = action.payload.message;
    },
    [register.pending]: (state) => {
      state.pending = true;
    },
    [register.fulfilled]: (state, action) => {
      state.pending = false;
      state.isLoggedIn = true;
      state.error = null;
      localStorage.setItem('jwt', action.payload.data.token);
      state.info = action.payload.data.user;
      state.info.isAdmin =
        action.payload.data?.user?.role === 'admin';
    },
    [register.rejected]: (state, action) => {
      console.log('Error Payload:', action.payload);
      state.pending = false;
      state.error = action.payload.message;
    },
  },
  reducers: {
    resetUser: (state, action) => {
      state.info._id = '';
      state.info.firstName = '';
      state.info.lastName = '';
      state.info.email = '';
      state.info.image = '';
      state.info.email_verified = false;
      state.info.role = '';
      state.info.active = '';
      state.info.isAdmin = false;
      state.info.following = [];
      state.info.followers = [];
      state.info.wishList = '';
      state.info.active = false;
      state.isLoggedIn = false;
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
