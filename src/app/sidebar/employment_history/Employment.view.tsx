import React, { Fragment, FC, ChangeEvent } from 'react'

import {
  Wrapper
} from '../accordion_details/AccordionDetails.style'

import Input from '../../../components/input/Input.view'
import Textarea from '../../../components/textarea/Textarea.view'
import FromToDate from '../../../components/FromToDate.view'

type Props = {
  onTitleSectionChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onChangeDescription: (value: HTMLTextAreaElement) => void,
  text: string
}

const EmploymentView: FC<Props> = props => {
  return (
    <Fragment>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Job Title"
          name="jobTitle"
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Employer"
          name="employer"
          onChange={ props.onTitleSectionChange }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="City"
          name="city"
        />
      </Wrapper>
      <FromToDate />
      <Wrapper>
        <Textarea
          withLabel={true}
          label="Description"
          name="description"
          onChange={ props.onChangeDescription }
          text={ props.text }
        />
      </Wrapper>
    </Fragment>
  )
}

export default EmploymentView
