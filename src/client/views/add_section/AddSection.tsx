import React, { FC, useState } from 'react';
import { useTranslation, } from 'react-i18next';
import SectionTitle from '../../components/SectionTitle';
import Courses from '../courses/Courses.container';
import { Container, Body, Wrapper } from './AddSection.style';

type Props = {
	currentStep: number;
}

const AddSection: FC<Props> = ({
	currentStep
}: Props) => {
	const [courses, setCourses] = useState(false);
	const [customSection, setCustomSection] = useState(false);
	const [hobbies, setHobbies] = useState(false);
	const [activities, setActivities] = useState(false);
	const [languages, setLanguages] = useState(false);
	const [internship, setInternship] = useState(false);
	const [references, setReferences] = useState(false);
	const { t } = useTranslation();

	if (currentStep !== 7) return <></>;

	return (
		<Container>
			<SectionTitle>{t('add.section')}</SectionTitle>
			{courses && <Courses />}
			<Body>
				<Wrapper>
					<label onClick={() => setCustomSection(!customSection)}>{t('custom.section')}</label>
				</Wrapper>
				<Wrapper>
					<label onClick={() => setCourses(!courses)}>{t('courses')}</label>
				</Wrapper>
				<Wrapper>
					<label onClick={() => setInternship(!internship)}>{t('internships')}</label>
				</Wrapper>
				<Wrapper>
					<label onClick={() => setActivities(!activities)}>{t('extra.activities')}</label>
				</Wrapper>
				<Wrapper>
					<label onClick={() => setHobbies(!hobbies)}>{t('hobbies')}</label>
				</Wrapper>
				<Wrapper>
					<label onClick={() => setLanguages(!languages)}>{t('languages')}</label>
				</Wrapper>
				<Wrapper>
					<label onClick={() => setReferences(!references)}>{t('references')}</label>
				</Wrapper>
			</Body>
		</Container>
	);
}

export default AddSection;
