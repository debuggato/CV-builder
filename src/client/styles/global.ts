import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');

  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    line-height: 1.2;
  }

  .quill .ql-container {
    min-height: 100px;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-weight: normal;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${colors.headers};
  }

  p {
    color: ${colors.paragraph};
  }
`;
