import React, { Component, ReactNode } from 'react';

import i18n from '../../../i18n';
import { addBlock } from '../../utils/utils';

import Title from '../../../components/Title.view';
import Button from '../../../components/buttons/Button.view';
import Accordion from '../../../components/accordion/Accordion.view';

import { Container } from './Courses.style';
import CoursesView from '../courses/Courses.view'

type State = {
  rows: number[];
  clicks: number;
};

interface Props {
  isVisible: boolean;
}

export default class Courses extends Component<Props, State> {
  state = {
    rows: [0],
    clicks: 0,
  };

  coursesStructureData = {

  }

  addCourseBlock = () => {
    addBlock(this, this.coursesStructureData);
  };

  renderBlock = () => {

  };

  public render(): ReactNode {
    return (
      <Container isVisible={this.props.isVisible}>
        <Title>{i18n.t('courses_title')}</Title>
        {this.renderBlock()}
        <Button type="button" isLink={true} onClick={this.addCourseBlock} color="primary">
          {i18n.t('add_course')}
        </Button>
      </Container>
    );
  }
}
