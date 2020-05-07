import styled from 'styled-components';
import colors from '@styles/colors';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  position: fixed;
  right: 0;
  height: 100vh;
  background-color: ${colors.greyLight};
`;

export const Page = styled.div`
  background: ${colors.white};
  box-sizing: border-box;
  border-radius: 5px;
  width: 595px;
  height: 842px;
  border: 1px solid ${colors.border};
`;