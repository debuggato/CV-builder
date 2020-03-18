import React, { Component, ReactNode } from 'react';
import { CSSProperties } from 'styled-components';

import i18n from '../../i18n';

import Button from 'components/buttons/Button.view';
import Icon from 'components/Icon.view';
import { Container, ActionBar, SectionWrapper } from './Sidebar.style';
import PersonalDetails from './personal_details/PersonalDetails.container';
import ProfessionalSummary from './summary/Summary.container';
import Education from './education/Education.container';
import Employment from './employment/Employment.container';
import Skills from './skills/Skills.container';
import Links from './links/Links.container';
import Header from '../sidebar/header/Header.container';
import AddSection from './add_section/AddSection.container';

interface State {
  currentStep: number;
  sectionToShow: number;
};

class Sidebar extends Component<{}, State> {
  state = {
    currentStep: 1,
    sectionToShow: 7,
  };

  arrowNext: CSSProperties = {
    marginLeft: '10px',
  };

  arrowPrev: CSSProperties = {
    marginRight: '10px',
  };

  onNext = (): void => {
    const { sectionToShow, currentStep } = this.state;
    let step: number = currentStep;

    step = currentStep === sectionToShow ? sectionToShow : currentStep + 1;

    this.setState({
      currentStep: step,
    });
  };

  onPrev = (): void => {
    const { currentStep } = this.state;

    let step: number = currentStep;

    step = currentStep <= 1 ? step = 1 : step - 1;

    this.setState({
      currentStep: step,
    });
  };

  public render(): ReactNode {
    const { currentStep, sectionToShow } = this.state;

    let renderPrevBtn: ReactNode = null,
      renderNextBtn: ReactNode = null;

    if (currentStep !== 1) {
      renderPrevBtn = (
        <Button onClick={this.onPrev} type="button" color="secondary">
          <Icon icon="arrow-back" style={this.arrowPrev} />
          {i18n.t('prev')}
        </Button>
      );
    }

    if (currentStep !== sectionToShow) {
      renderNextBtn = (
        <Button onClick={this.onNext} type="button" color="primary">
          {i18n.t('next')}
          <Icon icon="arrow-forward" style={this.arrowNext} />
        </Button>
      );
    }

    return (
      <Container>
        <Header />
        <SectionWrapper>
          <PersonalDetails currentStep={currentStep} />
          <ProfessionalSummary currentStep={currentStep} />
          <Employment currentStep={currentStep} />
          <Education currentStep={currentStep} />
          <Skills currentStep={currentStep} />
          <Links currentStep={currentStep} />
          <AddSection currentStep={currentStep} />
        </SectionWrapper>
        <ActionBar>
          {renderPrevBtn} {renderNextBtn}
        </ActionBar>
      </Container>
    );
  }
}

export default Sidebar;
