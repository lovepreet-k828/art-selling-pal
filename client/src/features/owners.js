import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  owner: {
    fName:"FirstName",
    lName: "LastName",
    country:"Country",
    state:"state",
    cityVillage:"city/Village",
    nft:100000,
    _id:"Id",
    email:"abc@email.com"
  },
};

const ownerSlice = createSlice({
  name: 'currentOwner',
  initialState,
  reducers: {
    getOwner: (state, action) => {
      state.owner = action.payload;

    },
  },
});

export const { getOwner } = ownerSlice.actions;

export default ownerSlice.reducer;