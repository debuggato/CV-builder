import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import trans from '@client/i18n';

import AddLinkLabel from '@components/AddLinkLabel.view';
import Title from '@components/Title.view';
import Subtitle from '@components/Subtitle.view';
import Accordion from '@components/accordion/Accordion.view';
import ErrorBoundary from '@components/ErrorBoundary';

import { Container } from './Education.style';
import EducationView from './Education.view';
import { addEducation } from './duck/Education.actions';

interface OwnProps {
  currentStep: number;
}

interface DispatchProps {
  addEducation: (arg0: number, arg1: any) => void;
}

interface StateProps {
  items: any;
}

type Props = OwnProps & DispatchProps & StateProps;

interface State {
  id: number;
};

class Education extends Component<Props, State> {
  state = {
    id: 0
  };

  educationInitialData = {
    school: null,
    degree: null,
    city: null,
    description: null
  }

  addEducationItem = (): void => {
    this.setState({
      id: this.state.id + 1
    });
    this.props.addEducation(this.state.id, this.educationInitialData);
  };

  public render(): ReactNode {
    const { currentStep, items } = this.props;

    if (currentStep !== 4) return null;

    const item = items.map((el: any) => {
      return (
        <Accordion key={el[0]} title={el[1].degree}>
          <EducationView id={el[0]} />
        </Accordion>
      )
    });

    return (
      <ErrorBoundary>
        <Container>
          <Title>{trans.t('add_education')}</Title>
          <Subtitle>{trans.t('education_subtitle')}</Subtitle>
          {item}
          <AddLinkLabel onClick={this.addEducationItem}>
            {trans.t('add_education')}
          </AddLinkLabel>
        </Container>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = (state: any) => ({
  items: Object.entries(state.education),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addEducation: (id, value) => {
    dispatch(addEducation(id, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Education);
