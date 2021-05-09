import React, { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../../components/SectionTitle';

type Props = {
	label: string;
	text: string;
}

const Description: FC<Props> = ({
	label,
	text
}: Props): ReactElement => {
	const { t } = useTranslation();

	return (
		<>
			<SectionTitle>{t(label)}</SectionTitle>
			<p dangerouslySetInnerHTML={{ __html: text }} ></p>
		</>
	);
}

export default Description;
