import React, { FC, ReactElement } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import Editor from '../../components/editor';
import Input from '../../components/input';
import useDataFromState from '../../utils/useDataFromState';
import RangePicker from '../../components/datepicker/RangePicker.view';
import * as action from '../../store/actions/Employment.action';

type Props = {
	id: number;
}

const EmploymentView: FC<Props> = ({ id }: Props): ReactElement => {
	const setJobTitle = useDispatch<Dispatch>();
	const setEmployer = useDispatch<Dispatch>();
	const setCity = useDispatch<Dispatch>();
	const setDescription = useDispatch<Dispatch>();
	const setDateFrom = useDispatch<Dispatch>();
	const setDateTo = useDispatch<Dispatch>();

	const { jobTitle, employer, city, description } = useDataFromState('employment')[id];

	return (
		<>
			<Input
				type="text"
				label="Job Title"
				onChange={e => setJobTitle(action.jobTitleAction(id, e.target.value))}
				value={jobTitle}
			/>
			<Input
				type="text"
				label="Employer"
				onChange={e => setEmployer(action.employerAction(id, e.target.value))}
				value={employer}
			/>
			<Input
				type="text"
				label="City"
				onChange={e => setCity(action.cityAction(id, e.target.value))}
				value={city}
			/>
			<RangePicker
				label="From to date"
				onChangeDateFrom={date => setDateFrom(action.dateFromAction(id, new Date(date)))}
				onChangeDateTo={date => setDateTo(action.dateToAction(id, new Date(date)))}
			/>
			<Editor
				onChange={e => setDescription(action.descriptionAction(id, e))}
				value={description}
			/>
		</>
	)
}

export default EmploymentView;
