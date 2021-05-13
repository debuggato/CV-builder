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
}

const arrowPrev: CSSProperties = {
	marginRight: '10px',
}

const lastSection = 7;

const Sidebar: FC = (): ReactElement => {
	const { t } = useTranslation();
	const [currentStep, setCurrentStep] = useState(1);

	function onNext() {
		if (currentStep !== lastSection) setCurrentStep(currentStep + 1);
	}

	function onPrev() {
		if (currentStep > 1) setCurrentStep(currentStep - 1);
	}

	return (
		<div className="container w-1/3">
			<Header />
			<div className="wrapper">
				{currentStep === 1 && <Details />}
				{currentStep === 2 && <Summary />}
				{currentStep === 3 && <Employment />}
				{currentStep === 4 && <Education />}
				{currentStep === 5 && <Skills />}
				{currentStep === 6 && <Links />}
				{currentStep === 7 && <AddSection />}
			</div>
			<div className="action-bar w-1/3">
				{currentStep > 1 &&
					<Button onClick={onPrev} style={Button.SECONDARY}>
						<Icon icon={faArrowLeft} style={arrowPrev} />
						{t('prev')}
					</Button>
				}

				{currentStep < lastSection &&
					<Button onClick={onNext} style={Button.PRIMARY}>
						{t('next')}
						<Icon icon={faArrowRight} style={arrowNext} />
					</Button>
				}
			</div>
		</div>
	);
}

export default Sidebar;
