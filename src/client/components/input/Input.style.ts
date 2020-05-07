import styled from 'styled-components';
import sizes from '@styles/sizes';
import colors from '@styles/colors';

const InputStyled = styled.input`
  display: block;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  background-clip: border-box;
  border: 1px solid ${colors.border};
  font-size: ${sizes.paragraph};
  border-radius: .5rem;
  box-sizing: border-box;
  width: 100%;

  &:focus {
    color: #495057;
    outline: 0;
  }
`;

export default InputStyled;
