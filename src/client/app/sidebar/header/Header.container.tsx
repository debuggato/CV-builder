import React, { PureComponent, ReactNode, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { changeLangAction, updateDocumentTitleAction } from '@genericState/Generic.actions';
import trans from '@client/i18n';
import { InputTitle, Wrapper } from './Header.style';
import Select from '@components/select/Select.view';

interface DispatchProps {
  changeLang: (arg0: string) => void;
  updateDocumentTitle: (arg0: string) => void;
}

interface State {
  langs: Object;
}

class Header extends PureComponent<DispatchProps, State> {
  state = {
    langs: [
      { 'en': 'English' },
      { 'it': 'Italian' },
      { 'es': 'Spanish' },
      { 'fr': 'French' },
      { 'de': 'German' }
    ]
  }

  onSwitchLang = (e: any) => {
    const { changeLang } = this.props;

    trans.changeLanguage(e.target.value);
    changeLang(e.target.value);
  }

  render(): ReactNode {
    const { updateDocumentTitle } = this.props;
    const { langs } = this.state;

    return (
      <Wrapper>
        <InputTitle
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateDocumentTitle(e.target.value)}
          placeholder="Untitled"
        />
        <Select list={langs} onChange={e => this.onSwitchLang(e)} />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  changeLang: (value: string) => {
    dispatch(changeLangAction(value));
  },
  updateDocumentTitle: (value: string) => {
    dispatch(updateDocumentTitleAction(value));
  }
});

export default connect(null, mapDispatchToProps)(Header);
