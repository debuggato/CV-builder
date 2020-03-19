import React, { FC, ReactElement, ReactNode, SyntheticEvent } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  onClick: (e: SyntheticEvent) => void;
  id: string;
}

const TemplateMiniature: FC<Props> = ({ children, onClick, id }: Props): ReactElement => {
  return (
    <Wrapper id={id} onClick={onClick}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 215px;
  height: 240px;
  margin: 10px;
  box-shadow: 1px 1px 10px black;
  float: left;
  cursor: pointer;
`;

export default TemplateMiniature;
