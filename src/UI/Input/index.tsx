import React, { DetailedHTMLProps, FC, InputHTMLAttributes, memo } from 'react';

import s from './Input.module.scss';

interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input: FC<IProps> = ({ className = '', ...props }) => {
  return (
    <div>
      <input {...props} className={[s.input, className].join(' ')} />
    </div>
  );
};

export default memo(Input);
