import React, { FC, CSSProperties, ChangeEvent, ReactElement } from 'react';
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

const Input: FC<Props> = ({ label, value, ...props }: Props): ReactElement => {
  return (
    <>
      {label ? <FieldLabel value={label} /> : null}
      <InputStyled {...props} value={value || ''} />
    </>
  );
};

export default Input;
