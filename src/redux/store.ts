import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import histogramSliceReducer from "./features/histogram/histogramSlice";
import authSliceReducer from "./features/authentication/authentication";
import profileSliceReducer from "./features/profile/profile";
import docSliceReducer from "./features/documents/docSlice";
import { scanApi } from "./api";

const rootReducer = combineReducers({
    histogram: histogramSliceReducer,
    documents: docSliceReducer,
    auth: authSliceReducer,
    profile: profileSliceReducer,
    [scanApi.reducerPath]: scanApi.reducer,
  });

const persistConfig = {
    key: "root",
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)



const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }).concat(scanApi.middleware)
})

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store