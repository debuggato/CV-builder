import React, { Component, ReactNode, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import i18n from '../../../i18n';

import Title from '../../../components/Title.view';
import Subtitle from '../../../components/Subtitle.view';
import Button from '../../../components/buttons/Button.view';
import Details from '../accordion_details/AccordionDetails.container';
import { addBlock } from '../../utils/functions';

import mapDispatchToProps from './duck/dispatch';

import { Container } from './Employment.style';

type Props = {
  currentStep: number;
  sendJobTitleToStore: (arg0: string) => void;
  sendEmployerToStore: (arg0: string) => void;
  sendCityToStore: (arg0: string) => void;
  sendDescriptionToStore: (arg0: string) => void;
};

type State = {
  rows: number[];
  clicks: number;
};

class EmploymentHistory extends Component<Props, State> {
  state = {
    rows: [0],
    clicks: 0,
  };

  renderBlock = (): JSX.Element[] => {
    return this.state.rows.map((index, el) => {
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

  addEmploymentBlock = (): void => {
    addBlock(this);
  };

  render(): ReactNode {
    if (this.props.currentStep !== 3) {
      return null;
    }

    return (
      <Container>
        <Title>{i18n.t('employment_history')}</Title>
        <Subtitle>{i18n.t('employment_history_subtitle')}</Subtitle>
        {this.renderBlock()}
        <Button typology="link" onClick={this.addEmploymentBlock} color="primary">
          {i18n.t('add_employment')}
        </Button>
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(EmploymentHistory);
