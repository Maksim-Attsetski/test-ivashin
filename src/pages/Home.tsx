import { Title } from 'UI';
import React, { FC, memo } from 'react';
import { CreateNoteForm, NoteList } from 'widgets/Note';

const Home: FC = () => {
  return (
    <div>
      <div className='container'>
        <br />
        <br />
        <Title text='Create the most useful notes!' />
        <br />
        <CreateNoteForm />
        <br />
        <hr />
        <br />
        <NoteList />
      </div>
    </div>
  );
};

export default memo(Home);
