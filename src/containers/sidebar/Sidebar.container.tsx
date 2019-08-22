import React, { Component } from 'react'

import { Wrapper } from './Sidebar.style'
import Header from './header/Header.container'
import PersonalDetails from './personal_details/PersonalDetails.container'
import ProfessionalSummary from './professional_summary/ProfessionalSummary.container'
import Education from './education/Education.container'
import EmploymentHistory from './employment_history/EmploymentHistory.container';

export default class Sidebar extends Component {
  state = {}

  render() {
    return (
      <Wrapper>
        <Header />
        <PersonalDetails />
        <ProfessionalSummary />
        <EmploymentHistory />
        <Education />
      </Wrapper>
    )
  }
}
