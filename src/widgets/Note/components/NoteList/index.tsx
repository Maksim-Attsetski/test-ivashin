import React, { FC, memo } from 'react';
import { useNote } from 'widgets/Note';
import NoteItem from '../NoteItem';

import s from './NoteList.module.scss';

const NoteList: FC = () => {
  const { notes } = useNote();
  return (
    <div>
      <div className={s.noteContainer}>
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default memo(NoteList);
