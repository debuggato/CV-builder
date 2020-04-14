import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as action from './duck/Summary.actions';
import i18n from '@client/i18n';

import { Container } from './Summary.style';
import TextEditor from '@components/text_editor/TextEditor.container';
import Title from '@components/Title.view';

interface OwnProps {
  currentStep: number;
};

interface DispatchProps {
  setSummary: (arg0: string) => void;
}

type Props = OwnProps & DispatchProps;

class Summary extends Component<Props, {}> {

  onChange = (editorState: any) => {
    this.props.setSummary(editorState);
  }

  render(): ReactNode {
    const { currentStep } = this.props;

    if (currentStep !== 2) return null;

    return (
      <Container>
        <Title>{i18n.t('summary_title')}</Title>
        <TextEditor
          onChange={this.onChange}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    setSummary: (value: string) => {
      dispatch(action.setSummary(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(Summary);
