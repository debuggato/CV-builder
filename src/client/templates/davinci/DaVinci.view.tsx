import React, { FC, ReactElement } from 'react';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { DetailsState } from '../../store/models/Details.model';
import { SummaryState } from '../../store/models/Summary.model';
import ContactType from '../_components/ContactType.view';
import Description from '../_components/Description.view';
import StoryItem from '../_components/StoryItem.view';
import TitleView from '../../components/Title.view';
import {
	Container,
	FullName,
	JobTitle,
	Sidebar,
	Main,
	Header,
	WhoIam,
	ContactDetails
} from './DaVinci.style';
import { useTranslation } from 'react-i18next';
import ErrorBoundary from '../../components/ErrorBoundary';

interface Props extends DetailsState, SummaryState {
	employments: Object;
	education: Object;
}

const DaVinci: FC<Props> = (props: Props): ReactElement => {

	const {
		address,
		postalCode,
		city,
		country,
		phone,
		firstName,
		lastName,
		jobTitle,
		description,
		email,
		employments,
		education,
		photo,
	} = props;

	const { t } = useTranslation();

	return (
		<ErrorBoundary>
			<Container>
				<Header border={jobTitle}>
					<WhoIam>
						<FullName>{`${firstName} ${lastName}`}</FullName>
						{jobTitle && <JobTitle>{jobTitle}</JobTitle>}
					</WhoIam>
					{photo && <img src={photo} width="100" height="80" />}
					<ContactDetails>
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
					</ContactDetails>
				</Header>
				<Sidebar>
					{isAtLeastOneDegreeFilled(education) && <TitleView>{t('education')}</TitleView>}
					{getEducationHistory(education)}
				</Sidebar>
				<Main>
					{description && <Description label="about.me" text={description} />}
					{isAtLeastOneJobTitleFilled(employments) && <TitleView>{t('experience')}</TitleView>}
					{getEmploymentHistory(employments)}
				</Main>
			</Container>
		</ErrorBoundary>
	);
};

const isAtLeastOneJobTitleFilled = (items: any) => {
	return [items].some((val: any) => val[0][1].jobTitle);
}

const isAtLeastOneDegreeFilled = (items: any) => {
	return [items].some((val: any) => val[0][1].degree);
}

const getEmploymentHistory = (employments: any) => {
	return employments.map((el: any) => {
		return <StoryItem
			key={el[0]}
			title={el[1].jobTitle}
			entity={el[1].employer}
			city={el[1].city}
			dateFrom={el[1].dateFrom}
			dateTo={el[1].dateTo}
			description={el[1].description} />;
	});
}

const getEducationHistory = (education: any) => {
	return education.map((el: any) => {
		return <StoryItem
			key={el[0]}
			title={el[1].degree}
			entity={el[1].school}
			city={el[1].city}
			dateFrom={el[1].dateFrom}
			dateTo={el[1].dateTo}
			description={el[1].description} />;
	});
}

export default DaVinci;