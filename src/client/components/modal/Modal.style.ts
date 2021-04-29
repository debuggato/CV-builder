import styled from 'styled-components';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  color: ${colors.white};
  font-size: 25px;
`;

export const Close = styled.div`
  color: ${colors.white};
  font-size: 30px;
  cursor: pointer;
`;

export const Card = styled.div`
  max-width: 65%;
  max-height: 75%;
  background-color: ${colors.white};
  opacity: 1;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  background: ${colors.primary};
  border-bottom: 1px solid ${colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
`;
