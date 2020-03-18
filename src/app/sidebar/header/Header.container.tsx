import React, { PureComponent, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { changeLangAction } from '../../../genericState/Generic.actions';
import i18n from '../../../i18n';

import { InputTitle, Wrapper } from './Header.style';
import Select from 'components/select/Select.view';

class Header extends PureComponent<ReduxProps, {}> {
  state = {
    langs: [
      { 'it': 'Italian' },
      { 'en': 'English' },
      { 'es': 'Spanish' },
      { 'fr': 'French' },
      { 'de': 'German' }
    ]
  }
  render(): ReactNode {
    const { langs } = this.state;
    return (
      <Wrapper>
        <InputTitle type="text" defaultValue="Untitled" />
        <Select list={langs} onChange={e => i18n.changeLanguage(e.target.value)} />
      </Wrapper>
    );
  }
}

//TODO to figure out what to do with data from state
interface ReduxProps {
  changeLang: (arg0: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeLang: (value: string) => {
      dispatch(changeLangAction(value));
    }
  }
}

export default connect(null, mapDispatchToProps)(Header);
