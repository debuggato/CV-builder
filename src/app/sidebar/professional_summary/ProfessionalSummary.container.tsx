import React, { Component, ReactNode } from 'react'
import { connect } from 'react-redux'

import i18n from '../../../i18n'

import { Container } from './ProfessionalSummary.style'
import mapDispatchToProps from './duck/dispatch'
import Input from '../../../components/input/Input.view'
import Title from '../../../components/Title.view'

type Props = {
  currentStep?: number,
  sendJobDescriptionToStore: (arg0: string) => void
}

type State = {
  value: string
}

class ProfessionalSummary extends Component<Props, State> {

  state = {
    value: ''
  }

  onDescriptionChange = (value: string): void => {
    this.props.sendJobDescriptionToStore(value)

    this.setState({
      value: value
    })
  }

  render(): ReactNode {

    if (this.props.currentStep !== 2) {
      return null;
    }

    return (
      <Container>
        <Title>{ i18n.t('professional_summary') }</Title>
        <Input
          type="textarea"
          onChange={ this.onDescriptionChange }
          text={ this.state.value }
        />
      </Container>
    )
  }
}

export default connect(null, mapDispatchToProps)(ProfessionalSummary)
