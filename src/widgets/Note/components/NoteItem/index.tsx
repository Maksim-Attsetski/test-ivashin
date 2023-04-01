import React, { FC, memo, useState } from 'react';
import { INote, useNote } from 'widgets/Note';

import s from './NoteItem.module.scss';
import { DateHelper } from 'shared';
import { Button, Input } from 'UI';

interface IProps {
  note: INote;
}

const NoteItem: FC<IProps> = ({ note }) => {
  const { onEditNote, onDeleteNote } = useNote();

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(note.text);

  const onClickEdit = () => {
    if (!isEdit) {
      setIsEdit(true);
    } else {
      onEditNote({
        ...note,
        text: editText,
        tags: editText.match(/#\w+/g) ?? [],
      });
      setIsEdit(false);
    }
  };

  return (
    <div className={s.note}>
      {isEdit ? (
        <Input text={editText} setText={setEditText} multiLines />
      ) : (
        <div>{note.text}</div>
      )}
      <br />
      <Button onClick={onClickEdit}>{isEdit ? 'Save' : 'Edit'}</Button>
      <Button onClick={() => onDeleteNote(note.id)}>Delete</Button>
      <br />
      <div>{DateHelper.getTimeString(note.createdAt)}</div>
    </div>
  );
};

export default memo(NoteItem);
