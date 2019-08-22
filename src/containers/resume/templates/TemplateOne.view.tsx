import React, { FC } from 'react'

import { Wrapper } from './TemplateOne.style'

const TemplateOne: FC = (props: any) => {
  return (
    <Wrapper>
      <h1>{ props.getFirstName }</h1>
      { props.getJobTitle }
    </Wrapper>
  )
}

export default TemplateOne