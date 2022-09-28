import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { bookReducer } from './book.slice';

export const rootStore = configureStore({
  reducer: {
    book: bookReducer
  }
});

export type RootState = ReturnType<typeof rootStore.getState>;

export type AppDispatch = typeof rootStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
