import React, { FC } from 'react';
import styled from 'styled-components';

import colors from '../styles/color.style';

const Label = styled.span`
  color: ${colors.red};
  font-weight: 600;
  position: relative;
  top: 35px;
  left: 153px;
`;

const ErrorLabel: FC = props => {
  return <Label></Label>;
};

export default ErrorLabel;
