import styled from 'styled-components';

import colors from '../../styles/color.style';

export const Container = styled.div`
  margin: 10px;
`;

export const Wrapper = styled.div`
  display: flex;

  input {
    visibility: hidden;
  }

  label {
    height: 40px;
    margin: 22px 0;
    color: ${colors.lightGrey};
  }
`;

export const UploadLabel = styled.span`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const IconContainer = styled.div`
  border: 1px dashed ${colors.lightGrey};
  padding: 10px;
  margin-right: 15px;

  i {
    font-size: 90px;
  }
`;
