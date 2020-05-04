import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');

  body {
    font-family: 'Noto Sans KR', sans-serif;
    color: #333;
  }

  .quill .ql-container {
    min-height: 100px;
  }

  h1, h2, h3, h4, p {
    font-weight: normal;
  }
`;
