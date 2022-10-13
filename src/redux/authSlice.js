import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialValue: {
    isAuth: false,
  },
});
export default authSlice.reducer;
