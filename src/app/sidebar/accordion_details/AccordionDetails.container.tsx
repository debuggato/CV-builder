import React, { Component, ChangeEvent } from 'react'

import i18n from '../../../i18n'

import Icon from '../../../components/Icon.view'
import EmploymentView from '../employment_history/Employment.view'
import EducationView from '../education/Education.view'
import ExternalLinksView from '../external_links/ExternalLinks.view'
import CoursesView from '../courses/Courses.view'
import SkillsView from '../skills/Skills.view'

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
  isOpen: boolean,
  dates: string | null
}

type Props = {
  id?: number,
  context: string
}

class AccordionDetails extends Component<Props, State> {

  state = {
    text: '',
    title: i18n.t("not_specified"),
    isOpen: false,
    dates: ''
  }

  onChangeDescription = (value: any): void => {
    this.setState({
      text: value
    })
  }

  onClickAccordion = (): void => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  onTitleSectionChange = (e: ChangeEvent<HTMLInputElement>): void => {

    let value = e.target.value

    this.setState({
      title: value
    })
  }

  render() {

    const { text, isOpen, title, dates } = this.state
    const { context } = this.props
    let renderBody = null

    switch (context) {
      case 'employment':
        renderBody = <EmploymentView
                        text={ text }
                        onChangeDescription={ this.onChangeDescription }
                        onTitleSectionChange={ this.onTitleSectionChange }
                      />
        break
      case 'education':
        renderBody = <EducationView
                        text={ text }
                        onChangeDescription={ this.onChangeDescription }
                        onTitleSectionChange={ this.onTitleSectionChange }
                      />
        break
      case 'external_links':
        renderBody = <ExternalLinksView
                        onTitleSectionChange={ this.onTitleSectionChange }
                      />
        break
      case 'courses':
        renderBody = <CoursesView
                        onTitleSectionChange={ this.onTitleSectionChange }
                      />
        break
      case 'skills':
        renderBody = <SkillsView
                        onTitleSectionChange={ this.onTitleSectionChange }
                      />
        break
    }

    return (
      <Container key={ this.props.id }>
        <Header onClick={ this.onClickAccordion }>
          <Title>
            { title }
            <Icon icon={ isOpen ? 'arrow-dropup' : 'arrow-dropdown' } />
          </Title>
          <Dates>{ dates }</Dates>
        </Header>
        <Body isVisible={ isOpen }>
          { renderBody }
        </Body>
      </Container>
    )
  }
}

export default AccordionDetails
