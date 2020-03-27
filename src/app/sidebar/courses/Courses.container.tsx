import React, { Component, ReactNode } from 'react';

import i18n from '../../../i18n';

import Title from '../../../components/Title.view';
import Button from '../../../components/buttons/Button.view';

import { Container } from './Courses.style';
import CoursesView from './Courses.view';

interface State {
  rows: number[];
  clicks: number;
};

class Courses extends Component<{}, State> {
  state = {
    rows: [0],
    clicks: 0,
  };

  coursesStructureData = {

  }

  onClick() { }

  public render(): ReactNode {

    return (
      <Container>
        <Title>{i18n.t('courses_title')}</Title>
        <CoursesView />
        <Button type="button" isLink={true} onClick={this.onClick} color="primary">
          {i18n.t('add_course')}
        </Button>
      </Container>
    );
  }
}

export default Courses;
