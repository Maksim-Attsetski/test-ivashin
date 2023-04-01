import React, { FC, memo, useMemo, useState } from 'react';
import { INote, useNote } from 'widgets/Note';
import NoteItem from '../NoteItem';

import s from './NoteList.module.scss';
import { Title } from 'UI';

const NoteList: FC = () => {
  const { notes } = useNote();
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const tags: string[] = useMemo(() => {
    const uniqueTags: string[] = [];
    const allTags = notes.reduce(
      (prev: string[], cur: INote) => [...prev, ...cur.tags],
      []
    );

    new Set(allTags).forEach((str) => {
      uniqueTags.push(str);
    });

    return uniqueTags;
  }, [notes]);

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
      <div className={s.noteContainer}>
        <Title text='Tags: ' isSub />
        <br />
        {tags.map((tag) => (
          <div
            key={tag}
            className={[s.tag, activeTags.includes(tag) && s.activeTag].join(
              ' '
            )}
            onClick={() => onClickTag(tag)}
          >
            {tag}
          </div>
        ))}
      </div>
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
