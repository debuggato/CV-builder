import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TextEditor from '../../components/text_editor';
import Input from '../../components/input';
import RangePicker from '../../components/datepicker/RangePicker.view';
import { Wrapper } from '../../components/accordion/Accordion.style';
import * as action from '../../store/actions/Education.action';

interface OwnProps {
	id: number;
}

interface DispatchProps {
	setSchool: (arg0: number, arg1: string) => void;
	setDegree: (arg0: number, arg1: string) => void;
	setCity: (arg0: number, arg1: string) => void;
	setDescription: (arg0: number, arg1: string) => void;
	setDateFrom: (arg0: number, arg1: Date) => void;
	setDateTo: (arg0: number, arg1: Date) => void;
}

interface StateProps {
	items: any;
}

type Props = OwnProps & DispatchProps & StateProps;

const EducationView: FC<Props> = (props: Props): ReactElement => {
	const {
		id,
		setSchool,
		setCity,
		setDescription,
		setDegree,
		setDateFrom,
		setDateTo,
	} = props;

	const { school, degree, city, description } = props.items[id];

	return (
		<>
			<Wrapper>
				<Input
					type="text"
					label="Degree"
					onChange={e => setDegree(id, e.target.value)}
					value={degree}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					type="text"
					label="School"
					onChange={e => setSchool(id, e.target.value)}
					value={school}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					type="text"
					label="City"
					onChange={e => setCity(id, e.target.value)}
					value={city}
				/>
			</Wrapper>
			<RangePicker
				label="From to date"
				onChangeDateFrom={date => setDateFrom(id, new Date(date))}
				onChangeDateTo={date => setDateTo(id, new Date(date))}
			/>
			<Wrapper>
				<TextEditor
					onChange={e => setDescription(id, e)}
					value={description}
				/>
			</Wrapper>
		</>
	);
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	setSchool: (id, value) => {
		dispatch(action.schoolAction(id, value));
	},
	setDegree: (id, value) => {
		dispatch(action.degreeAction(id, value));
	},
	setCity: (id, value) => {
		dispatch(action.cityAction(id, value));
	},
	setDescription: (id, value) => {
		dispatch(action.descriptionAction(id, value));
	},
	setDateFrom: (id, value) => {
		dispatch(action.dateFromAction(id, value));
	},
	setDateTo: (id, value) => {
		dispatch(action.dateToAction(id, value));
	},
});

const mapStateToProps = (state: any): StateProps => ({
	items: state.education
});

export default connect(mapStateToProps, mapDispatchToProps)(EducationView);
