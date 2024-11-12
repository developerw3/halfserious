import { configureStore } from '@reduxjs/toolkit';
import { swApi } from '@/api/sw-api';
import { setupListeners } from '@reduxjs/toolkit/query';
import reducer from '@/reducers';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Creating the Redux store using configureStore function
export const store = configureStore({
	reducer: reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swApi.middleware),
	devTools: process.env.NODE_ENV !== 'production',
});

// Setting up listeners for the Redux Query to automatically refetch data and handle caching
setupListeners(store.dispatch);

// Exporting the RootState type that represents the entire state of the Redux store
export type RootState = ReturnType<typeof store.getState>;

// Exporting the AppDispatch type, which represents the dispatch function from the store
export type AppDispatch = typeof store.dispatch;

// Creating a typed version of the dispatch hook, which is used in components for dispatching actions
export const useAppDispatch: () => AppDispatch = useDispatch;

// Creating a typed version of the selector hook, which is used to select pieces of state from the Redux store
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const dispatch = store.dispatch;
