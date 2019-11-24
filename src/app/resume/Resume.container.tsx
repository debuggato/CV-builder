import React, { Component, ReactNode } from 'react';

import { Container, Page, Bar } from './Resume.style';
import TemplateOneView from '../templates/TemplateOne.view';

class ResumeContainer extends Component {
  render(): ReactNode {
    return (
      <Container>
        <Bar></Bar>
        <Page>
          <TemplateOneView />
        </Page>
      </Container>
    );
  }
}

export default ResumeContainer;
