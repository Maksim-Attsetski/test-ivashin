import React, { FC, memo, useMemo, useState } from 'react';
import { INote, useNote } from 'widgets/Note';
import NoteItem from '../NoteItem';

import s from './NoteList.module.scss';
import { Title } from 'UI';
import TagsList from '../TagsList';

const NoteList: FC = () => {
  const { notes, otherTags } = useNote();
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const tags: string[] = useMemo(() => {
    const uniqueTags: string[] = [];
    const allTags = notes.reduce(
      (prev: string[], cur: INote) => [...prev, ...cur.tags],
      otherTags
    );

    new Set(allTags).forEach((str) => {
      uniqueTags.push(str);
    });

    console.log('allTags', allTags);
    console.log('otherTags', otherTags);

    return uniqueTags;
  }, [notes, otherTags]);

  const filteredNotes = useMemo(
    () =>
      notes.filter((note) => activeTags.every((el) => note.text.includes(el))),
    [notes, activeTags]
  );

  const onClickTag = (tag: string) => {
    const isExist = activeTags.includes(tag);

    setActiveTags((prev) =>
      isExist ? prev.filter((el) => el !== tag) : [...prev, tag]
    );
  };

  return (
    <div>
      <TagsList
        activeTags={activeTags}
        setActiveTags={setActiveTags}
        onClickTag={onClickTag}
        tags={tags}
      />
      <br />
      <Title text='Notes: ' isSub />
      <br />
      <div className={s.noteContainer}>
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default memo(NoteList);
