import styled from 'styled-components';

import colors from '../../styles/color.style';

export const Container = styled.main`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 70%;
  display: flex;
  align-content: center;
  justify-content: center;
  background: ${colors.lightGrey};
`;

export const Page = styled.div`
  background: ${colors.white};
  width: 595px;
  height: 842px;
  margin: 15px;
  box-sizing: border-box;
  padding: 15px;
  position: relative;
  top: 60px;
`;
