import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
  },
};

const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { signIn } = userSlice.actions;

export default userSlice.reducer;