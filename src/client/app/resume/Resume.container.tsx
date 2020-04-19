import React, { PureComponent, ReactNode } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import trans from '@client/i18n';
import { showModalAction, chooseTemplateAction, showLoaderAction } from '@genericState/Generic.actions';
import config from '@config/config';

import Loader from '@components/loader/Loader.view';
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
  loader: boolean;
}

interface DispatchProps {
  showModal: (arg0: boolean) => void;
  selectTemplate: (arg0: string) => void;
  showLoader: (arg0: boolean) => void;
}

type Props = StateProps & DispatchProps;

class ResumeContainer extends PureComponent<Props, {}> {

  renderPdf = () => {

    this.props.showLoader(true);

    axios.post(config.render_pdf_url, null, {
      data: this.props
    }).then(result => {
      this.props.showLoader(false);
    });
  }

  render(): ReactNode {
    const {
      showModal,
      items,
      selectTemplate,
      selected,
      employments,
      loader,
      ...rest
    } = this.props;

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
        {loader && <Loader keyLabel="loading_generation_pdf" />}
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showModal: (value: boolean) => {
    dispatch(showModalAction(value));
  },
  selectTemplate: (value: string) => {
    dispatch(chooseTemplateAction(value));
  },
  showLoader: (value: boolean) => {
    dispatch(showLoaderAction(value));
  },
});

const mapStateToProps = (state: any) => {
  const genericState = state.generic;
  const templateState = genericState.template;

  const items = Object.entries(templateState.available);
  const selected = templateState.selected;
  const loader = genericState.showLoader;
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
    loader,
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
