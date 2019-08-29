import React, { FC } from 'react'
import styled from 'styled-components'

import Input from './input/Input.view'
import FieldLabel from './FieldLabel.view'

type Props = {  }

const Container = styled.div`
  margin: 10px;
`

const Wrapper = styled.div`
  display: flex;

  input:first-child {
    margin-right: 10px;
  }
`

const FromToDate: FC<Props> = props => {
  return (
    <Container>
      <FieldLabel value="Start & End date" />
      <Wrapper>
        <Input
          type="text"
          withLabel={ false }
          label="Start date"
          name="startDate"
        />
        <Input
          type="text"
          withLabel={ false }
          label="End date"
          name="endDate"
        />
      </Wrapper>
    </Container>
  )
}

export default FromToDate
