import React, { FC, ReactElement, useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addEmploymentAction } from '../../store/actions/Employment.action';
import SectionTitle from '../../components/SectionTitle';
import Subtitle from '../../components/Subtitle';
import AddLink from '../../components/AddLink';
import Accordion from '../../components/accordion';
import ErrorBoundary from '../../components/ErrorBoundary';
import EmploymentView from './Employment.view';
import useDataFromState from '../../utils/useDataFromState';

const employmentInitialData: Object = {
	jobTitle: '',
	employer: '',
	city: '',
	startDate: new Date(),
	endDate: new Date(),
	description: ''
}

const Employment: FC = (): ReactElement => {
	const [id, setId] = useState(0);
	const addEmployment = useDispatch<Dispatch>();
	const { t } = useTranslation();
	const items = useDataFromState('employment');

	const addEmploymentItem = (): void => {
		setId(id + 1);
		addEmployment(addEmploymentAction(id, employmentInitialData));
	}

	return (
		<ErrorBoundary>
			<SectionTitle>{t('employment.history')}</SectionTitle>
			<Subtitle>{t('employment.history.subtitle')}</Subtitle>
			{
				Object.entries(items).map((el: any, index: number) => (
					<Accordion key={index} title={el.jobTitle}>
						<EmploymentView id={index} />
					</Accordion>
				))
			}
			<AddLink onClick={addEmploymentItem}>
				{t('add.employment')}
			</AddLink>
		</ErrorBoundary>
	)
}

export default Employment;
