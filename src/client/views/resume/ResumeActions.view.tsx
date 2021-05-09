import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import config from '../../config';
import i18n from '../../i18n';
import Button from '../../components/button';
import IconView from '../../components/Icon.view';
import Loader from '../../components/loader/Loader.view';

interface Props {
	selected: string | null;
	onClick: () => void;
}

interface State {
	pdfUrl: string;
	responsePdf: number | null;
	loader: boolean;
}

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px 0;
  width: 100%;
`;

class ResumeActions extends Component<Props, State> {

	state = {
		pdfUrl: '',
		responsePdf: null,
		loader: false
	}

	renderPdf = () => {
		this.setState({
			loader: true
		});
		console.log(this.props)
		axios.post(config.render_url, {
			data: this.props
		}).then(result => {
			this.setState({
				pdfUrl: result.data.url,
				responsePdf: result.status,
				loader: false
			});
		});
	}

	render(): ReactNode {
		const { selected, onClick } = this.props;
		const { loader, pdfUrl, responsePdf } = this.state;

		return (
			<ActionsWrapper>
				<Button linkStyle onClick={onClick}>
					<IconView icon={faThLarge} /> {i18n.t('choose.template')}
				</Button>

				{selected && !loader && responsePdf !== 200 &&
					<Button primary onClick={this.renderPdf}>
						{i18n.t('generate.pdf')}
					</Button>
				}

				{
					loader && <Loader />
				}

				{
					responsePdf === 200 &&
					<a type="button" href={pdfUrl} download>
						{i18n.t("download.pdf")}
					</a>
				}
			</ActionsWrapper>
		);
	}
}

export default ResumeActions;