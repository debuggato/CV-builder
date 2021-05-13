import React, { FC, ReactElement, ReactNode, useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import AddLink from '../../components/AddLink';
import SectionTitle from '../../components/SectionTitle';
import Subtitle from '../../components/Subtitle';
import Accordion from '../../components/accordion';
import ErrorBoundary from '../../components/ErrorBoundary';
import EducationView from './Education.view';
import { addEducationAction } from '../../store/actions/Education.action';
import useDataFromState from '../../utils/useDataFromState';

const educationInitialData: Object = {
	school: '',
	degree: '',
	city: '',
	description: ''
}

const Education: FC = (): ReactElement => {
	const [id, setId] = useState(0);
	const { t } = useTranslation();
	const addEducation = useDispatch<Dispatch>();
	const items = useDataFromState('education');

	const addEducationItem = (): void => {
		setId(id + 1)
		addEducation(addEducationAction(id, educationInitialData));
	}

	const getItems = (items: any): ReactNode => {
		return items.map((el: any, index: number) => (
			<Accordion key={index} title={el.degree}>
				<EducationView id={index} />
			</Accordion>
		));
	}

	return (
		<ErrorBoundary>
			<div>
				<SectionTitle>{t('add.education')}</SectionTitle>
				<Subtitle>{t('education.subtitle')}</Subtitle>
				{getItems(items)}
				<AddLink onClick={addEducationItem}>
					{t('add.education')}
				</AddLink>
			</div>
		</ErrorBoundary>
	);
}

export default Education;
