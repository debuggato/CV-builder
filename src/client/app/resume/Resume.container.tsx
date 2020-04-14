import React, { PureComponent, ReactNode } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import i18n from '@client/i18n';
import { showModalAction, selectTemplateAction } from '@genericState/Generic.actions';
import { RENDER_PDF_URL } from '../../../utils/endpoints';

import Button from '@components/buttons/Button.view';
import Modal from '@components/modal/Modal.view';
import TemplateMiniature from '@components/TemplateMiniature';
import { Container, ActionsWrapper, Page, Title } from './Resume.style';
import DaVinci from '@server/templates/davinci/DaVinci.view';
import Michelangelo from '@server/templates/michelangelo/Michelangelo.view';
import Raffaello from '@server/templates/raffaello/Raffaello.view';
import Donatello from '@server/templates/donatello/Donatello.view';
import Caravaggio from '@server/templates/caravaggio/Caravaggio.view';

interface StateProps {
  items: any;
  templateSelected: string | null;
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  city: string;
  country: string;
  postalCode: number;
  address: string;
  drivingLicense: string;
  nationality: string;
  placeOfBirth: string;
  dateOfBirth: Date;
  summary: string;
}

interface DispatchProps {
  showModal: (arg0: boolean) => void;
  selectTemplate: (arg0: string) => void;
}

type Props = StateProps & DispatchProps;

class ResumeContainer extends PureComponent<Props, {}> {

  renderPdf = () => {
    axios.post(RENDER_PDF_URL, null, {
      data: this.props
    }).then(resp => {
      console.log(resp);
    });
  }

  render(): ReactNode {
    const { showModal, items, selectTemplate, templateSelected } = this.props;

    const item = items.map((el: any) => {
      return <TemplateMiniature key={el[0]} id={el[0]} onClick={e => selectTemplate(e.currentTarget.id)}>{el[1]}</TemplateMiniature>
    });

    const getTemplate = (): ReactNode => {
      switch (templateSelected) {
        case '0':
          return <DaVinci {...this.props} />
        case '1':
          return <Michelangelo {...this.props} />
        case '2':
          return <Donatello {...this.props} />
        case '3':
          return <Raffaello {...this.props} />
        case '4':
          return <Caravaggio {...this.props} />
      }
    }

    const getTemplateTitle = (): string => {
      return templateSelected !== null ? items[templateSelected][1] : '';
    }

    return (
      <Container>
        <Title>{getTemplateTitle()}</Title>
        {
          templateSelected &&
          <Page>{getTemplate()}</Page>
        }
        <ActionsWrapper>
          <Button type="button" linkStyle onClick={() => showModal(true)}>
            <FontAwesomeIcon icon={faThLarge} /> {i18n.t('choose_template')}
          </Button>

          {templateSelected &&
            <Button type="button" primary onClick={this.renderPdf}>
              {i18n.t('generate_pdf')}
            </Button>
          }
        </ActionsWrapper>
        <Modal title={i18n.t('choose_template')} >
          {item}
        </Modal>
      </Container >
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showModal: (value: boolean) => {
    dispatch(showModalAction(value));
  },
  selectTemplate: (value: string) => {
    dispatch(selectTemplateAction(value));
  }
});

const mapStateToProps = (state: any) => {
  const templatesObject = Object.entries(state.generic.template.available);
  const templateSelected = state.generic.template.selected;

  const {
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

  const { summary } = state.summary;

  return {
    items: templatesObject,
    templateSelected,
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
    summary,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeContainer);
