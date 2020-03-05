import React, { Component, ReactNode } from 'react';

import { Container, Page } from './Resume.style';
import TemplateOneView from '../templates/TemplateOne.view';
import Topbar from '../topbar/Topbar.container';

class ResumeContainer extends Component {
  public render(): ReactNode {
    return (
      <Container>
        <Topbar></Topbar>
        <Page>
          <TemplateOneView />
        </Page>
      </Container>
    );
  }
}

export default ResumeContainer;
