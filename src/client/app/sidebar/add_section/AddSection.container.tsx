import React, { Component, ReactNode } from 'react';

import trans from '@client/i18n';

import Title from '@components/Title.view';
import Courses from '../courses/Courses.container';

import { Container, Body, Wrapper } from './AddSection.style';

interface Props {
  currentStep: number;
};

interface State {
  showCourses: boolean;
  showHobbies: boolean;
  showCustomSection: boolean;
  showExtraActivities: boolean;
  showLanguages: boolean;
  showInternships: boolean;
  showReferences: boolean;
};

class AddSection extends Component<Props, State> {
  state = {
    showCourses: false,
    showHobbies: false,
    showCustomSection: false,
    showExtraActivities: false,
    showLanguages: false,
    showInternships: false,
    showReferences: false,
  };

  coursesHandler = (): void => {
    this.setState({
      showCourses: !this.state.showCourses,
    });
  };

  hobbiesHandler = (): void => {
    this.setState({
      showHobbies: !this.state.showHobbies,
    });
  };

  languagesHandler = (): void => {
    this.setState({
      showLanguages: !this.state.showLanguages,
    });
  };

  extraActivitiesHandler = (): void => {
    this.setState({
      showExtraActivities: !this.state.showExtraActivities,
    });
  };

  internshipsHandler = (): void => {
    this.setState({
      showInternships: !this.state.showInternships,
    });
  };

  referencesHandler = (): void => {
    this.setState({
      showReferences: !this.state.showReferences,
    });
  };

  customSectionHandler = (): void => {
    this.setState({
      showCustomSection: !this.state.showCustomSection,
    });
  };

  public render(): ReactNode {
    const { currentStep } = this.props;

    if (currentStep !== 7) return null;

    const { showCourses } = this.state;

    return (
      <Container>
        <Title>{trans.t('add_section')}</Title>
        {showCourses && <Courses />}
        <Body>
          <Wrapper>
            <label onClick={this.customSectionHandler}>{trans.t('custom_section')}</label>
          </Wrapper>
          <Wrapper>
            <label onClick={this.coursesHandler}>{trans.t('courses')}</label>
          </Wrapper>
          <Wrapper>
            <label onClick={this.internshipsHandler}>{trans.t('internships')}</label>
          </Wrapper>
          <Wrapper>
            <label onClick={this.extraActivitiesHandler}>{trans.t('extra_activities')}</label>
          </Wrapper>
          <Wrapper>
            <label onClick={this.hobbiesHandler}>{trans.t('hobbies')}</label>
          </Wrapper>
          <Wrapper>
            <label onClick={this.languagesHandler}>{trans.t('languages')}</label>
          </Wrapper>
          <Wrapper>
            <label onClick={this.referencesHandler}>{trans.t('references')}</label>
          </Wrapper>
        </Body>
      </Container>
    );
  }
}

export default AddSection;