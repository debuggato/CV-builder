import React, { Component, ReactNode } from 'react';
import { CSSProperties } from 'styled-components';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { withTranslation, WithTranslation } from 'react-i18next';
import IconView from '../../components/Icon.view';
import Button from '../../components/button';
import { Container, ActionBar, SectionWrapper } from './Sidebar.style';
import Details from '../../views/details/Details.container';
import Summary from '../../views/summary/Summary.container';
import Education from '../../views/education/Education.container';
import Employment from '../../views/employment/Employment.container';
import Skills from '../../views/skills/Skills.container';
import Links from '../../views/links/Links.container';
import Header from '../../views/header/Header.container';
import AddSection from '../../views/add_section/AddSection.container';

type State = {
	currentStep: number;
	sectionToShow: number;
}

class Sidebar extends Component<WithTranslation, State> {
	state = {
		currentStep: 1,
		sectionToShow: 7,
	};

	onNext = (): void => {
		const { sectionToShow, currentStep } = this.state;
		let step: number = currentStep;

		step = currentStep === sectionToShow ? sectionToShow : currentStep + 1;

		this.setState({
			currentStep: step,
		});
	};

	onPrev = (): void => {
		const { currentStep } = this.state;

		let step: number = currentStep;

		step = currentStep <= 1 ? step = 1 : step - 1;

		this.setState({
			currentStep: step,
		});
	};

	public render(): ReactNode {
		const { currentStep, sectionToShow } = this.state;
		const { t } = this.props;

		const arrowNext: CSSProperties = {
			marginLeft: '10px',
		};

		const arrowPrev: CSSProperties = {
			marginRight: '10px',
		};

		return (
			<Container>
				<Header />
				<SectionWrapper>
					<Details currentStep={currentStep} />
					<Summary currentStep={currentStep} />
					<Employment currentStep={currentStep} />
					<Education currentStep={currentStep} />
					<Skills currentStep={currentStep} />
					<Links currentStep={currentStep} />
					<AddSection currentStep={currentStep} />
				</SectionWrapper>
				<ActionBar>
					{currentStep !== 1 &&
						<Button onClick={this.onPrev} secondary>
							<IconView icon={faArrowLeft} style={arrowPrev} />
							{t('prev')}
						</Button>
					}

					{currentStep !== sectionToShow &&
						<Button onClick={this.onNext} primary>
							{t('next')}
							<IconView icon={faArrowRight} style={arrowNext} />
						</Button>
					}
				</ActionBar>
			</Container>
		);
	}
}

export default withTranslation()(Sidebar);
