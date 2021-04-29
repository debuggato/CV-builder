import React, { PureComponent, ReactNode, CSSProperties } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import i18n from '../../i18n';
import {
	chooseTemplateAction,
	showTemplateGalleryAction,
} from '../../store/actions/Root.action';
import { DetailsState } from '../../store/models/Details.model';
import { SummaryState } from '../../store/models/Summary.model';
import Modal from '../../components/modal';
import TemplateMiniature from '../_components/TemplateMiniature';
import { Container, Page } from './Resume.style';
import ResumeActions from './ResumeActions.view';
import DaVinci from '../../templates/davinci';

interface StateProps extends DetailsState, SummaryState {
	items: any;
	selected: string | null;
	employments: Object;
	education: Object;
	templateGallery: boolean;
	lang: string;
}

interface DispatchProps {
	showTemplateGallery: (arg0: boolean) => void;
	selectTemplate: (arg0: string) => void;
}

type Props = StateProps & DispatchProps;

class ResumeContainer extends PureComponent<Props, {}> {

	getTemplateMiniature = (): ReactNode => {
		const { items, selectTemplate } = this.props;

		return items.map((el: any) => {
			return <TemplateMiniature
				key={el[0]}
				id={el[0]}
				onClick={e => selectTemplate(e.currentTarget.id)}>
				{el[1]}
			</TemplateMiniature>
		});
	}

	getTemplate = (): ReactNode => {
		const { selected, employments, education, ...rest } = this.props;

		switch (selected) {
			case '0':
				return <DaVinci {...rest} employments={employments} education={education} />
			/* case '1':
				return <Michelangelo data={this.props} />
			case '2':
				return <Donatello data={this.props} />
			case '3':
				return <Raffaello {...this.props} />
			case '4':
				return <Caravaggio {...this.props} /> */
		}
	}

	getTemplateTitle = (): string => {
		const { selected, items } = this.props;

		return selected !== null ? items[selected][1] : '';
	}

	render(): ReactNode {
		const {
			showTemplateGallery,
			templateGallery,
			selected,
		} = this.props;

		const TemplateGalleryStyle: CSSProperties = {
			overflowY: 'scroll',
			width: '100%',
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
		}

		return (
			<Container>
				<h4><strong>{this.getTemplateTitle()}</strong></h4>
				{selected && <Page>{this.getTemplate()}</Page>}

				<ResumeActions
					selected={selected}
					onClick={() => showTemplateGallery(true)}
					{...this.props}
				/>

				{templateGallery &&
					<Modal
						title={i18n.t('choose.template')}
						header
						onClick={() => showTemplateGallery(false)}
					>
						<div style={TemplateGalleryStyle}>{this.getTemplateMiniature()}</div>
					</Modal>
				}
			</Container>
		);
	}
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
	showTemplateGallery: (value: boolean) => {
		dispatch(showTemplateGalleryAction(value));
	},
	selectTemplate: (value: string) => {
		dispatch(chooseTemplateAction(value));
	},
});

const mapStateToProps = (state: any): StateProps => {
	const rootState = state.root;
	const { template, lang } = rootState;

	const items = Object.entries(template.available);
	const selected = template.selected;
	const templateGallery = rootState.templateGallery;
	const employments = Object.entries(state.employment);
	const education = Object.entries(state.education);

	const {
		photo,
		jobTitle,
		firstName,
		lastName,
		email,
		phone,
		city,
		country,
		postalCode,
		address,
		drivingLicense,
		nationality,
		placeOfBirth,
		dateOfBirth,
	} = state.details;

	const { description } = state.summary;

	return {
		items,
		selected,
		templateGallery,
		photo,
		jobTitle,
		firstName,
		lastName,
		email,
		phone,
		city,
		country,
		postalCode,
		address,
		drivingLicense,
		nationality,
		placeOfBirth,
		dateOfBirth,
		description,
		employments,
		education,
		lang
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeContainer);
