import React, { Component, CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { changeLangAction } from '../../../genericState';
import i18n from '../../../i18n';

import Select from 'components/select/Select.view';
import Input from 'components/input/Input.view';

interface State {
  langs: Object;
};

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

class Header extends Component<ReduxProps, State> {
  state = {
    langs: [
      { 'it': 'Italian' },
      { 'en': 'English' },
      { 'es': 'Spanish' },
      { 'fr': 'French' },
      { 'de': 'German' }
    ]
  };

  public render(): ReactNode {
    const { langs } = this.state;

    const titleStyle: CSSProperties = {
      border: 0,
      width: '70%',
      marginBottom: '10px',
      marginRight: '55px',
      fontSize: '20px',
      fontWeight: 700,
      textAlign: 'left',
      paddingLeft: '35px',
      textTransform: 'capitalize',
    };

    return (
      <Wrapper>
        <Input type="text" defaultValue="Untitled" style={titleStyle} />
        <Select list={langs} onChange={e => i18n.changeLanguage(e.target.value)} />
      </Wrapper>
    );
  }
}

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
