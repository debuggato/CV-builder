import styled from 'styled-components';
import colors from '@styles/color.style';

export const Wrapper = styled.div`
  display: flex;
  margin: 10px;

  input {
    visibility: hidden;
  }

  label {
    height: 40px;
    margin: 22px 0;
    color: ${colors.greyLight};
  }
`;

export const UploadLabel = styled.span`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const IconContainer = styled.div`
  border: 1px dashed ${colors.greyLight};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 100px;
  margin-right: 15px;
  font-size: 50px;
`;
