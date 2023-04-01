import React, { FC, memo } from 'react';
import s from './Title.module.scss';

interface IProps {
  text: string;
  className?: string;
  isSub?: boolean;
}

const Title: FC<IProps> = ({ text, className = '', isSub = false }) => {
  return (
    <div className={[s.title, isSub && s.sub, className].join(' ')}>{text}</div>
  );
};

export default memo(Title);
