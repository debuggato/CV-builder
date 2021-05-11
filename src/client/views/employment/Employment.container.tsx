import React, { FC, ReactElement, useState, ReactNode } from 'react';
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

type Props = {
	currentStep: number;
}

const employmentInitialData: Object = {
	jobTitle: '',
	employer: '',
	city: '',
	startDate: new Date(),
	endDate: new Date(),
	description: ''
}

const Employment: FC<Props> = ({ currentStep }: Props): ReactElement => {
	const [id, setId] = useState(0);
	const addEmployment = useDispatch<Dispatch>();
	const { t } = useTranslation();
	const items = useDataFromState('employment');

	const addEmploymentItem = (): void => {
		setId(id + 1);
		addEmployment(addEmploymentAction(id, employmentInitialData));
	};

	const getItems = (items: any): ReactNode => {
		return items.map((el: any) => (
			<Accordion key={el[0]} title={el[1].jobTitle}>
				<EmploymentView id={el[0]} />
			</Accordion>
		));
	}

	if (currentStep !== 3) return <></>;

	return (
		<ErrorBoundary>
			<div>
				<SectionTitle>{t('employment.history')}</SectionTitle>
				<Subtitle>{t('employment.history.subtitle')}</Subtitle>
				{getItems(items)}
				<AddLink onClick={() => addEmploymentItem}>
					{t('add.employment')}
				</AddLink>
			</div>
		</ErrorBoundary>
	)
}

export default Employment;
