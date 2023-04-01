import React, { FC, memo } from 'react';
import { CreateNoteForm, NoteList } from 'widgets/Note';

const Home: FC = () => {
  return (
    <div>
      <div className='container'>
        <br />
        <br />
        <h3>Notes:</h3>
        <br />
        <CreateNoteForm />
        <br />
        <NoteList />
      </div>
    </div>
  );
};

export default memo(Home);
