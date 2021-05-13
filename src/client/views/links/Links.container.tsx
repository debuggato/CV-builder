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

const linksInitialData: Object = {
	label: '',
	link: ''
}

const Links: FC = (): ReactElement => {
	const [id, setId] = useState<number>(0);
	const { t } = useTranslation();
	const addLink = useDispatch<Dispatch>();
	const links = useDataFromState('links');

	const addItem = () => {
		setId(id + 1)
		addLink(addLinkAction(id, linksInitialData));
	}

	const getItems = (items: any): ReactNode => {
		return items.map((el: any, index: number) => (
			<Accordion key={index} title={el.label}>
				<LinksView id={index} />
			</Accordion>
		))
	}

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
