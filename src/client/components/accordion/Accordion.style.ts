import styled from 'styled-components';

import colors from '@styles/color.style';

export const Container = styled.div`
  padding: 10px;
  border: 1px solid ${colors.greyLight};
  height: auto;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  margin: 10px 0;
`;

export const Header = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Dates = styled.div`
  color: ${colors.greyLight};
  font-weight: 500;
`;
