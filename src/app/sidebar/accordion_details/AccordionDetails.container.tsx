import React, { Component } from 'react'

import i18n from '../../../i18n'

import Icon from '../../../components/Icon.view'
import EmploymentView from '../employment_history/Employment.view'
import EducationView from '../education/Education.view'

import {
  Container,
  Header,
  Title,
  Dates,
  Body
} from './AccordionDetails.style'

type State = {
  text: string,
  title: string,
  isOpen: boolean
}

type Props = {
  id: number,
  context: string
}

class AccordionDetails extends Component<Props, State> {

  state = {
    text: '',
    title: i18n.t("not_specified"),
    isOpen: false
  }

  onChangeDescription = (value: any): void => {
    this.setState({
      text: value
    })
  }

  accordionHandler = (): void => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  onTitleSectionChange = (e: any): void => {

    let value = e.target.value

    this.setState({
      title: value
    })
  }

  render() {

    const { text, isOpen, title } = this.state
    let renderBody = null

    if (this.props.context === 'employment') {
      renderBody = <EmploymentView
                      text={ text }
                      onChangeDescription={ this.onChangeDescription }
                      onTitleSectionChange={ this.onTitleSectionChange }
                    />
    } else {
      renderBody = <EducationView
                      text={ text }
                      onChangeDescription={ this.onChangeDescription }
                      onTitleSectionChange={ this.onTitleSectionChange }
                    />
    }

    return (
      <Container key={ this.props.id }>
        <Header onClick={this.accordionHandler}>
          <Title>
            { title }
            <Icon icon={ isOpen ? 'arrow-dropup' : 'arrow-dropdown' } />
          </Title>
          <Dates>Dal 25/6 al 5/12</Dates>
        </Header>
        <Body isVisible={ isOpen }>
          { renderBody }
        </Body>
      </Container>
    )
  }
}

export default AccordionDetails
