import React, { FC, ReactElement, CSSProperties } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import Icon from '../../components/Icon';

type Props = {
	value: string;
	label?: string;
	icon?: IconDefinition;
}

const iconStyle: CSSProperties = {
	marginLeft: '5px'
}

const ContactType: FC<Props> = ({
	value,
	icon,
	label
}: Props): ReactElement => {
	const { t } = useTranslation();

	return (
		<div>
			{label && t(label)}
			{value && <span>{value}</span>}
			{value && icon && <Icon icon={icon} style={iconStyle} />}
		</div>
	);
}

export default ContactType;
