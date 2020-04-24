import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import colors from '@styles/color.style';

const Label = styled.label`
  color: ${colors.greyLight};
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: 14px;
`;

interface Props {
  value: string | undefined;
}

const FieldLabel: FC<Props> = ({ value }: Props): ReactElement => {
  return <Label>{value}</Label>;
};

export default FieldLabel;
