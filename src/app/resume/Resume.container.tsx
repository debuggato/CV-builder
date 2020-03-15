import React, { Component, ReactNode } from 'react';

import { Container, Page } from './Resume.style';
import DaVinci from '../templates/davinci/DaVinci.view';
import Topbar from '../topbar/Topbar.container';

class ResumeContainer extends Component {
  public render(): ReactNode {
    return (
      <Container>
        <Topbar></Topbar>
        <Page>
          <DaVinci />
        </Page>
      </Container>
    );
  }
}

export default ResumeContainer;
