import { createAsyncThunk } from '@reduxjs/toolkit';
import customFetch from '../../utils/axios';

export const getAllJobs = createAsyncThunk(
  'allJobs/getJobs',
  async (_, thunkAPI) => {
    let url = `/jobs`;

    try {
      const resp = await customFetch.get(url, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      });

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
