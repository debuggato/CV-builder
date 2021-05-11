import React, { FC, ReactElement, useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import Button from '../../components/button';
import SectionTitle from '../../components/SectionTitle';
import Icon from '../../components/Icon';
import AdditionalDetails from './AdditionalDetails.view';
import MainDetails from './MainDetails';
import { Container, ButtonWrapper } from './Details.style';

type Props = {
	currentStep: number;
}

const Details: FC<Props> = ({ currentStep }: Props): ReactElement => {
	const [open, setOpen] = useState(false);
	const { t } = useTranslation();

	if (currentStep !== 1) return <></>;

	return (
		<Container>
			<SectionTitle>{t('personal.details')}</SectionTitle>
			<MainDetails />
			<ButtonWrapper onClick={() => setOpen(!open)}>
				<Button
					style={Button.PRIMARY}
				>
					{t('edit.additional.details')}
				</Button>
				<Icon icon={open ? faChevronUp : faChevronDown} />
			</ButtonWrapper>
			{open &&
				<AdditionalDetails />
			}
		</Container>
	);
}

export default Details;
