import React, { ReactNode, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import i18n from '../../../i18n';
import { addCourse } from './duck/Courses.actions';

import Title from 'components/Title.view';
import Button from 'components/buttons/Button.view';
import Accordion from 'components/accordion/Accordion.view';

import { Container } from './Courses.style';
import CoursesView from './Courses.view';

interface DispatchProps {
  addCourse: (arg0: number, arg1: any) => void;
}

interface StateProps {
  items: any;
}

type Props = StateProps & DispatchProps;

interface State {
  id: number;
};

class Courses extends PureComponent<Props, State> {
  state = {
    id: 0
  };

  coursesInitialData = {
    course: '',
    institution: '',
    dateFrom: '',
    dateTo: ''
  }

  addCourseItem = (): void => {
    this.setState({
      id: this.state.id + 1
    });
    this.props.addCourse(this.state.id, this.coursesInitialData);
  };

  public render(): ReactNode {
    const { items } = this.props;

    const item = items.map((index: any) => {
      return (
        <Accordion key={index}>
          <CoursesView id={index} />
        </Accordion>
      )
    });

    return (
      <Container>
        <Title>{i18n.t('courses_title')}</Title>
        {item}
        <Button type="button" linkStyle={true} onClick={this.addCourseItem} primary>
          {i18n.t('add_course')}
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => {
  let keys = Object.keys(state.courses);

  return {
    items: keys
  }
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addCourse: (id, value) => {
    dispatch(addCourse(id, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
