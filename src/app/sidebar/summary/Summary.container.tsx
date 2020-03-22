import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as action from './duck/Summary.actions';
import i18n from '../../../i18n';

import { Container } from './Summary.style';
import TextEditor from 'components/text_editor/TextEditor.container';
import Title from 'components/Title.view';
import { ReduxProps } from './duck/Summary.model';

interface OwnProps {
  currentStep: number;
};

type Props = OwnProps & ReduxProps;

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

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setSummary: (value: string) => {
      dispatch(action.setSummary(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(Summary);
