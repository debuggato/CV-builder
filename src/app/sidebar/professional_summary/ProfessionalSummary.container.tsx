import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container } from './ProfessionalSummary.style'
import mapDispatchToProps from './duck/dispatch'
import Textarea from '../../../components/textarea/Textarea.view'
import Title from '../../../components/Title.view'

interface Props {
  currentStep?: number,
  sendJobDescriptionToStore: (arg0: string) => void
}

interface State {
  value: string
}

class ProfessionalSummary extends Component<Props, State> {

  state = {
    value: ''
  }

  onDescriptionChange = (value: any): void => {
    this.props.sendJobDescriptionToStore(value)

    this.setState({
      value: value
    })
  }

  render() {

    if (this.props.currentStep !== 2) {
      return null;
    }

    return (
      <Container>
        <Title>Professional Summary</Title>
        <Textarea
          withLabel={ true }
          label="Description"
          name="description"
          onChange={ this.onDescriptionChange }
          text={ this.state.value }
        />
      </Container>
    )
  }
}

export default connect(null, mapDispatchToProps)(ProfessionalSummary)
