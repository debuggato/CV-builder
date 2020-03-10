import React, { Component, ReactNode, ChangeEvent } from 'react';
import { connect } from 'react-redux';

import i18n from '../../../i18n';

import Title from 'components/Title.view';
import Subtitle from 'components/Subtitle.view';
import Button from 'components/buttons/Button.view';
import Accordion from 'components/accordion/Accordion.view';
import ErrorBoundary from 'components/ErrorBoundary';

import mapDispatchToProps from './duck/dispatch';

import { Container } from './Employment.style';
import EmploymentView from './Employment.view';

interface Props {
  currentStep: number;
  sendJobTitleToStore: (arg0: number, arg1: string) => void;
  sendEmployerToStore: (arg0: string) => void;
  sendCityToStore: (arg0: string) => void;
  sendDescriptionToStore: (arg0: string) => void;
  addEmployment: (arg0: number, arg1: any) => void;
  items: any;
  title: string;
}

type State = {
  id: number;
};

class EmploymentHistory extends Component<Props, State> {
  state = {
    id: 0,
  };

  employmentInitialData = {
    jobTitle: '',
    employer: '',
    city: '',
    startDate: '',
    endDate: '',
    description: ''
  }

  onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let name: string = e.target.name;
    let value: string = e.target.value;

    switch (name) {
      case 'jobTitle':
        this.props.sendJobTitleToStore(this.state.id, value);
        break;
      case 'employer':
        this.props.sendEmployerToStore(value);
        break;
      case 'city':
        this.props.sendCityToStore(value);
        break;
      case 'description':
        this.props.sendDescriptionToStore(value);
        break;
      default:
        break;
    }
  };

  addEmploymentItem = (): void => {
    this.setState({
      id: this.state.id + 1
    });
    this.props.addEmployment(this.state.id, this.employmentInitialData);
  };

  public render(): ReactNode {
    const { currentStep, items } = this.props;

    if (currentStep !== 3) {
      return null;
    }

    const item = items.map((index: any) => {
      return (
        <Accordion key={index} id={index}>
          <EmploymentView onChange={this.onChange} />
        </Accordion>
      )
    });

    return (
      <ErrorBoundary>
        <Container>
          <Title>{i18n.t('employment_history')}</Title>
          <Subtitle>{i18n.t('employment_history_subtitle')}</Subtitle>
          {item}
          <Button type="button" isLink={true} onClick={this.addEmploymentItem} color="primary">
            {i18n.t('add_employment')}
          </Button>
        </Container>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = (state: any) => {
  let keys = Object.keys(state.employmentHistory);

  const { jobTitle } = state.employmentHistory;
  return {
    items: keys,
    title: jobTitle
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmploymentHistory);
