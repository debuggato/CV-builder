import React, { PureComponent, ReactNode } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import trans from '@client/i18n';
import { showModalAction, selectTemplateAction } from '@genericState/Generic.actions';
import config from '@config/config';

import IconView from '@components/Icon.view';
import { DetailsState } from '@sidebar/details/duck/Details.model';
import { SummaryState } from '@sidebar/summary/duck/Summary.model';
import Button from '@components/buttons/Button.view';
import Modal from '@components/modal/Modal.view';
import TemplateMiniature from '@components/TemplateMiniature';
import { Container, ActionsWrapper, Page, Title } from './Resume.style';
import DaVinci from '@server/templates/davinci/DaVinci.view';

interface StateProps extends DetailsState, SummaryState {
  items: any;
  selected: string | null;
  employments: any;
}

interface DispatchProps {
  showModal: (arg0: boolean) => void;
  selectTemplate: (arg0: string) => void;
}

type Props = StateProps & DispatchProps;

class ResumeContainer extends PureComponent<Props, {}> {

  renderPdf = () => {
    axios.post(config.render_pdf_url, null, {
      data: this.props
    }).then(result => {
    });
  }

  render(): ReactNode {
    const { showModal, items, selectTemplate, selected, employments, ...rest } = this.props;

    const item = items.map((el: any) => {
      return <TemplateMiniature key={el[0]} id={el[0]} onClick={e => selectTemplate(e.currentTarget.id)}>{el[1]}</TemplateMiniature>
    });

    const getTemplate = (): ReactNode => {
      switch (selected) {
        case '0':
          return <DaVinci {...rest} employments={employments} />
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

    const getTemplateTitle = (): string => {
      return selected !== null ? items[selected][1] : '';
    }

    return (
      <Container>
        <Title>{getTemplateTitle()}</Title>
        {
          selected &&
          <Page>{getTemplate()}</Page>
        }
        <ActionsWrapper>
          <Button type="button" linkStyle onClick={() => showModal(true)}>
            <IconView icon={faThLarge} /> {trans.t('choose_template')}
          </Button>

          {selected &&
            <Button type="button" primary onClick={this.renderPdf}>
              {trans.t('generate_pdf')}
            </Button>
          }
        </ActionsWrapper>
        <Modal title={trans.t('choose_template')} >
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
  selectTemplate: (value: string) => {
    dispatch(selectTemplateAction(value));
  }
});

const mapStateToProps = (state: any) => {
  const templateState = state.generic.template;

  const items = Object.entries(templateState.available);
  const selected = templateState.selected;

  const employments = Object.entries(state.employment);

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
    items,
    selected,
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
    employments
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeContainer);
