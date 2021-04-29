import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import sizes from '../../styles/sizes';
import TitleView from '../../components/Title.view';

interface Props {
	label: string;
	text: string;
}

const Paragraph = styled.p`
  font-size: ${sizes.paragraph};
  line-height: ${sizes.lineHeight};
`;

const Description: FC<Props> = ({ label, text }: Props): ReactElement => {
	const { t } = useTranslation();

	return (
		<>
			<TitleView>{t(label)}</TitleView>
			<Paragraph dangerouslySetInnerHTML={{ __html: text }} ></Paragraph>
		</>
	);
}

export default Description;
