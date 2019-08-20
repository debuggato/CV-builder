import React, { Component } from 'react'
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

    return (
      <Wrapper>
        <Select list={langs} />
      </Wrapper>
    )
  }
}
