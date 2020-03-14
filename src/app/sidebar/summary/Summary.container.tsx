import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';

import i18n from '../../../i18n';

import { Container } from './Summary.style';
import mapDispatchToProps from './duck/Summary.dispatch';
import Input from 'components/input/Input.view';
import Title from 'components/Title.view';
import { ReduxProps } from './duck/Summary.model';

interface OwnProps {
  currentStep: number;
};

type Props = OwnProps & ReduxProps;

class Summary extends Component<Props, {}> {

  public render(): ReactNode {
    const { currentStep, setSummary } = this.props;

    if (currentStep !== 2) return null;

    return (
      <Container>
        <Title>{i18n.t('summary_title')}</Title>
        <Input
          type="textarea"
          onChange={e => setSummary(e.target.value)}
        />
      </Container>
    );
  }
}

export default connect(null, mapDispatchToProps)(Summary);
