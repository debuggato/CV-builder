import styled from 'styled-components';

import colors from '../../styles/color.style';

interface Props {
  expand: boolean;
}

export const Container = styled.section<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  position: fixed;
  right: 0;
  height: 100vh;
  background: ${({ expand }) => expand ? 'inherit' : `${colors.lightGrey}`};
`;

export const Page = styled.div<Props>`
  background: ${colors.white};
  box-sizing: border-box;
  width: 100%;
  border-radius: 5px;
  ${({ expand }) => !expand && `
  width: 500px;
  height: 600px;
  padding: 15px;
  `};
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  width: 100%;
`;
