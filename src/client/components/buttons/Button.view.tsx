import React, { FC, ReactNode, ReactElement } from 'react';
import Btn from './Button.style';

export interface Props {
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  type?: 'submit' | 'button' | 'reset';
  linkStyle?: boolean;
  disabled?: boolean;
  children?: ReactNode;
}

const Button: FC<Props> = ({ type, children, ...rest }: Props): ReactElement => {
  return (
    <Btn type={type || 'button'} {...rest}>{children}</Btn>
  );
};

export default Button;
