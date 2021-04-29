import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withTranslation, WithTranslation } from 'react-i18next';
import Title from '../../components/Title.view';
import AddLinkLabel from '../../components/AddLinkLabel.view';
import Accordion from '../../components/accordion';
import { Container } from './Skills.style';
import SkillsView from './Skills.view';
import { addSkillAction } from '../../store/actions/Skills.action';

interface OwnProps extends WithTranslation {
	currentStep: number;
}

interface DispatchProps {
	addSkill: (arg0: number, arg1: any) => void;
}

interface StateProps {
	items: any;
}

interface State {
	id: number;
}

type Props = OwnProps & StateProps & DispatchProps;

class Skills extends Component<Props, State> {
	state = {
		id: 0
	};

	skillInitialData: Object = {
		name: '',
		level: ''
	}

	addItem = (): void => {
		this.setState({
			id: this.state.id + 1
		});
		this.props.addSkill(this.state.id, this.skillInitialData);
	};

	getItems = (items: any) => {
		return items.map((el: any) => {
			return (
				<Accordion key={el[0]} title={el[1].name}>
					<SkillsView id={el[0]} />
				</Accordion>
			)
		});
	}

	public render(): ReactNode {
		const { currentStep, items, t } = this.props;

		if (currentStep !== 5) return null;

		return (
			<Container>
				<Title>{t('skills')}</Title>
				{this.getItems(items)}
				<AddLinkLabel onClick={this.addItem}>
					{t('add.skill')}
				</AddLinkLabel>
			</Container>
		);
	}
}

const mapStateToProps = (state: any): StateProps => ({
	items: Object.entries(state.skills)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	addSkill: (id: number, value: any) => {
		dispatch(addSkillAction(id, value));
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Skills));
