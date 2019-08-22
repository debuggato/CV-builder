import React, { FC } from 'react'

import {
  Wrapper,
  FullName,
  JobTitle
} from './TemplateOne.style'

const TemplateOne: FC = (props: any) => {
  return (
    <Wrapper>
      <FullName>{ props.getFirstName + ' ' + props.getLastName}</FullName>
      <JobTitle>{ props.getJobTitle }</JobTitle>
    </Wrapper>
  )
}

export default TemplateOne