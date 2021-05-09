import React, { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { withTranslation, useTranslation } from 'react-i18next';
import { summaryAction } from '../../store/actions/Summary.action';
import Editor from '../../components/editor';
import SectionTitle from '../../components/SectionTitle';
import useDataFromState from '../../utils/useDataFromState';

type Props = {
	currentStep: number;
}

const Summary: FC<Props> = ({ currentStep }: Props): ReactElement => {
	const { t } = useTranslation();
	const setSummary = useDispatch<Dispatch>();
	const { description } = useDataFromState('summary');

	const onChange = (contentWithHTML: any) => {
		setSummary(summaryAction(contentWithHTML));
	}

	if (currentStep !== 2) return <></>;

	return (
		<div>
			<SectionTitle>{t('summary.title')}</SectionTitle>
			<Editor
				value={description}
				onChange={onChange}
			/>
		</div>
	);
}

export default withTranslation()(Summary);
