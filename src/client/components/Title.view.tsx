import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';

interface Props {
	children: string;
}

export const Title = styled.h4`
  margin: 0;
  margin-bottom: 15px;
  border-bottom: 1px solid ${colors.border};
  padding-bottom: 3px;
`;

const TitleView: FC<Props> = ({ children }: Props): ReactElement => {
	return <Title>{children}</Title>;
};

export default TitleView;
