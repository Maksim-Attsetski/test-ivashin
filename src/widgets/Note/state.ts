import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INote } from './types';
import { Storage } from 'shared';

interface IState {
  notes: INote[];
}

const initialState: IState = {
  notes: Storage.getItem<INote[]>('notes') ?? [],
};

const setNotes = (state: IState, notes: INote[]): void => {
  state.notes = notes;
  Storage.setItem('notes', state.notes);
};

const noteSlice = createSlice({
  name: 'noteSlice',
  initialState,
  reducers: {
    setNotesAC: (state: IState, action: PayloadAction<INote[]>) => {
      setNotes(state, action.payload);
    },
    addNoteAC: (state: IState, action: PayloadAction<INote>) => {
      setNotes(state, [...state.notes, action.payload]);
    },
    editNoteAC: (state: IState, action: PayloadAction<INote>) => {
      setNotes(
        state,
        state.notes.map((note) =>
          note.id === action.payload.id ? { ...note, ...action.payload } : note
        )
      );
    },
    deleteNoteAC: (state: IState, action: PayloadAction<number>) => {
      setNotes(
        state,
        state.notes.filter((note) => note.id !== action.payload)
      );
    },
  },
});

export const noteReducer = noteSlice.reducer;
export const noteActions = noteSlice.actions;
