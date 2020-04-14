import styled from 'styled-components';

import colors from '@styles/color.style';
import { Props } from './Button.view';

const Btn = styled.button<Props>`
  ${({ linkStyle, primary, secondary }) =>
    linkStyle ? `
    border: 0;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    color: ${colors.black};

    &:hover {
      text-decoration: underline;
    }
    ` : `
    ${primary && `background-color: ${colors.primary}`};
    ${secondary && `background-color: ${colors.secondary}`};
    color: ${colors.white};
    cursor: pointer;
    user-select: none;
    border: 1px solid transparent;
    padding: 10px;
  `}
`;

export default Btn;
