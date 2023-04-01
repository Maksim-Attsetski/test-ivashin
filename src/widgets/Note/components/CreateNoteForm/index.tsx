import React, { FC, FormEvent, memo, useState } from 'react';

import { Button, Input } from 'UI';
import { INote, useNote } from 'widgets/Note';

import s from './CreateNoteForm.module.scss';

const CreateNoteForm: FC = () => {
  const [text, setText] = useState<string>('');
  const { onAddNote } = useNote();

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.length === 0) return;

    const newNote: INote = {
      id: Math.random(),
      text,
      tags: text.match(/#\w+/g) ?? [],
      createdAt: Date.now(),
    };

    onAddNote(newNote);
    setText('');
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <Input className={s.input} text={text} setText={setText} multiLines />
        <br />
        <Button type='submit'>Add note</Button>
      </form>
    </div>
  );
};

export default memo(CreateNoteForm);
