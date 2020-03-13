import React, { Component, ReactNode, ChangeEvent } from 'react';
import { connect } from 'react-redux';

import i18n from '../../../i18n';

import Title from 'components/Title.view';
import Subtitle from 'components/Subtitle.view';
import Button from 'components/buttons/Button.view';
import Accordion from 'components/accordion/Accordion.view';
import ErrorBoundary from 'components/ErrorBoundary';
import mapDispatchToProps from './duck/dispatch';

import EmploymentView from './Employment.view';

interface OwnProps {
  currentStep: number;
  title: string;
  addEmployment: (arg0: number, arg1: any) => void;
}

type Props = OwnProps & ReduxState;

interface State {
  id: number;
};

class EmploymentHistory extends Component<Props, State> {
  state = {
    id: 0,
  };

  employmentInitialData = {
    jobTitle: null,
    employer: null,
    city: null,
    startDate: new Date(),
    endDate: new Date(),
    description: null
  }

  addEmploymentItem = (): void => {
    this.setState({
      id: this.state.id + 1
    });
    this.props.addEmployment(this.state.id, this.employmentInitialData);
  };

  public render(): ReactNode {
    const { currentStep, items } = this.props;

    if (currentStep !== 3) return false;

    const item = items.map((index: any) => {
      return (
        <Accordion key={index}>
          <EmploymentView id={index} />
        </Accordion>
      )
    });

    return (
      <ErrorBoundary>
        <div>
          <Title>{i18n.t('employment_history')}</Title>
          <Subtitle>{i18n.t('employment_history_subtitle')}</Subtitle>
          {item}
          <Button type="button" isLink={true} onClick={this.addEmploymentItem} color="primary">
            {i18n.t('add_employment')}
          </Button>
        </div>
      </ErrorBoundary>
    );
  }
}

interface ReduxState {
  items: any;
  title: string;
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
