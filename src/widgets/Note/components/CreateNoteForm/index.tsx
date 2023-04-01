import React, { FC, FormEvent, memo, useState } from 'react';

import { Input } from 'UI';
import { INote, useNote } from 'widgets/Note';

import s from './CreateNoteForm.module.scss';

const CreateNoteForm: FC = () => {
  const [text, setText] = useState<string>('');
  const { onAddNote } = useNote();

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newNote: INote = {
      id: Math.random(),
      text,
      tags: text.match(/#\w+/g) ?? [],
      createdAt: Date.now(),
    };

    onAddNote(newNote);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <Input className={s.input} text={text} setText={setText} multiLines />
        <br />
        <button type='submit'>Click</button>
      </form>
    </div>
  );
};

export default memo(CreateNoteForm);
