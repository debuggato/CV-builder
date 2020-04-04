import styled from 'styled-components';

import colors from '@styles/color.style';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  position: fixed;
  right: 0;
  height: 100vh;
  background-color: ${colors.lightGrey};
`;

export const Page = styled.div`
  background: ${colors.white};
  box-sizing: border-box;
  border-radius: 5px;
  width: 500px;
  height: 600px;
  padding: 15px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  width: 100%;
`;
