import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { withTranslation, WithTranslation } from 'react-i18next';
import config from '@config/config';
import Button from '@components/buttons/Button.view';
import IconView from '@components/Icon.view';
import Loader from '@components/loader/Loader.view';

interface Props extends WithTranslation {
  selected: string | null;
  onClick: () => void;
}

interface State {
  pdfUrl: string;
  responsePdf: number | null;
  loader: boolean;
}

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

    axios.post(config.render_pdf_url, null, {
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
    const { selected, onClick, t } = this.props;
    const { loader, pdfUrl, responsePdf } = this.state;

    return (
      <ActionsWrapper>
        <Button type="button" linkStyle onClick={onClick}>
          <IconView icon={faThLarge} /> {t('choose.template')}
        </Button>

        {selected && !loader && responsePdf !== 200 &&
          <Button type="button" primary onClick={this.renderPdf}>
            {t('generate.pdf')}
          </Button>
        }

        {
          loader && <Loader />
        }

        {
          responsePdf === 200 &&
          <a type="button" href={pdfUrl} download>
            {t("download.pdf")}
          </a>
        }
      </ActionsWrapper>
    );
  }
}

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  width: 100%;
`;

export default withTranslation()(ResumeActions);