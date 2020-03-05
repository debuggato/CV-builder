import styled from 'styled-components';

import colors from '../../styles/color.style';

export const Wrapper = styled.header`
  background: ${colors.white};
  width: 100%;
  height: 40px;
  position: absolute;
  left: 0;
  padding: 10px;

  button:nth-child(1) {
    margin-left: 0;
  }

  button:nth-child(2) {
    float: right;
    margin-right: 20px;
  }
`;
