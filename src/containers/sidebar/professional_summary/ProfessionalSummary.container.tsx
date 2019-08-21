import React, { Component } from 'react'
import styled from 'styled-components'

import Textarea from '../../../components/textarea/Textarea.view'
import Title from '../../../components/Title.view'

export const Wrapper = styled.div`
  padding: 10px;
  margin: 10px 0;
`

export default class ProfessionalSummary extends Component {

  render() {

    return (
      <Wrapper>
        <Title>Professional Summary</Title>
        <Textarea
          isVisible={ true }
          withLabel={ true }
          label="Description"
        />
      </Wrapper>
    )
  }
}
