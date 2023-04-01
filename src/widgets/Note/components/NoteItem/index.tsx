import React, { FC, memo } from 'react';
import { INote } from 'widgets/Note';

import s from './NoteItem.module.scss';

interface IProps {
  note: INote;
}

const NoteItem: FC<IProps> = ({ note }) => {
  return (
    <div className={s.note}>
      <div>{note.text}</div>
      <div>{note.createdAt}</div>
    </div>
  );
};

export default memo(NoteItem);
