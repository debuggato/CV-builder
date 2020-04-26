import React, { ReactNode, PureComponent } from 'react';
import { Normalize } from 'styled-normalize';
import { withTranslation, WithTranslation } from 'react-i18next';
import Resume from '@app/resume/Resume.container';
import Sidebar from '@app/sidebar/Sidebar.container';
import { GlobalStyle } from './styles/global.style';
import { Main } from './App.style';

class App extends PureComponent<WithTranslation> {
  render(): ReactNode {
    return (
      <>
        <Normalize />
        <GlobalStyle />
        <Main>
          <Sidebar />
          <Resume />
        </Main>
      </>
    );
  }
}

export default withTranslation()(App);
