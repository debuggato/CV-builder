import styled from 'styled-components';

import colors from '../../styles/color.style';
import { Props } from './Button.view';

const Btn = styled.button<Props>`
  background-color: ${({ color }) => color === 'primary' ? `${colors.primary}` : `${colors.secondary}`};
  color: ${({ color }) => color === 'primary' ? `${colors.primary}` : `${colors.secondary}`};

  /* if button  */
  ${({ isLink }) =>
    !isLink && `
    color: white;
    cursor: pointer;
    user-select: none;
    border: 1px solid transparent;
    padding: 10px;
    color: ${colors.white};
  `}

  ${({ isLink }) =>
    isLink && `
    border: 0;
    background-color: transparent;
    cursor: pointer;
    outline: none;

    &:hover {
      text-decoration: underline;
    }
  `}
`;

export default Btn;
