import styled from 'styled-components';

import colors from '../../styles/color.style';

import Props from './Button.model';

const Btn = styled.button`
  background-color: ${(props: Props) =>
    props.color === 'primary' ? `${colors.primary}` : `${colors.secondary}`};
  color: ${(props: Props) =>
    props.color === 'primary' ? `${colors.primary}` : `${colors.secondary}`};

  /* if button  */
  ${(props: Props) =>
    props.typology !== 'link' &&
    `
    color: white;
    cursor: pointer;
    user-select: none;
    border: 1px solid transparent;
    padding: 10px;
    color: ${colors.white};
  `}

  ${(props: Props) =>
    props.typology === 'link' &&
    `
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
