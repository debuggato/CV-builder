import React, { Component, ReactNode } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { withTranslation, WithTranslation } from 'react-i18next';
import Button from '../../components/button';
import Title from '../../components/Title.view';
import IconView from '../../components/Icon.view';
import AdditionalDetails from './AdditionalDetails.view';
import MainDetails from './MainDetails.view';
import { Container, ButtonWrapper } from './Details.style';

interface State {
	isOpen: boolean;
}

interface OwnProps extends WithTranslation {
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
		const { currentStep, t } = this.props;

		if (currentStep !== 1) return null;

		const { isOpen } = this.state;

		return (
			<Container>
				<Title>{t('personal.details')}</Title>
				<MainDetails />
				<ButtonWrapper onClick={this.showAdditionalDetails}>
					<Button
						linkStyle
						primary
					>
						{t('edit.additional.details')}
					</Button>
					<IconView icon={isOpen ? faChevronUp : faChevronDown} />
				</ButtonWrapper>
				{isOpen &&
					<AdditionalDetails />
				}
			</Container>
		);
	}
}

export default withTranslation()(Details);
