import React, { FC, memo } from 'react';
import { INote } from 'widgets/Note';

import s from './NoteItem.module.scss';
import { DateHelper } from 'shared';

interface IProps {
  note: INote;
}

const NoteItem: FC<IProps> = ({ note }) => {
  return (
    <div className={s.note}>
      <div>{note.text}</div>
      <br />
      <div>{DateHelper.getTimeString(note.createdAt)}</div>
    </div>
  );
};

export default memo(NoteItem);
