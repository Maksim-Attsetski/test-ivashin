import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { noteReducer } from 'widgets/Note';

const rootReducer = combineReducers({
  notes: noteReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
