import { createGlobalStyle } from 'styled-components';
import colors from '@styles/colors';
import sizes from '@styles/sizes'

export const GlobalStyle = createGlobalStyle`
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

  h1 {
    font-size: ${sizes.h1};
  }

  h2 {
    font-size: ${sizes.h2};
  }

  h3 {
    font-size: ${sizes.h3};
  }

  h4 {
    font-size: ${sizes.h4};
  }

  h5 {
    font-size: ${sizes.h5};
  }

  h6 {
    font-size: ${sizes.h6};
  }

  p {
    font-size: ${sizes.paragraph};
    color: ${colors.paragraph};
  }
`;
