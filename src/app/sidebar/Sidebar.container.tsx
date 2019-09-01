import React, { Component, ReactNode } from 'react'
import { CSSProperties } from 'styled-components'

import Button from '../../components/buttons/Button.view'
import Icon from '../../components/Icon.view'
import { Wrapper, Action } from './Sidebar.style'
import Header from './header/Header.container'
import PersonalDetails from './personal_details/PersonalDetails.container'
import ProfessionalSummary from './professional_summary/ProfessionalSummary.container'
import Education from './education/Education.container'
import EmploymentHistory from './employment_history/Employment.container'
import Skills from './skills/Skills.container'
import ExternalLinks from './external_links/ExternalLinks.container'

type State = {
  currentStep: number,
  sectionToShow: number
}

export default class Sidebar extends Component<{}, State> {

  state = {
    currentStep: 1,
    sectionToShow: 6
  }

  arrowNext: CSSProperties = {
    marginLeft: '10px'
  }
  
  arrowPrev: CSSProperties = {
    marginRight: '10px'
  }

  onNext = (): void => {
    let currentStep = this.state.currentStep;

    if (currentStep === this.state.sectionToShow) {
      currentStep = this.state.sectionToShow
    } else {
      currentStep = currentStep + 1
    }
    
    this.setState({
      currentStep: currentStep
    });
  }

  onPrev = (): void => {
    let currentStep = this.state.currentStep

    if (currentStep <= 1) {
      currentStep = 1
    } else {
      currentStep = currentStep - 1
    }
    
    this.setState({
      currentStep: currentStep
    });
  }

  render() {

    const { currentStep } = this.state
    let
      renderPrevBtn: ReactNode = null,
      renderNextBtn: ReactNode = null

    if (currentStep !== 1) {
      renderPrevBtn = <Button onClick={ this.onPrev } typology="button" secondary>
                        <Icon icon="arrow-back" style={ this.arrowPrev } />
                        { 'Prev' }
                      </Button>
    }

    if (currentStep !== 6) {
      renderNextBtn = <Button onClick={ this.onNext } typology="button" primary>
                        { 'Next' }
                        <Icon icon="arrow-forward" style={ this.arrowNext } />
                      </Button>
    }

    return (
      <Wrapper>
        <Header />
        <PersonalDetails currentStep={ currentStep } />
        <ProfessionalSummary currentStep={ currentStep } />
        <EmploymentHistory currentStep={ currentStep } />
        <Education currentStep={ currentStep } />
        <Skills currentStep={ currentStep } />
        <ExternalLinks currentStep={ currentStep } />
        <Action>{ renderPrevBtn } { renderNextBtn }</Action>
      </Wrapper>
    )
  }
}
