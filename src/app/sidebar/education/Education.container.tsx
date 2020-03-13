import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import i18n from '../../../i18n';

import Button from 'components/buttons/Button.view';
import Title from 'components/Title.view';
import Subtitle from 'components/Subtitle.view';
import Accordion from 'components/accordion/Accordion.view';
import ErrorBoundary from 'components/ErrorBoundary';

import { Container } from './Education.style';
import EducationView from '../education/Education.view';
import mapDispatchToProps from './duck/dispatch';

interface State {
  id: number;
};

interface OwnProps {
  currentStep: number;
  addEducation: (arg0: number, arg1: any) => void;
}

type Props = OwnProps & ReduxState;

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

    const item = items.map((index: any) => {
      return (
        <Accordion key={index}>
          <EducationView id={index} />
        </Accordion>
      )
    });

    return (
      <ErrorBoundary>
        <Container>
          <Title>{i18n.t('add_education')}</Title>
          <Subtitle>{i18n.t('education_subtitle')}</Subtitle>
          {item}
          <Button type="button" isLink={true} onClick={this.addEducationItem} color="primary">
            {i18n.t('add_education')}
          </Button>
        </Container>
      </ErrorBoundary>
    );
  }
}

interface ReduxState {
  items: any;
}

const mapStateToProps = (state: any) => {
  let keys = Object.keys(state.education);

  return {
    items: keys
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Education);
