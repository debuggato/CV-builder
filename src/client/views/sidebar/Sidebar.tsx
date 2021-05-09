import React, { ReactElement, FC, useState } from 'react';
import { CSSProperties } from 'styled-components';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import Icon from '../../components/Icon';
import Button from '../../components/button';
import Details from '../../views/details/Details.container';
import Summary from '../summary/Summary';
import Education from '../../views/education/Education.container';
import Employment from '../../views/employment/Employment.container';
import Skills from '../../views/skills/Skills.container';
import Links from '../../views/links/Links.container';
import Header from '../header/Header';
import AddSection from '../add_section/AddSection';
import './Sidebar.css';

const arrowNext: CSSProperties = {
	marginLeft: '10px',
};

const arrowPrev: CSSProperties = {
	marginRight: '10px',
};

const Sidebar: FC = (): ReactElement => {
	const [currentStep, setCurrentStep] = useState<number>(1);
	const sectionToShow = 7;
	const { t } = useTranslation();

	const onNext = (): void => {
		let step: number = currentStep;

		step = currentStep === sectionToShow ? sectionToShow : currentStep + 1;

		setCurrentStep(step)
	};

	const onPrev = (): void => {
		let step: number = currentStep;

		step = currentStep <= 1 ? step = 1 : step - 1;

		setCurrentStep(step);
	};

	return (
		<div className="container">
			<Header />
			<div className="wrapper">
				<Details currentStep={currentStep} />
				<Summary currentStep={currentStep} />
				<Employment currentStep={currentStep} />
				<Education currentStep={currentStep} />
				<Skills currentStep={currentStep} />
				<Links currentStep={currentStep} />
				<AddSection currentStep={currentStep} />
			</div>
			<div className="action-bar">
				{currentStep !== 1 &&
					<Button onClick={() => onPrev} style={Button.SECONDARY}>
						<Icon icon={faArrowLeft} style={arrowPrev} />
						{t('prev')}
					</Button>
				}

				{currentStep !== sectionToShow &&
					<Button onClick={() => onNext} style={Button.PRIMARY}>
						{t('next')}
						<Icon icon={faArrowRight} style={arrowNext} />
					</Button>
				}
			</div>
		</div>
	);
}

export default Sidebar;
