import React, { FC, ReactElement, ReactNode, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { useTranslation } from 'react-i18next';
import useDataFromState from '../../utils/useDataFromState';
import SectionTitle from '../../components/SectionTitle';
import Subtitle from '../../components/Subtitle';
import AddLink from '../../components/AddLink';
import Accordion from '../../components/accordion';
import LinksView from './Links.view';
import { addLinkAction } from '../../store/actions/Links.action';

type Props = {
	currentStep: number;
}

const linksInitialData: Object = {
	label: '',
	link: ''
}

const Links: FC<Props> = ({ currentStep }: Props): ReactElement => {
	const [id, setId] = useState<number>(0);
	const { t } = useTranslation();
	const addLink = useDispatch<Dispatch>();
	const links = useDataFromState('links');

	const addItem = () => {
		setId(id + 1)
		addLink(addLinkAction(id, linksInitialData));
	}

	const getItems = (items: any): ReactNode => items.map((el: any) => (
		<Accordion key={el[0]} title={el[1].label}>
			<LinksView id={el[0]} />
		</Accordion>
	))

	if (currentStep !== 6) return <></>;

	return (
		<div>
			<SectionTitle>{t('websites.social.links')}</SectionTitle>
			<Subtitle>{t('website.social.links.subtitle')}</Subtitle>
			{getItems(links)}
			<AddLink onClick={addItem}>
				{t('add.link')}
			</AddLink>
		</div>
	);
}

export default Links;
