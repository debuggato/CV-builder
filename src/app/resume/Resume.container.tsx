import React, { FC, ReactElement } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import i18n from '../../i18n';
import { showModalAction, previewPdfAction } from '../../genericState/Generic.actions';
import { ReduxProps } from '../../genericState/Generic.model';

import Button from 'components/buttons/Button.view';
import Modal from 'components/modal/Modal.view';
import { Container, Page, ActionsWrapper } from './Resume.style';
import DaVinci from '../templates/davinci/DaVinci.view';

interface OwnProps {
  expand: boolean;
}

type Props = OwnProps & ReduxProps;

const ResumeContainer: FC<Props> = ({ expand, showModal, previewPdf }: Props): ReactElement => {
  return (
    <Container expand={expand}>
      <Page expand={expand}>
        <DaVinci />
      </Page>
      <ActionsWrapper>
        <Button type="button" color="secondary" onClick={() => showModal(true)}>
          {i18n.t('choose_template')}
        </Button>
        <Button type="button" color="primary" onClick={() => previewPdf(true)}>
          {i18n.t('generate_pdf')}
        </Button>
      </ActionsWrapper>
      <Modal title={i18n.t('choose_template')} />
    </Container>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showModal: (value: boolean) => {
    dispatch(showModalAction(value));
  },
  previewPdf: (value: boolean) => {
    dispatch(previewPdfAction(value));
  },
});

export default connect(null, mapDispatchToProps)(ResumeContainer);
