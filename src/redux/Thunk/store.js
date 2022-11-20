import { createAsyncThunk } from '@reduxjs/toolkit';
import { addStoreApi, getAllStoresApi } from '../../api/stores.js';

export const getAllStores = createAsyncThunk(
  'store/getAll',
  async (data, { rejectWithValue }) => {
    try {
      const response = await getAllStoresApi();
      console.log({ response });
      if (!response.ok) return rejectWithValue(response.data);
      return response.data;
    } catch (e) {
      console.log({ error: e.message });
      return rejectWithValue({ message: 'Something went wrong !!!' });
    }
  }
);

export const addStore = createAsyncThunk(
  'store/add',
  async (data, { rejectWithValue }) => {
    const progress = (uploaded) => {
      console.log({ uploaded });
    };
    try {
      const response = await addStoreApi(data, progress);
      if (!response.ok) return rejectWithValue(response.data);
      data.goToStores();
      return response.data;
    } catch (e) {
      console.log({ error: e.message });
      return rejectWithValue({ message: 'Something went wrong !!!' });
    }
  }
);
