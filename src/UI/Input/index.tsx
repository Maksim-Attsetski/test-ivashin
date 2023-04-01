import React, {
  DetailedHTMLProps,
  Dispatch,
  FC,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SetStateAction,
  memo,
} from 'react';

import s from './Input.module.scss';

interface IProps {
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  textAreaProps?: DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
  className?: string;
  setText: Dispatch<SetStateAction<string>>;
  text: string;
  multiLines?: boolean;
}

const Input: FC<IProps> = ({
  setText,
  text,
  className = '',
  inputProps = {},
  textAreaProps = {},
  multiLines = false,
}) => {
  return (
    <div>
      {multiLines ? (
        <textarea
          {...textAreaProps}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={[s.textarea, s.input, className].join(' ')}
        ></textarea>
      ) : (
        <input
          {...inputProps}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={[s.input, className].join(' ')}
        />
      )}
    </div>
  );
};

export default memo(Input);
