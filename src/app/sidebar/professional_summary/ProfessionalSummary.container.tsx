import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container } from './ProfessionalSummary.style'
import mapDispatchToProps from './duck/dispatch'
import Textarea from '../../../components/textarea/Textarea.view'
import Title from '../../../components/Title.view'

interface Props {
  currentStep?: number
}

class ProfessionalSummary extends Component<Props, {}> {

  render() {

    if (this.props.currentStep !== 2) {
      return null;
    }

    return (
      <Container>
        <Title>Professional Summary</Title>
        <Textarea
          isVisible={ true }
          withLabel={ true }
          label="Description"
        />
      </Container>
    )
  }
}

export default connect(null, mapDispatchToProps)(ProfessionalSummary)
