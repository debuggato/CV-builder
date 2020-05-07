import styled from 'styled-components';
import colors from '@styles/colors';
import sizes from '@styles/sizes';
import { Props } from './Button.view';

const Btn = styled.button<Props>`
  outline: none;
  ${({ linkStyle, primary, secondary }) =>
    linkStyle ? `
    border: 0;
    background-color: transparent;
    cursor: pointer;
    color: ${colors.paragraph};
    font-size: ${sizes.paragraph};

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
    border-radius: .5rem;
  `}
`;

export default Btn;
