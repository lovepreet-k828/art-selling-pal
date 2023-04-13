import { configureStore } from "@reduxjs/toolkit";
import artReducer from './features/art';
import userReducer from './features/user';
import ownerReducer from './features/owners';

export const store = configureStore(
    {
        reducer: {
            currentArt: artReducer,
            currentUser: userReducer,
            currentOwner: ownerReducer,
        },
    }
)