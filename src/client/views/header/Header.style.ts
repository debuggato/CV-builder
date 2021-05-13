import styled from 'styled-components';
import Input from '../../components/input';
import sizes from '../../styles/sizes';

export const InputTitle = styled(Input)`
  border: 0;
  font-size: ${sizes.h3};
  font-weight: 700;
  text-align: center;
  text-transform: capitalize;
  width: 50%;
  height: 40px;
  margin-bottom: 10px;
`;

