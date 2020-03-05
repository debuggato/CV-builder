import React, { Component, ReactNode } from 'react';
import { CSSProperties } from 'styled-components';

import i18n from '../../i18n';

import Button from '../../components/buttons/Button.view';
import Icon from '../../components/Icon.view';
import { Container, ActionBar } from './Sidebar.style';
import Header from './header/Header.container';
import PersonalDetails from './personal_details/PersonalDetails.container';
import ProfessionalSummary from './professional_summary/ProfessionalSummary.container';
import Education from './education/Education.container';
import EmploymentHistory from './employment_history/Employment.container';
import Skills from './skills/Skills.container';
import ExternalLinks from './external_links/ExternalLinks.container';
import AddSection from './add_section/AddSection.container';

type State = {
  currentStep: number;
  sectionToShow: number;
};

export default class Sidebar extends Component<{}, State> {
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
        <PersonalDetails currentStep={currentStep} />
        <ProfessionalSummary currentStep={currentStep} />
        <EmploymentHistory currentStep={currentStep} />
        <Education currentStep={currentStep} />
        <Skills currentStep={currentStep} />
        <ExternalLinks currentStep={currentStep} />
        <AddSection currentStep={currentStep} />
        <ActionBar>
          {renderPrevBtn} {renderNextBtn}
        </ActionBar>
      </Container>
    );
  }
}
