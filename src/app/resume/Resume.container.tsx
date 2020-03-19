import React, { PureComponent, ReactNode } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import i18n from '../../i18n';
import { showModalAction, previewPdfAction, selectTemplateAction } from '../../genericState/Generic.actions';

import Button from 'components/buttons/Button.view';
import Modal from 'components/modal/Modal.view';
import TemplateMiniature from 'components/TemplateMiniature';
import { Container, Page, ActionsWrapper } from './Resume.style';
import DaVinci from '../templates/davinci/DaVinci.view';
import Michelangelo from '../templates/michelangelo/Michelangelo.view';
import Raffaello from '../templates/raffaello/Raffaello.view';
import Donatello from '../templates/donatello/Donatello.view';
import Caravaggio from '../templates/caravaggio/Caravaggio.view';

interface OwnProps {
  expand: boolean;
}

interface StateProps {
  items: any;
  templateSelected: string | null;
}

interface DispatchProps {
  showModal: (arg0: boolean) => void;
  previewPdf: (arg0: boolean) => void;
  selectTemplate: (arg0: string) => void;
}

type Props = OwnProps & StateProps & DispatchProps;

class ResumeContainer extends PureComponent<Props, {}> {

  render(): ReactNode {
    const { expand, showModal, previewPdf, items, selectTemplate, templateSelected } = this.props;

    const item = items.map((el: any) => {
      return <TemplateMiniature id={el[0]} onClick={e => selectTemplate(e.currentTarget.id)}>{el[1]}</TemplateMiniature>
    });

    const getTemplate = (): ReactNode => {
      switch (templateSelected) {
        case '0':
          return <DaVinci />
        case '1':
          return <Michelangelo />
        case '2':
          return <Donatello />
        case '3':
          return <Raffaello />
        case '4':
          return <Caravaggio />
      }
    }

    return (
      <Container expand={expand}>
        {
          templateSelected &&
          <Page expand={expand}>
            {getTemplate()}
          </Page>
        }
        <ActionsWrapper>
          <Button type="button" color="secondary" onClick={() => showModal(true)}>
            {i18n.t('choose_template')}
          </Button>

          {templateSelected &&
            <Button type="button" color="primary" onClick={() => previewPdf(true)}>
              {i18n.t('generate_pdf')}
            </Button>
          }
        </ActionsWrapper>
        <Modal title={i18n.t('choose_template')} >
          {item}
        </Modal>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showModal: (value: boolean) => {
    dispatch(showModalAction(value));
  },
  previewPdf: (value: boolean) => {
    dispatch(previewPdfAction(value));
  },
  selectTemplate: (value: string) => {
    dispatch(selectTemplateAction(value));
  }
});

const mapStateToProps = (state: any) => {
  const templatesObject = Object.entries(state.generic.templatesAvailable);
  const templateSelected = state.generic.templateSelected;

  return {
    items: templatesObject,
    templateSelected
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeContainer);
