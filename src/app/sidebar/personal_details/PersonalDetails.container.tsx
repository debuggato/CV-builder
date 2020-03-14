import React, { Component, ReactNode } from 'react';

import i18n from '../../../i18n';

import Button from 'components/buttons/Button.view';
import Title from 'components/Title.view';
import Icon from 'components/Icon.view';

import AdditionalDetails from './AdditionalDetails.view';
import MainDetails from './MainDetails.view';
import { Container } from './PersonalDetails.style';

interface State {
  isOpen: boolean;
};

interface OwnProps {
  currentStep: number;
}

class PersonalDetails extends Component<OwnProps, State> {
  state = {
    isOpen: false,
  };

  showAdditionalDetails = (): void => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  public render(): ReactNode {
    const { currentStep } = this.props;

    if (currentStep !== 1) return null;

    const { isOpen } = this.state;

    return (
      <Container>
        <Title>{i18n.t('personal_details')}</Title>
        <MainDetails />
        <Button
          type="button"
          isLink={true}
          onClick={this.showAdditionalDetails}
          color="primary"
        >
          {i18n.t('edit_additional_details')}
          <Icon icon={isOpen ? 'arrow-dropup' : 'arrow-dropdown'} />
        </Button>
        {isOpen &&
          <AdditionalDetails />
        }
      </Container>
    );
  }
}

export default PersonalDetails;
