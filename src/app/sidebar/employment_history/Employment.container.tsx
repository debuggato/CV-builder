import React, { Component, ReactNode, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import i18n from '../../../i18n';

import Title from 'components/Title.view';
import Subtitle from 'components/Subtitle.view';
import Button from 'components/buttons/Button.view';
import Details from '../accordion_details/AccordionDetails.container';
import ErrorBoundary from 'components/ErrorBoundary';

import mapDispatchToProps from './duck/dispatch';

import { Container } from './Employment.style';

interface Props {
  currentStep: number;
  sendJobTitleToStore: (arg0: string) => void;
  sendEmployerToStore: (arg0: string) => void;
  sendCityToStore: (arg0: string) => void;
  sendDescriptionToStore: (arg0: string) => void;
  addEmployment: (arg0: number, arg1: any) => void;
  item: any;
}

type State = {
  clicks: number;
};

class EmploymentHistory extends Component<Props, State> {
  state = {
    clicks: 0,
  };

  employmentInitialData = {
    jobTitle: '',
    employer: '',
    city: '',
    startDate: '',
    endDate: '',
    description: ''
  }

  renderBlock = (): any => {

    return this.props.item.map((el: any) => {
      console.log(el)
      return <Details context="employment" key={el} onChange={this.onChange} />;
    });
  };

  onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let name: string = e.target.name,
      value: string = e.target.value;

    switch (name) {
      case 'jobTitle':
        this.props.sendJobTitleToStore(value);
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
      clicks: this.state.clicks + 1
    });
    this.props.addEmployment(this.state.clicks, this.employmentInitialData);
  };

  public render(): ReactNode {
    if (this.props.currentStep !== 3) {
      return null;
    }

    return (
      <ErrorBoundary>
        <Container>
          <Title>{i18n.t('employment_history')}</Title>
          <Subtitle>{i18n.t('employment_history_subtitle')}</Subtitle>
          {this.renderBlock()}
          <Button type="button" isLink={true} onClick={this.addEmploymentItem} color="primary">
            {i18n.t('add_employment')}
          </Button>
        </Container>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    item: Object.keys(state.employmentHistory)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmploymentHistory);
