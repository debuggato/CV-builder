import styled from 'styled-components';
import colors from '@styles/colors';

export const Container = styled.div`
  padding: 10px;
  border: 1px solid ${colors.border};
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
  color: ${colors.headers};
`;

export const Title = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Dates = styled.div`
  color: ${colors.greyLight};
  font-weight: 500;
`;
