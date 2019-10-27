import React, { Fragment, FC, ChangeEvent } from 'react'

import {
  Wrapper
} from '../accordion_details/AccordionDetails.style'

import Input from '../../../components/input/Input.view'
import FromToDate from '../../../components/FromToDate.view'

type Props = {
  onTitleSectionChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
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
          onChange={ props.onChange }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="Employer"
          name="employer"
          onChange={ props.onChange }
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          withLabel={true}
          label="City"
          name="city"
          onChange={ props.onChange }
        />
      </Wrapper>
      <FromToDate />
      <Wrapper>
        <Input
          type="textarea"
          withLabel={true}
          label="Description"
          name="description"
          onChange={ props.onChange }
          text={ props.text }
        />
      </Wrapper>
    </Fragment>
  )
}

export default EmploymentView
