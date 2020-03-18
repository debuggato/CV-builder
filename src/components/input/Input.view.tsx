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
  defaultValue?: string;
  value?: string;
  readOnly?: boolean;
  id?: string;
  text?: string;
  name?: string;
  ref?: any;
  className?: string;
}

const Input: FC<Props> = (props: Props): ReactElement => {
  const {
    label,
    type,
    onChange,
    onBlur,
    style,
    defaultValue,
    readOnly,
    id,
    value,
    onFocus,
    name,
    ref,
    className
  } = props;

  return (
    <>
      {label ? <FieldLabel value={label} /> : null}
      {type === 'textarea' ? (
        <Textarea />
      ) : (
          <InputStyled
            type={type}
            placeholder={label}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            style={style}
            defaultValue={defaultValue}
            value={value}
            readOnly={readOnly}
            id={id}
            name={name}
            ref={ref}
            className={className}
          />
        )}
    </>
  );
};

export default Input;
