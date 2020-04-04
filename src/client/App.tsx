import React, { ReactNode, PureComponent } from 'react';
import { Normalize } from 'styled-normalize';
import { connect } from 'react-redux';
import Resume from '@app/resume/Resume.container';
import Sidebar from '@app/sidebar/Sidebar.container';

import { GlobalStyle } from './styles/global.style';
import { Main } from './App.style';

interface StateProps {
  isPreview: boolean;
}

class App extends PureComponent<StateProps, {}> {
  render(): ReactNode {
    const { isPreview } = this.props;

    return (
      <>
        <Normalize />
        <GlobalStyle />
        <Main>
          {!isPreview &&
            <Sidebar />
          }
          <Resume />
        </Main>
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isPreview: state.generic.previewPdf
});

export default connect(mapStateToProps)(App);
