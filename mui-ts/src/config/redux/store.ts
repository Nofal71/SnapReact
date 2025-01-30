import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { FeedBackReducer } from "./slices/feedbackSlice";

// Type for the Root State
export interface RootState {
  feedbacks: ReturnType<typeof FeedBackReducer>;
}

const feedbackPersistConfig = {
  key: 'feedbacks',
  storage,
  whitelist: ["Theme"], // only persist Theme
};

// Persisted feedback reducer
const persistedFeedbacksReducer = persistReducer(feedbackPersistConfig, FeedBackReducer);

// Combining all reducers
const rootReducer = combineReducers({
  feedbacks: persistedFeedbacksReducer,
});

// Creating the store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // disable serializable checks for redux-persist
    }),
});

// Creating the persistor
export const persistor = persistStore(store);
