import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container } from './Skills.style'
import mapDispatchToProps from './duck/dispatch'
import Title from '../../../components/Title.view'

type Props = {
  currentStep?: number,
  sendJobDescriptionToStore: (arg0: string) => void
}

type State = {
  value: string
}

class Skills extends Component<Props, State> {

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

    if (this.props.currentStep !== 5) {
      return null;
    }

    return (
      <Container>
        <Title>Skills</Title>
        
      </Container>
    )
  }
}

export default connect(null, mapDispatchToProps)(Skills)
