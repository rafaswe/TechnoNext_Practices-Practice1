import { configureStore } from "@reduxjs/toolkit";
import userInfoSlice from "./reducers/UserInfoSlice";
export const store = configureStore({
    reducer: {
        userInform: userInfoSlice,
    },
});