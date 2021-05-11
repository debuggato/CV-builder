import React, { FC, ReactElement } from 'react';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import ContactType from '../_components/ContactType';
import Description from '../_components/Description';
import StoryItem from '../_components/StoryItem';
import SectionTitle from '../../components/SectionTitle';
import useDataFromState from '../../utils/useDataFromState';

const DaVinci: FC = (): ReactElement => {

	const {
		address,
		postalCode,
		city,
		country,
		phone,
		firstName,
		lastName,
		jobTitle,
		email,
		photo,
	} = useDataFromState('details');

	const summary = useDataFromState('summary');
	const employments = useDataFromState('employment');
	const education = useDataFromState('education');

	const { t } = useTranslation();

	const getEmploymentHistory = () => (
		employments.map((el: any, index: number) => (
			<StoryItem
				key={index}
				title={el[0].jobTitle}
				entity={el[0].employer}
				city={el[0].city}
				dateFrom={el[0].dateFrom}
				dateTo={el[0].dateTo}
				description={el[0].description} />
		))
	)

	const getEducationHistory = () => (
		education.map((el: any, index: number) => (
			<StoryItem
				key={index}
				title={el[0].degree}
				entity={el[0].school}
				city={el[0].city}
				dateFrom={el[0].dateFrom}
				dateTo={el[0].dateTo}
				description={el[0].description} />
		))
	)

	return (
		<div>
			<div className="flex justify-between py-10">
				<div>
					<div className="capitalize">{firstName} {lastName}</div>
					{jobTitle && <span className="capitalize">{jobTitle}</span>}
				</div>
				{photo && <img src={photo} width="100" height="80" />}
				<div className="right">
					<ContactType
						icon={faPhone}
						value={phone}
					/>
					<ContactType
						icon={faEnvelope}
						value={email}
					/>
					<ContactType
						icon={faMapMarkerAlt}
						value={`${address ? address + ', ' + postalCode + ' ' + city + ' ' + country : ''}`}
					/>
				</div>
			</div>
			<div>
				{isAtLeastOneDegreeFilled(education) && <SectionTitle>{t('education')}</SectionTitle>}
				{getEducationHistory}
			</div>
			<div>
				{summary && <Description label="about.me" text={summary} />}
				{isAtLeastOneJobTitleFilled(employments) && <SectionTitle>{t('experience')}</SectionTitle>}
				{getEmploymentHistory}
			</div>
		</div>
	);
};

const isAtLeastOneJobTitleFilled = (items: any) => {
	return [...items[0]].some((val: any) => val.jobTitle);
}

const isAtLeastOneDegreeFilled = (items: any) => {
	return [...items[0]].some((val: any) => val.degree);
}

export default DaVinci;
