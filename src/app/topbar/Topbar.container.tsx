import React, { Component, ReactNode } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import i18n from '../../i18n';
import * as action from './../../genericState';
import { ReduxProps } from '../../genericState';

import { Wrapper } from './Topbar.style';
import Button from 'components/buttons/Button.view';
import Modal from 'components/modal/Modal.view';

class Topbar extends Component<ReduxProps, {}> {

  generatePDF = (): void => {
    console.log('generatePDF TODO');
  };

  public render(): ReactNode {
    return (
      <Wrapper>
        <Button type="button" color="secondary" onClick={() => this.props.showModal(true)}>
          {i18n.t('choose_template')}
        </Button>
        <Button type="button" color="primary" onClick={this.generatePDF}>
          {i18n.t('download_pdf')}
        </Button>
        <Modal title={i18n.t('choose_template')} />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    showModal: (value: boolean) => {
      dispatch(action.showModalAction(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(Topbar);
