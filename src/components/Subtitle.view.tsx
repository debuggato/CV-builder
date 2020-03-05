import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  children: string;
}

export const Subtitle = styled.p``;

const SubtitleView: FC<Props> = props => {
  return <Subtitle>{props.children}</Subtitle>;
};

export default SubtitleView;
