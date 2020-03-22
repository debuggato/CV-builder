import React, { FC, ReactNode, ReactElement } from 'react';

import Btn from './Button.style';

export interface Props {
  onClick: () => void;
  color?: string;
  type: 'submit' | 'button' | 'reset';
  isLink?: boolean;
  disabled?: boolean;
  children?: ReactNode;
}

const Button: FC<Props> = ({ ...props }: Props): ReactElement => {
  return (
    <Btn {...props}>{props.children}</Btn>
  );
};

export default Button;
