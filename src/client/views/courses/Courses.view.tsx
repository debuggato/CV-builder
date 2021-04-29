import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Input from '../../components/input';
import RangePicker from '../../components/datepicker/RangePicker.view';
import ErrorBoundary from '../../components/ErrorBoundary';
import { Wrapper } from '../../components/accordion/Accordion.style';
import * as action from '../../store/actions/Courses.action';

interface OwnProps {
	id: number;
}

interface DispatchProps {
	setCourse: (arg0: number, arg1: string) => void;
	setInstitution: (arg0: number, arg1: string) => void;
	setDateFrom: (arg0: number, arg1: Date) => void;
	setDateTo: (arg0: number, arg1: Date) => void;
}

interface StateProps {
	items: any;
}

type Props = OwnProps & DispatchProps & StateProps;

const CoursesView: FC<Props> = (props: Props): ReactElement => {
	const { id, setDateFrom, setDateTo, setCourse, setInstitution } = props;
	const { course, institution, } = props.items[id];


	return (
		<ErrorBoundary>
			<Wrapper>
				<Input
					type="text"
					label="Course"
					onChange={e => setCourse(id, e.target.value)}
					value={course}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					type="text"
					label="Institution"
					onChange={e => setInstitution(id, e.target.value)}
					value={institution}
				/>
			</Wrapper>
			<Wrapper>
				<RangePicker
					label="From to date"
					onChangeDateFrom={date => setDateFrom(id, new Date(date))}
					onChangeDateTo={date => setDateTo(id, new Date(date))}
				/>
			</Wrapper>
		</ErrorBoundary>
	);
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	setCourse: (id, value) => {
		dispatch(action.courseAction(id, value));
	},
	setInstitution: (id, value) => {
		dispatch(action.institutionAction(id, value));
	},
	setDateFrom: (id, value) => {
		dispatch(action.dateFromAction(id, value));
	},
	setDateTo: (id, value) => {
		dispatch(action.dateToAction(id, value));
	},
});

const mapStateToProps = (state: any) => ({
	items: state.courses
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesView);
