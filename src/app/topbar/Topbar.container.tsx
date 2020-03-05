import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import i18n from '../../i18n';
import * as action from './../../genericState';

import { Wrapper } from './Topbar.style';
import Button from '../../components/buttons/Button.view';

interface Props {
  sendDataToUpdateModalState: (arg0: boolean) => void;
}

class Topbar extends Component<Props> {
  state = {
    showModal: false,
  };

  chooseTemplate = (): void => {
    this.setState(
      {
        showModal: !this.state.showModal,
      },
      () => this.props.sendDataToUpdateModalState(this.state.showModal),
    );
  };

  generatePDF = (): void => {
    console.log('generatePDF TODO');
  };

  public render() {
    return (
      <Wrapper>
        <Button type="button" color="secondary" onClick={this.chooseTemplate}>
          {i18n.t('choose_template')}
        </Button>
        <Button type="button" color="primary" onClick={this.generatePDF}>
          {i18n.t('download_pdf')}
        </Button>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    sendDataToUpdateModalState: (value: boolean) => {
      dispatch(action.updateIsModalOpened(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(Topbar);
