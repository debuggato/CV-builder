import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withTranslation, WithTranslation } from 'react-i18next';
import Title from '../../components/Title.view';
import Subtitle from '../../components/Subtitle.view';
import AddLinkLabel from '../../components/AddLinkLabel.view';
import Accordion from '../../components/accordion';
import { Container } from './Links.style';
import LinksView from './Links.view';
import { addLinkAction } from '../../store/actions/Links.action';

interface OwnProps extends WithTranslation {
	currentStep: number;
}

interface DispatchProps {
	addLink: (arg0: number, arg1: any) => void;
}

interface StateProps {
	items: any;
}

type Props = OwnProps & StateProps & DispatchProps;

interface State {
	id: number;
}

class Links extends Component<Props, State> {
	state = {
		id: 0
	};

	linksInitialData: Object = {
		label: '',
		link: ''
	}

	addItem = () => {
		this.setState({
			id: this.state.id + 1
		});
		this.props.addLink(this.state.id, this.linksInitialData);
	}

	getItems = (items: any): ReactNode => {
		return items.map((el: any) => {
			return (
				<Accordion key={el[0]} title={el[1].label}>
					<LinksView id={el[0]} />
				</Accordion>
			)
		});
	}

	public render(): ReactNode {
		const { currentStep, items, t } = this.props;

		if (currentStep !== 6) return null;

		return (
			<Container>
				<Title>{t('websites.social.links')}</Title>
				<Subtitle>{t('website.social.links.subtitle')}</Subtitle>
				{this.getItems(items)}
				<AddLinkLabel onClick={this.addItem}>
					{t('add.link')}
				</AddLinkLabel>
			</Container>
		);
	}
}

const mapStateToProps = (state: any): StateProps => ({
	items: Object.entries(state.links)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	addLink: (id: number, value: any) => {
		dispatch(addLinkAction(id, value));
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Links));