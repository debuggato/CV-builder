import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import colors from '@styles/colors';
import sizes from '@styles/sizes';

const Label = styled.label`
  color: ${colors.label};
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: ${sizes.paragraph};
`;

interface Props {
  value: string | undefined;
}

const FieldLabel: FC<Props> = ({ value }: Props): ReactElement => {
  return <Label>{value}</Label>;
};

export default FieldLabel;
