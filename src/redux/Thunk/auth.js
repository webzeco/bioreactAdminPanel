import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi, registerApi } from '../../api/auth.js';

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await loginApi(data.email, data.password);
      console.log({ response });
      if (!response.ok) return rejectWithValue(response.data);
      data.goToHome();
      return response.data;
    } catch (e) {
      console.log({ error: e.message });
      return rejectWithValue({ message: 'Something went wrong !!!' });
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    console.log('data', JSON.stringify(data));
    try {
      const formData = new FormData();
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('email', data.email);
      formData.append('password', data.password);
      formData.append('image', data.image);
      const response = await registerApi(formData);
      if (!response.ok) return rejectWithValue(response.data);
      data.goToHome();
      return response.data;
    } catch (e) {
      console.log({ error: e.message });
      return rejectWithValue({ message: 'Something went wrong !!!' });
    }
  }
);
