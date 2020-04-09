import styled from 'styled-components';

import Input from '@components/input/Input.view';


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const InputTitle = styled(Input)`
  border: 0;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  text-transform: capitalize;
  width: 50%;
  height: 40px;
  margin-bottom: 10px;
`;

