import React, { FC, ReactElement, ReactNode, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { modalDisplayedAction } from '../../store/actions/Root.action';
import { useTranslation } from 'react-i18next';
import Modal from '../../components/modal';
import TemplateMiniature from '../_components/TemplateMiniature';
import ResumeActions from './ResumeActions';
import DaVinci from '../../templates/davinci';
import './Resume.css';

const templates = [
	'DaVinci',
	'Michelangelo',
	'Donatello',
	'Raffaello',
	'Caravaggio',
];

const Resume: FC = (): ReactElement => {
	const { t } = useTranslation();
	const {
		modalDisplayed
	} = useSelector((state: RootStateOrAny) => state.root);
	const closeModal = useDispatch<Dispatch>();
	const [templateSelected, setTemplateSelected] = useState<string | null>(null);

	const getTemplateMiniature = (): ReactNode => (
		templates.map((template: any, index: number) => (
			<TemplateMiniature
				key={index}
				id={index}
				onClick={e => {
					setTemplateSelected(e.currentTarget.id);
					closeModal(modalDisplayedAction(false));
				}}>
				{template[1]}
			</TemplateMiniature>
		))
	)

	const getTemplateTitle = () => {
		return templateSelected && templates[parseInt(templateSelected)];
	}

	return (
		<div className="resume-wrapper w-2/3">
			<h4><strong>{getTemplateTitle()}</strong></h4>
			{templateSelected === '0' && <div className="page"><DaVinci /></div>}

			<ResumeActions
				templateSelected="0"
			/>

			{modalDisplayed &&
				<Modal
					title={t('choose.template')}
					header
				>
					<div className="flex w-full flex-wrap justify-center overflow-y-scroll">
						{getTemplateMiniature()}
					</div>
				</Modal>
			}
		</div>
	)
}

export default Resume;
