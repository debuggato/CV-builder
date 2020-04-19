import styled from 'styled-components';

import colors from '@styles/color.style';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader-fb-style {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .loader-fb-style div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: ${colors.greyDark};
    animation: loader-fb-style 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  .loader-fb-style div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  .loader-fb-style div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  .loader-fb-style div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
  @keyframes loader-fb-style {
    0% {
      top: 8px;
      height: 64px;
    }
    50%, 100% {
      top: 24px;
      height: 32px;
    }
  }
`;

export const Content = styled.div`
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 30%;
  height: 20%;
`;