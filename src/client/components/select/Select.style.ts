import styled from 'styled-components';
import sizes from '../../styles/sizes';
import colors from '../../styles/colors';

export const Wrapper = styled.div`
  position: relative;
  width: 100px;
  display: flex;
  align-items: center;
  border: 1px solid ${colors.border};
`;

export const Select = styled.select`
  border: 0;
  padding: 10px;
  background-color: white;
  cursor: pointer;
  font-size: ${sizes.paragraph};
  height: 40px;
  outline: none;
  appearance: none;
`;
