import React, { Component } from 'react'
import { connect } from 'react-redux'
import i18n from '../../../i18n'

import Title from '../../../components/Title.view'
import Subtitle from '../../../components/Subtitle.view'
import Button from '../../../components/buttons/Button.view'
import Details from '../accordion_details/AccordionDetails.container'
import { addBlock } from '../../functions'

import mapDispatchToProps from './duck/dispatch'

import { Container } from './Employment.style'

type Props = {
  currentStep: number
}

type State = {
  rows: number[],
  clicks: number
}

class EmploymentHistory extends Component<Props, State> {

  state = {
    rows: [ 0 ],
    clicks: 0
  }

  renderBlock = (): JSX.Element[] => {
    return this.state.rows.map((index, el) => {
      return <Details context="employment" key={ el } id={ el } />
    })
  }

  addEmploymentBlock = () => {
    addBlock(this)
  }

  render() {

    if (this.props.currentStep !== 3) {
      return null;
    }

    return (
      <Container>
        <Title>{ i18n.t('employment_history') }</Title>
        <Subtitle>{ i18n.t('employment_history_subtitle') }</Subtitle>
        { this.renderBlock() }
        <Button typology="link" onClick={ this.addEmploymentBlock }>
        { i18n.t('add_employment') }
        </Button>
      </Container>
    )
  }
}

export default connect(null, mapDispatchToProps)(EmploymentHistory)
