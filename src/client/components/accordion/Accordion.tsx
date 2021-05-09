import React, { FC, useState, ReactNode, ReactElement } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import Icon from '../Icon';

type Props = {
	title?: string;
	children: ReactNode;
}

const Accordion: FC<Props> = ({
	title,
	children
}: Props): ReactElement => {
	const [collapsed, setCollapsed] = useState<boolean>(true);
	const { t } = useTranslation();

	return (
		<div className="p-5 h-auto mb-3">
			<div
				className="cursor-pointer flex justify-between"
				onClick={() => setCollapsed(!collapsed)}
			>
				<div className="mb-5 font-bold">
					{title || t('not.specified')}
				</div>
				<Icon icon={collapsed ? faChevronDown : faChevronUp} />
			</div>
			{!collapsed && children}
		</div>
	);
}

export default Accordion;
