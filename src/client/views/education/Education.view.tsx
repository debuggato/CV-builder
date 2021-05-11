import React, { FC, ReactElement } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import TextEditor from '../../components/editor';
import Input from '../../components/input';
import RangePicker from '../../components/datepicker/RangePicker.view';
import * as action from '../../store/actions/Education.action';
import useDataFromState from '../../utils/useDataFromState';

type Props = {
	id: number;
}

const EducationView: FC<Props> = ({ id }: Props): ReactElement => {
	const setSchool = useDispatch<Dispatch>();
	const setDegree = useDispatch<Dispatch>();
	const setCity = useDispatch<Dispatch>();
	const setDescription = useDispatch<Dispatch>();
	const setDateFrom = useDispatch<Dispatch>();
	const setDateTo = useDispatch<Dispatch>();

	const { school, degree, city, description } = useDataFromState('education')[id];

	return (
		<>
			<div>
				<Input
					type="text"
					label="Degree"
					onChange={e => setDegree(action.degreeAction(id, e.target.value))}
					value={degree}
				/>
			</div>
			<div>
				<Input
					type="text"
					label="School"
					onChange={e => setSchool(action.schoolAction(id, e.target.value))}
					value={school}
				/>
			</div>
			<div>
				<Input
					type="text"
					label="City"
					onChange={e => setCity(action.cityAction(id, e.target.value))}
					value={city}
				/>
			</div>
			<RangePicker
				label="From to date"
				onChangeDateFrom={date => setDateFrom(action.dateFromAction(id, new Date(date)))}
				onChangeDateTo={date => setDateTo(action.dateToAction(id, new Date(date)))}
			/>
			<div>
				<TextEditor
					onChange={e => setDescription(action.descriptionAction(id, e))}
					value={description}
				/>
			</div>
		</>
	)
}

export default EducationView;
