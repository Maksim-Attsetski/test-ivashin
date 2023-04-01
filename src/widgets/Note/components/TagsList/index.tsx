import React, { Dispatch, FC, SetStateAction, memo, useState } from 'react';

import { useNote } from 'widgets/Note';
import { Button, Input, Title } from 'UI';

import s from './TagsList.module.scss';

interface IProps {
  tags: string[];
  activeTags: string[];
  setActiveTags: Dispatch<SetStateAction<string[]>>;
  onClickTag: (tag: string) => void;
}

const TagsList: FC<IProps> = ({
  tags,
  activeTags,
  setActiveTags,
  onClickTag,
}) => {
  const { notes, otherTags, onEditNote, onDeleteTag, onAddTag } = useNote();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>('');

  const onEditTags = () => {
    setActiveTags([]);
    setEditText('');
    setIsEdit((prev) => !prev);
  };

  const onChangeEditText = (value: string) => {
    const updatedValue = value.replaceAll(' ', '_');
    setEditText(updatedValue);
  };
  const onCreateTag = () => {
    if (editText[0] !== '#') {
      onAddTag('#' + editText);
    } else {
      onAddTag(editText);
    }
  };

  const onClickDeleteTag = (tag: string) => {
    if (otherTags.includes(editText)) {
      onDeleteTag(tag);
    }

    if (tags.includes(tag)) {
      const newNotes = notes.filter((note) => note.text.includes(tag));

      const updatedNotes = newNotes.map((note) => {
        const tagWithoutSymbols = tag.replace('#', '');
        const regexp = new RegExp(`#(${tagWithoutSymbols})`, 'gim');
        return {
          ...note,
          text: note.text.replaceAll(regexp, '$1'),
          tags: note.tags.filter((el) => el !== tag),
        };
      });

      updatedNotes.forEach((note) => {
        onEditNote(note);
      });
    }
  };

  return (
    <div>
      <div className={s.tagList}>
        <Title text='Tags: ' isSub />
        <Button onClick={onEditTags}>{isEdit ? 'Save' : 'Add/Delete'}</Button>
      </div>
      {isEdit && (
        <form onSubmit={onCreateTag}>
          <br />
          <Input
            text={editText}
            setText={onChangeEditText}
            inputProps={{ placeholder: 'Input new #tag...' }}
          />
        </form>
      )}
      <br />
      <div className={s.tagList}>
        {tags.map((tag) => {
          const isActive = activeTags.includes(tag);
          return (
            <div
              key={tag}
              className={[s.tag, isActive && s.activeTag].join(' ')}
              onClick={() => onClickTag(tag)}
            >
              {tag}{' '}
              <span onClick={() => onClickDeleteTag(tag)}>
                {isEdit && !isActive && '❌'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(TagsList);
