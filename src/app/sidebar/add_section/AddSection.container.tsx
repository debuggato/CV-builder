import React, { Component } from 'react'

import i18n from '../../../i18n'

import Title from '../../../components/Title.view'
import Courses from '../courses/Courses.container'

import {
  Container,
  Body,
  Wrapper
} from './AddSection.style'

type Props = {
  currentStep: number
}

type State = {
  showCourses: boolean
}

class AddSection extends Component<Props, State> {

  state = {
    showCourses: false
  }

  coursesHandler = (): void => {
    this.setState({
      showCourses: !this.state.showCourses
    })
  }

  render() {

    if (this.props.currentStep !== 7) {
      return null;
    }

    const { showCourses } = this.state

    return (
      <Container>
        <Title>{ i18n.t("add_section") }</Title>
        <Courses isVisible={ showCourses }/>
        <Body>
          <Wrapper>
            <label>Custom section</label>
          </Wrapper>
          <Wrapper>
            <label onClick={ this.coursesHandler }>{ i18n.t("courses_title") }</label>
          </Wrapper>
          <Wrapper>
            <label>Extra-curricula activities</label>
          </Wrapper>
          <Wrapper>
            <label>Internships</label>
          </Wrapper>
          <Wrapper>
            <label>Hobbies</label>
          </Wrapper>
          <Wrapper>
            <label>Languages</label>
          </Wrapper>
          <Wrapper>
            <label>References</label>
          </Wrapper>
        </Body>
      </Container>
    )
  }
}

export default AddSection
