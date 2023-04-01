import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  memo,
} from 'react';

import s from './Button.module.scss';

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: FC<IProps> = ({ children, className = '', ...props }) => {
  return (
    <button {...props} className={[s.button, className].join(' ')}>
      {children}
    </button>
  );
};

export default memo(Button);
