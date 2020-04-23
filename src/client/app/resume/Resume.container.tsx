import React, { PureComponent, ReactNode, CSSProperties } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import trans from '@client/i18n';
import {
  chooseTemplateAction,
  showTemplateGalleryAction,
} from '@genericState/Generic.actions';
import { DetailsState } from '@sidebar/details/duck/Details.model';
import { SummaryState } from '@sidebar/summary/duck/Summary.model';
import Modal from '@components/modal/Modal.view';
import TemplateMiniature from '@components/TemplateMiniature';
import { Container, Page } from './Resume.style';
import ResumeActions from './actions/ResumeActions.view';
import DaVinci from '@server/templates/davinci/DaVinci.view';

interface StateProps extends DetailsState, SummaryState {
  items: any;
  selected: string | null;
  employments: any;
  templateGallery: boolean;
}

interface DispatchProps {
  showTemplateGallery: (arg0: boolean) => void;
  selectTemplate: (arg0: string) => void;
}

type Props = StateProps & DispatchProps;

class ResumeContainer extends PureComponent<Props, {}> {
  render(): ReactNode {
    const {
      showTemplateGallery,
      items,
      selectTemplate,
      templateGallery,
      selected,
      employments,
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

    const TemplateGalleryStyle: CSSProperties = {
      overflowY: 'scroll',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }

    return (
      <Container>
        <h3>{getTemplateTitle()}</h3>
        {
          selected &&
          <Page>{getTemplate()}</Page>
        }
        <ResumeActions
          selected={selected}
          onClick={() => showTemplateGallery(true)}
          {...this.props}
        />

        {templateGallery &&
          <Modal
            title={trans.t('choose_template')}
            header
            onClick={() => showTemplateGallery(false)}
          >
            <div style={TemplateGalleryStyle}>{item}</div>
          </Modal>
        }
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showTemplateGallery: (value: boolean) => {
    dispatch(showTemplateGalleryAction(value));
  },
  selectTemplate: (value: string) => {
    dispatch(chooseTemplateAction(value));
  },
});

const mapStateToProps = (state: any) => {
  const genericState = state.generic;
  const templateState = genericState.template;

  const items = Object.entries(templateState.available);
  const selected = templateState.selected;
  const templateGallery = genericState.templateGallery;
  const employments = Object.entries(state.employment);

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

  const { summary } = state.summary;

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
    summary,
    employments
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeContainer);
