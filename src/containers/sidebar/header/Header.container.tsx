import React, { Component, CSSProperties } from 'react'
import styled from 'styled-components'

import Select from '../../../components/select/Select.view'
import Input from '../../../components/input/Input.view'

interface State {
  langs: string[]
}

const Wrapper = styled.div`
  text-align: center;
  margin-top: 40px;
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
      width: '135px',
      margin: '0 auto',
      marginBottom: '10px',
      fontSize: '17px',
      fontWeight: 700,
      textAlign: "center"
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
