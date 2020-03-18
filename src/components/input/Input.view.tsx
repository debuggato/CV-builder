import React, { FC, CSSProperties, ChangeEvent, ReactElement } from 'react';

import Textarea from './Textarea.container';
import InputStyled from './Input.style';
import FieldLabel from '../FieldLabel.view';

interface Props {
  type: string;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
  placeholder?: string;
  value?: string;
  readOnly?: boolean;
  id?: string;
  text?: string;
  name?: string;
  ref?: any;
  className?: string;
}

const Input: FC<Props> = ({ type, label, ...props }: Props): ReactElement => {
  return (
    <>
      {label ? <FieldLabel value={label} /> : null}
      {type === 'textarea' ? <Textarea /> : <InputStyled {...props} />}
    </>
  );
};

export default Input;
