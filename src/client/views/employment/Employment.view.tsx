import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Accordion from '../../components/accordion';
import TextEditor from '../../components/text_editor';
import Input from '../../components/input';
import RangePicker from '../../components/datepicker/RangePicker.view';
import * as action from '../../store/actions/Employment.action';

interface OwnProps {
	id: number;
}

interface DispatchProps {
	setJobTitle: (arg0: number, arg1: string) => void;
	setEmployer: (arg0: number, arg1: string) => void;
	setCity: (arg0: number, arg1: string) => void;
	setDescription: (arg0: number, arg1: string) => void;
	setDateFrom: (arg0: number, arg1: Date) => void;
	setDateTo: (arg0: number, arg1: Date) => void;
}

interface StateProps {
	items: any;
}

type Props = OwnProps & DispatchProps & StateProps;

const EmploymentView: FC<Props> = (props: Props): ReactElement => {
	const {
		id,
		setJobTitle,
		setEmployer,
		setCity,
		setDescription,
		setDateFrom,
		setDateTo
	} = props;

	const { jobTitle, employer, city, description } = props.items[id];

	return (
		<>
			<Accordion>
				<Input
					type="text"
					label="Job Title"
					onChange={e => setJobTitle(id, e.target.value)}
					value={jobTitle}
				/>
			</Accordion>
			<Accordion>
				<Input
					type="text"
					label="Employer"
					onChange={e => setEmployer(id, e.target.value)}
					value={employer}
				/>
			</Accordion>
			<Accordion>
				<Input
					type="text"
					label="City"
					onChange={e => setCity(id, e.target.value)}
					value={city}
				/>
			</Accordion>
			<RangePicker
				label="From to date"
				onChangeDateFrom={date => setDateFrom(id, new Date(date))}
				onChangeDateTo={date => setDateTo(id, new Date(date))}
			/>
			<Accordion>
				<TextEditor
					onChange={e => setDescription(id, e)}
					value={description}
				/>
			</Accordion>
		</>
	);
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	setJobTitle: (id, value) => {
		dispatch(action.jobTitleAction(id, value));
	},
	setEmployer: (id, value) => {
		dispatch(action.employerAction(id, value));
	},
	setCity: (id, value) => {
		dispatch(action.cityAction(id, value));
	},
	setDateFrom: (id, value) => {
		dispatch(action.dateFromAction(id, value));
	},
	setDateTo: (id, value) => {
		dispatch(action.dateToAction(id, value));
	},
	setDescription: (id, value) => {
		dispatch(action.descriptionAction(id, value));
	},
});

const mapStateToProps = (state: any): StateProps => ({
	items: state.employment
});

export default connect(mapStateToProps, mapDispatchToProps)(EmploymentView);