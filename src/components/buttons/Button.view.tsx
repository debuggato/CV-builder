import React, { FC } from 'react';

import Btn from './Button.style';
import Props from './Button.model';

const Button: FC<Props> = props => {
  return (
    <Btn type={props.type} isLink={props.isLink} onClick={props.onClick} color={props.color}>
      {props.children}
    </Btn>
  );
};

export default Button;
