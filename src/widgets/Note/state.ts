import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INote } from './types';
import { Storage } from 'shared';

interface IState {
  notes: INote[];
  tags: string[];
}

const initialState: IState = {
  notes: Storage.getItem<INote[]>('notes') ?? [],
  tags: Storage.getItem<string[]>('tags') ?? [],
};

const setNotes = (state: IState, notes: INote[]): void => {
  state.notes = notes;
  Storage.setItem('notes', state.notes);
};

const setTags = (state: IState, tags: string[]): void => {
  state.tags = tags;
  Storage.setItem('tags', state.tags);
};

const noteSlice = createSlice({
  name: 'noteSlice',
  initialState,
  reducers: {
    setNotesAC: (state: IState, action: PayloadAction<INote[]>) => {
      setNotes(state, action.payload);
    },
    addNoteAC: (state: IState, action: PayloadAction<INote>) => {
      setNotes(state, [action.payload, ...state.notes]);
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
    setTagsAC: (state: IState, action: PayloadAction<string[]>) => {
      setTags(state, action.payload);
    },
    addTagAC: (state: IState, action: PayloadAction<string>) => {
      setTags(state, [action.payload, ...state.tags]);
    },
    deleteTagAC: (state: IState, action: PayloadAction<string>) => {
      setTags(
        state,
        state.tags.filter((tag) => tag !== action.payload)
      );
    },
  },
});

export const noteReducer = noteSlice.reducer;
export const noteActions = noteSlice.actions;
