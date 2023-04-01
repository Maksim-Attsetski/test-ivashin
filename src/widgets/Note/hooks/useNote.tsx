import { useActions, useTypedSelector } from 'hooks';
import { INote } from '../types';

// #NOTE
// in this hooks we create request to backend and use response for redux (state)

const useNote = () => {
  const { notes } = useTypedSelector((state) => state.notes);
  const { action } = useActions();

  const onAddNote = (newNote: INote): void => {
    // const response = NoteService.add(newNote); if we'll use backend
    action.addNoteAC(newNote);
  };

  const onEditNote = (newNote: INote): void => {
    action.editNoteAC(newNote);
  };

  const onDeleteNote = (id: number): void => {
    action.deleteNoteAC(id);
  };

  return {
    notes,
    onAddNote,
    onEditNote,
    onDeleteNote,
  };
};
export default useNote;
