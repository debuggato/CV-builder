import React, { Component } from 'react'

import { Wrapper, Action } from './Sidebar.style'
import Header from './header/Header.container'
import PersonalDetails from './personal_details/PersonalDetails.container'
import ProfessionalSummary from './professional_summary/ProfessionalSummary.container'
import Education from './education/Education.container'
import EmploymentHistory from './employment_history/EmploymentHistory.container';
import Button from '../../components/buttons/Button.view'

interface State {
  currentStep: number
}

export default class Sidebar extends Component<{}, State> {
  state = {
    currentStep: 1
  }

  onNext = (): void => {
    let currentStep = this.state.currentStep;

    if (currentStep >= 2) {
      currentStep = 3;
    } else {
      currentStep = currentStep + 1;
    }
    
    this.setState({
      currentStep: currentStep
    });
  }

  onPrev = (): void => {
    let currentStep = this.state.currentStep;

    if (currentStep <= 1) {
      currentStep = 1;
    } else {
      currentStep = currentStep - 1;
    }
    
    this.setState({
      currentStep: currentStep
    });
  }

  render() {

    const { currentStep } = this.state

    return (
      <Wrapper>
        <Header />
        <PersonalDetails currentStep={ currentStep } />
        <ProfessionalSummary currentStep={ currentStep } />
        <EmploymentHistory currentStep={ currentStep } />
        <Education currentStep={ currentStep } />
        <Action>
          <Button
            onClick={ this.onPrev }
            label="Prev"
          />
          <Button
            onClick={ this.onNext }
            label="Next"
          />
        </Action>
      </Wrapper>
    )
  }
}
