import { configureStore } from "@reduxjs/toolkit";
import { FeedBackReducer } from "../Slices/FeedBackSlice";


export const store = configureStore({
    reducer: {
        feedbacks: FeedBackReducer,
    }
})