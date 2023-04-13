import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  art: {
    name: "ArtName",
    category: "Category",
    photo: "PhotoName",
    price: 0.0,
    creatorId: "CreatorId",
    ownerId: "OwnerId",
    count: 0,
  },
};

const artSlice = createSlice({
  name: 'currentArt',
  initialState,
  reducers: {
    artDetails: (state, action) => {
      state.art = action.payload;
    },
  },
});

export const { artDetails } = artSlice.actions;

export default artSlice.reducer;