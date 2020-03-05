import styled from 'styled-components';

import colors from '../../styles/color.style';
import breakpoints from '../../app/utils/breakpoints';

interface Props {
  isOpened: boolean;
}

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${(props: Props) => (props.isOpened ? 'flex' : 'none')};
`;

export const Card = styled.div`
  min-height: 400px;
  min-width: 400px;
  background-color: ${colors.white};
  opacity: 1;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  background: ${colors.primary};
  border-bottom: 1px solid ${colors.grey};
`;
