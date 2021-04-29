import React, { ReactNode, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withTranslation, WithTranslation } from 'react-i18next';
import { addCourseAction } from '../../store/actions/Courses.action';
import Title from '../../components/Title.view';
import AddLinkLabel from '../../components/AddLinkLabel.view';
import Accordion from '../../components/accordion';
import { Container } from './Courses.style';
import CoursesView from './Courses.view';

interface DispatchProps {
	addCourse: (arg0: number, arg1: any) => void;
}

interface StateProps {
	items: any;
}

type Props = StateProps & DispatchProps & WithTranslation;

interface State {
	id: number;
}

class Courses extends PureComponent<Props, State> {
	state = {
		id: 0
	};

	coursesInitialData: Object = {
		course: '',
		institution: '',
		dateFrom: '',
		dateTo: ''
	}

	addCourseItem = (): void => {
		this.setState({
			id: this.state.id + 1
		});
		this.props.addCourse(this.state.id, this.coursesInitialData);
	};

	getItems = (items: any): ReactNode => {
		return items.map((el: any) => {
			return (
				<Accordion key={el[0]} title={el[1].course}>
					<CoursesView id={el[0]} />
				</Accordion>
			)
		});
	}

	public render(): ReactNode {
		const { items, t } = this.props;

		return (
			<Container>
				<Title>{t('courses.title')}</Title>
				{this.getItems(items)}
				<AddLinkLabel onClick={this.addCourseItem}>
					{t('add.course')}
				</AddLinkLabel>
			</Container>
		);
	}
}

const mapStateToProps = (state: any) => ({
	items: Object.entries(state.courses)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	addCourse: (id, value) => {
		dispatch(addCourseAction(id, value));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Courses));
