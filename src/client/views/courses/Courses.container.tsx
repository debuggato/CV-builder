import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { useTranslation } from 'react-i18next';
import { courseAddedAction } from '../../store/actions/Courses.action';
import SectionTitle from '../../components/SectionTitle';
import AddLink from '../../components/AddLink';
import Accordion from '../../components/accordion';
import CoursesView from './Courses.view';
import { useDispatch } from 'react-redux';
import useDataFromState from '../../utils/useDataFromState';

const coursesInitialData: Object = {
	course: '',
	institution: '',
	dateFrom: '',
	dateTo: ''
}

const Courses = () => {
	const [id, setId] = useState(0);
	const addCourse = useDispatch<Dispatch>();
	const items = useDataFromState('courses');
	const { t } = useTranslation();

	const addCourseItem = (): void => {
		setId(id + 1)

		addCourse(courseAddedAction(id, coursesInitialData));
	}

	return (
		<div>
			<SectionTitle>{t('courses.title')}</SectionTitle>
			{
				Object.entries(items).map((el: any, index: number) => (
					<Accordion key={index} title={el.course}>
						<CoursesView id={index} />
					</Accordion>
				))
			}
			<AddLink onClick={addCourseItem}>
				{t('add.course')}
			</AddLink>
		</div>
	);
}

export default Courses;
