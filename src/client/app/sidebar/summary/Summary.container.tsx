import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { withTranslation, WithTranslation } from 'react-i18next';
import { summaryAction } from './duck/Summary.actions';
import TextEditor from '@components/text_editor/TextEditor.view';
import Title from '@components/Title.view';

interface OwnProps extends WithTranslation {
  currentStep: number;
}

interface StateProps {
  description: string;
}

interface DispatchProps {
  setSummary: (arg0: string) => void;
}

type Props = OwnProps & DispatchProps & StateProps;

class Summary extends Component<Props, {}> {

  onChange = (contentWithHTML: any) => {
    this.props.setSummary(contentWithHTML);
  }

  render(): ReactNode {
    const { currentStep, description, t } = this.props;

    if (currentStep !== 2) return null;

    return (
      <div>
        <Title>{t('summary.title')}</Title>
        <TextEditor
          value={description}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setSummary: (value: string) => {
    dispatch(summaryAction(value));
  },
});

const mapStateToProps = (state: any): StateProps => ({
  description: state.summary.description
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Summary));
