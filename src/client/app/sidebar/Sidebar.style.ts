import styled from 'styled-components';
import colors from '@styles/colors';

export const Container = styled.aside`
  background-color: ${colors.white};
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
`;

export const SectionWrapper = styled.div`
  padding-bottom: 90px;
`;

export const ActionBar = styled.div`
  background: ${colors.white};
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-top: 1px solid ${colors.border};
  width: 50%;
`;
