import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/UserSlice.js";

export const store = configureStore({
    reducer: {
        users: usersReducer

    }
})