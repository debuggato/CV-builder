import React, { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import Input from '../../components/input';
import RangePicker from '../../components/datepicker/RangePicker.view';
import ErrorBoundary from '../../components/ErrorBoundary';
import * as action from '../../store/actions/Courses.action';
import useDataFromState from '../../utils/useDataFromState';

type Props = {
	id: number;
}

const CoursesView: FC<Props> = ({ id }: Props): ReactElement => {
	const setDateFrom = useDispatch<Dispatch>();
	const setDateTo = useDispatch<Dispatch>();
	const setCourse = useDispatch<Dispatch>();
	const setInstitution = useDispatch<Dispatch>();
	const { course, institution } = useDataFromState('courses')[id];

	return (
		<ErrorBoundary>
			<div>
				<Input
					type="text"
					label="Course"
					onChange={e => setCourse(action.courseAction(id, e.target.value))}
					value={course}
				/>
			</div>
			<div>
				<Input
					type="text"
					label="Institution"
					onChange={e => setInstitution(action.institutionAction(id, e.target.value))}
					value={institution}
				/>
			</div>
			<div>
				<RangePicker
					label="From to date"
					onChangeDateFrom={date => {
						setDateFrom(action.dateFromAction(id, new Date(date)))
					}}
					onChangeDateTo={date => {
						setDateTo(action.dateToAction(id, new Date(date)))
					}}
				/>
			</div>
		</ErrorBoundary>
	);
};

export default CoursesView;
