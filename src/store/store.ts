import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import searchReducer from './searchSlice';
import { apiSlice } from './apiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    search: searchReducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
