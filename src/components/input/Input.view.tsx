import React, { FC } from 'react';

import Textarea from './Textarea.container';
import Props from './Input.model';
import Input from './Input.style';
import FieldLabel from '../FieldLabel.view';

const InputView: FC<Props> = props => {
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
    ref
  } = props;

  return (
    <>
      {label ? <FieldLabel value={label} /> : null}
      {type === 'textarea' ? (
        <Textarea />
      ) : (
          <Input
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
          />
        )}
    </>
  );
};

export default InputView;
