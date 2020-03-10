import React, { Component, ReactNode } from 'react';

import i18n from '../../../i18n';

import Button from '../../../components/buttons/Button.view';
import Title from '../../../components/Title.view';
import Subtitle from '../../../components/Subtitle.view';
import Accordion from '../../../components/accordion/Accordion.view';

import { Container } from './Education.style';
import EducationView from '../education/Education.view';

type State = {
  rows: number[];
  clicks: number;
};

interface Props {
  currentStep: number;
}

class Education extends Component<Props, State> {
  state = {
    rows: [0],
    clicks: 0,
  };

  educationStructureData = {

  }

  addEducationBlock = () => {
    //addBlock(this, this.educationStructureData);
  };

  renderBlock = () => {

  };

  public render(): ReactNode {
    if (this.props.currentStep !== 4) {
      return null;
    }

    return (
      <Container>
        <Title>{i18n.t('add_education')}</Title>
        <Subtitle>{i18n.t('education_subtitle')}</Subtitle>
        {this.renderBlock()}
        <Button type="button" isLink={true} onClick={this.addEducationBlock} color="primary">
          {i18n.t('add_education')}
        </Button>
      </Container>
    );
  }
}

export default Education;
