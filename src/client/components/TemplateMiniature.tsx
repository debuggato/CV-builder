import React, { FC, ReactElement, ReactNode, SyntheticEvent } from 'react';
import styled from 'styled-components';

import colors from '@styles/color.style';

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
  border: 1px solid ${colors.lightGrey};
  border-radius: 5px;
  float: left;
  cursor: pointer;
  transition: ease .3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export default TemplateMiniature;
