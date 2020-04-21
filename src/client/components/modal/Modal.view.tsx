import React, { FC, ReactElement, ReactNode, SyntheticEvent } from 'react';

import { Wrapper, Card, Header, Close, Title } from './Modal.style';

interface Props {
  children: ReactNode;
  title?: string;
  header?: boolean;
  onClick?: (arg0: SyntheticEvent) => void;
}

const Modal: FC<Props> = ({ children, title, header, onClick }: Props): ReactElement => {
  return (
    <Wrapper>
      <Card>
        {header &&
          <Header>
            {title && <Title>{title}</Title>}
            <Close onClick={onClick}>✕</Close>
          </Header>
        }
        {children}
      </Card>
    </Wrapper>
  );
};

export default Modal;