import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { FeedBackReducer } from "../Slices/FeedBackSlice";


const feedbackPersistConfig = {
    key: 'feedbacks',
    storage,
    whitelist: ["Theme"],
};


const persistedFeedbacksReducer = persistReducer(feedbackPersistConfig, FeedBackReducer);

const rootReducer = combineReducers({
    feedbacks: persistedFeedbacksReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
