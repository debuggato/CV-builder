import React, { FC, ReactElement, useState } from 'react';
import { Dispatch } from 'redux';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/SectionTitle';
import AddLink from '../../components/AddLink';
import Accordion from '../../components/accordion';
import useDataFromState from '../../utils/useDataFromState';
import SkillsView from './Skills.view';
import { addSkillAction } from '../../store/actions/Skills.action';
import { useDispatch } from 'react-redux';

const skillInitialData: Object = {
	name: '',
	level: ''
}

const Skills: FC = (): ReactElement => {
	const [id, setId] = useState(0);
	const addSkill = useDispatch<Dispatch>();
	const { t } = useTranslation();
	const items = useDataFromState('skills');

	const addItem = (): void => {
		setId(id + 1);
		addSkill(addSkillAction(id, skillInitialData));
	}

	const getItems = (items: any) => {
		return items.map((el: any, index: number) => (
			<Accordion key={index} title={el.name}>
				<SkillsView id={index} />
			</Accordion>
		));
	}

	return (
		<div>
			<SectionTitle>{t('skills')}</SectionTitle>
			{getItems(items)}
			<AddLink onClick={() => addItem}>
				{t('add.skill')}
			</AddLink>
		</div>
	);
}

export default Skills;
