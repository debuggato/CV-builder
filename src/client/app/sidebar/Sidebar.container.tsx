import React, { Component, ReactNode } from 'react';
import { CSSProperties } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import i18n from '../../i18n';

import Button from '@components/buttons/Button.view';
import { Container, ActionBar, SectionWrapper } from './Sidebar.style';
import Details from './details/Details.container';
import ProfessionalSummary from './summary/Summary.container';
import Education from './education/Education.container';
import Employment from './employment/Employment.container';
import Skills from './skills/Skills.container';
import Links from './links/Links.container';
import Header from './header/Header.container';
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

    const arrowNext: CSSProperties = {
      marginLeft: '10px',
    };

    const arrowPrev: CSSProperties = {
      marginRight: '10px',
    };

    return (
      <Container>
        <Header />
        <SectionWrapper>
          <Details currentStep={currentStep} />
          <ProfessionalSummary currentStep={currentStep} />
          <Employment currentStep={currentStep} />
          <Education currentStep={currentStep} />
          <Skills currentStep={currentStep} />
          <Links currentStep={currentStep} />
          <AddSection currentStep={currentStep} />
        </SectionWrapper>
        <ActionBar>
          {currentStep !== 1 &&
            <Button onClick={this.onPrev} type="button" secondary>
              <FontAwesomeIcon icon={faArrowLeft} style={arrowPrev} />
              {i18n.t('prev')}
            </Button>
          }

          {currentStep !== sectionToShow &&
            <Button onClick={this.onNext} type="button" primary>
              {i18n.t('next')}
              <FontAwesomeIcon icon={faArrowRight} style={arrowNext} />
            </Button>
          }
        </ActionBar>
      </Container>
    );
  }
}

export default Sidebar;
