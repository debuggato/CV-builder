import React, {
  Component,
  CSSProperties,
  ChangeEvent,
  ReactNode
} from 'react'
import styled from 'styled-components'

import i18n from '../../../i18n'

import Select from '../../../components/select/Select.view'
import Input from '../../../components/input/Input.view'
import Loader from '../../../components/loader/Loader.view'

type State = {
  langs: string[]
}

const Wrapper = styled.div`
  padding: 15px 0;
  display: flex;
  flex-direction: row;
`

class Header extends Component<{}, State> {

  state = {
    langs: [
      'Italian',
      'English',
      'Spanish'
    ]
  }

  onLangChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let { value } = e.target
    
    switch (value) {
      case '0':
        i18n.changeLanguage('it')
        break
      case '1':
        i18n.changeLanguage('en')
        break
      case '2':
        i18n.changeLanguage('es')
        break
      default:
        i18n.changeLanguage('en')
        break
    }
  }

  render(): ReactNode {

    const { langs } = this.state

    const titleStyle: CSSProperties = {
      border: 0,
      width: '70%',
      marginBottom: '10px',
      marginRight: '55px',
      fontSize: '20px',
      fontWeight: 700,
      textAlign: 'left',
      paddingLeft: '35px',
      textTransform: 'capitalize'
    }

    return (
      <Wrapper>
        <Input
          type="text"
          withLabel={ false }
          label="Untitled"
          style={ titleStyle }
        />
        {/* <Loader /> */}
        <Select list={ langs } onChange={ this.onLangChange } />
      </Wrapper>
    )
  }
}

export default Header
