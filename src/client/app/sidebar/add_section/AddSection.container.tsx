import React, { Component, ReactNode } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import Title from '@components/Title.view';
import Courses from '../courses/Courses.container';
import { Container, Body, Wrapper } from './AddSection.style';

interface Props extends WithTranslation {
  currentStep: number;
}

interface State {
  showCourses: boolean;
  showHobbies: boolean;
  showCustomSection: boolean;
  showExtraActivities: boolean;
  showLanguages: boolean;
  showInternships: boolean;
  showReferences: boolean;
}

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
    const { currentStep, t } = this.props;

    if (currentStep !== 7) return null;

    const { showCourses } = this.state;

    return (
      <Container>
        <Title>{t('add.section')}</Title>
        {showCourses && <Courses />}
        <Body>
          <Wrapper>
            <label onClick={this.customSectionHandler}>{t('custom.section')}</label>
          </Wrapper>
          <Wrapper>
            <label onClick={this.coursesHandler}>{t('courses')}</label>
          </Wrapper>
          <Wrapper>
            <label onClick={this.internshipsHandler}>{t('internships')}</label>
          </Wrapper>
          <Wrapper>
            <label onClick={this.extraActivitiesHandler}>{t('extra.activities')}</label>
          </Wrapper>
          <Wrapper>
            <label onClick={this.hobbiesHandler}>{t('hobbies')}</label>
          </Wrapper>
          <Wrapper>
            <label onClick={this.languagesHandler}>{t('languages')}</label>
          </Wrapper>
          <Wrapper>
            <label onClick={this.referencesHandler}>{t('references')}</label>
          </Wrapper>
        </Body>
      </Container>
    );
  }
}

export default withTranslation()(AddSection);
