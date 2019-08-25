import React, { Component, CSSProperties } from 'react'
import styled from 'styled-components'

import Select from '../../../components/select/Select.view'
import Input from '../../../components/input/Input.view'

interface State {
  langs: string[]
}

const Wrapper = styled.div`
  padding: 15px 0;
  display: flex;
  flex-direction: row;
`

export default class Header extends Component<{}, State> {
  state = {
    langs: [
      'Italian',
      'English',
      'Spanish'
    ]
  }

  render() {

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
        <Select list={langs} />
      </Wrapper>
    )
  }
}
