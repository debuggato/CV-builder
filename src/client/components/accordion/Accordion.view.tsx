import React, { FC, useState, ReactNode, ReactElement } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import IconView from '../../components/Icon.view';
import { Container, Header, Title } from './Accordion.style';

type Props = {
	title?: string;
	children: ReactNode;
}

const Accordion: FC<Props> = ({ title, children }: Props): ReactElement => {
	const [collapsed, setCollapsed] = useState<boolean>(true);
	const { t } = useTranslation();

	return (
		<Container>
			<Header onClick={() => setCollapsed(!collapsed)}>
				<Title>
					{title || t('not.specified')}
				</Title>
				<IconView icon={collapsed ? faChevronDown : faChevronUp} />
			</Header>
			{!collapsed && children}
		</Container>
	);
}

export default Accordion;
