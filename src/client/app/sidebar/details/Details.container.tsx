import React, { Component, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import i18n from '../../../i18n';

import Button from '@components/buttons/Button.view';
import Title from '@components/Title.view';

import AdditionalDetails from './AdditionalDetails.view';
import MainDetails from './MainDetails.view';
import { Container, ButtonWrapper } from './Details.style';

interface State {
  isOpen: boolean;
};

interface OwnProps {
  currentStep: number;
}

class Details extends Component<OwnProps, State> {
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
        <ButtonWrapper onClick={this.showAdditionalDetails}>
          <Button
            type="button"
            linkStyle
            primary
          >
            {i18n.t('edit_additional_details')}
          </Button>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </ButtonWrapper>
        {isOpen &&
          <AdditionalDetails />
        }
      </Container>
    );
  }
}

export default Details;
