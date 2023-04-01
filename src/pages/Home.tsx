import React, { FC, memo } from 'react';
import { NoteList } from 'widgets/Note';

const Home: FC = () => {
  return (
    <div>
      <h3>Notes:</h3>
      <br />
      <NoteList />
    </div>
  );
};

export default memo(Home);
