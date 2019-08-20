import React, { Component } from 'react'

import { Wrapper } from './Sidebar.style'
import PersonalDetails from './personal_details/PersonalDetails.container'
import ProfessionalSummary from './professional_summary/ProfessionalSummary.container'
import Education from './education/Education.container'

export default class Sidebar extends Component {
  state = {}

  render() {
    return (
      <Wrapper>
        <PersonalDetails />
        <ProfessionalSummary />
        <Education />
      </Wrapper>
    )
  }
}
